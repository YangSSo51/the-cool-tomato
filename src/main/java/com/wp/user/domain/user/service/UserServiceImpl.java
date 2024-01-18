package com.wp.user.domain.user.service;

import com.wp.user.domain.user.dto.request.FindPasswordRequest;
import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.dto.request.LoginRequest;
import com.wp.user.domain.user.dto.response.DuplicateLoginIdResponse;
import com.wp.user.domain.user.dto.response.LoginResponse;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.User;
import com.wp.user.domain.user.repository.UserRepository;
import com.wp.user.global.common.code.ErrorCode;
import com.wp.user.global.common.service.JwtService;
import com.wp.user.global.exception.BusinessExceptionHandler;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JavaMailSender javaMailSender;

    // 회원가입
    @Override
    @Transactional
    public void saveUser(JoinRequest joinRequest) {

        // 이메일 중복인 경우 강제 에러 발생
        try {
            if(userRepository.existsByEmail(joinRequest.getEmail()))
                throw new BusinessExceptionHandler(ErrorCode.ALREADY_REGISTERED_EMAIL);
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.ALREADY_REGISTERED_EMAIL); // errorCode : B001
        }

        // User 엔티티 생성
        User user = User.builder()
                .auth(Auth.BUYER)
                .loginId(joinRequest.getLoginId())
                .password(passwordEncoder.encode(joinRequest.getPassword()))
                .email(joinRequest.getEmail())
                .nickname(joinRequest.getNickname())
                .sex(joinRequest.getSex())
                .birthday(joinRequest.getBirthday())
                .build();

        // 회원 저장
        userRepository.save(user);
    }

    // 로그인 ID 중복 확인
    @Override
    public DuplicateLoginIdResponse existUserByLoginId(String loginId) {
        boolean isDuplicate = userRepository.existsByLoginId(loginId);
        return DuplicateLoginIdResponse.builder().isDuplicate(isDuplicate).build();
    }

    // 로그인(미완)
    @Override
    @Transactional
    public LoginResponse login(LoginRequest logInRequest) {
        // 로그인, 패스워드 검사
        User user = userRepository.findUserByLoginId(logInRequest.getLoginId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_LOGIN_ID)); // errorCode : B002
        try {
            if(!passwordEncoder.matches(logInRequest.getPassword(), user.getPassword()))
                throw new BusinessExceptionHandler(ErrorCode.NOT_VALID_PASSWORD);
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_VALID_PASSWORD); // errorCode : B003
        }
        // 토큰 발급
        return LoginResponse.builder()
                .profileImg(user.getProfileImg())
                .auth(user.getAuth())
                .accessToken("")
                .refreshToken("")
                .build();
    }

    // 아이디 찾기
    @Override
    @Transactional
    public void findLoginIdByEmail(String email) {
        // 이메일로 로그인 아이디 찾기
        User user = userRepository.findUserByEmail(email).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_EMAIL)); // errorCode : B005
        // 이메일 보내기
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, false, "UTF-8");
            helper.setTo(user.getEmail());
            helper.setSubject("[멋쟁이 토마토] 로그인 아이디 안내 이메일 입니다.");
            StringBuffer sb = new StringBuffer();
            sb.append("안녕하세요. 멋쟁이 토마토 로그인 아이디 안내 관련 이메일 입니다.");
            sb.append(System.lineSeparator());
            sb.append("[").append(user.getNickname()).append("]님의 가입하신 아이디는 ").append(user.getLoginId()).append("입니다.");
            helper.setText(sb.toString());
            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new BusinessExceptionHandler(ErrorCode.SEND_EMAIL_ERROR);
        }
    }

    // 비밀번호 찾기
    @Override
    @Transactional
    public void setTempPasswordByEmail(String loginId, String email) {
        // 이메일로 회원 정보 찾기
        User user = userRepository.findUserByLoginIdAndEmail(loginId, email).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_LOGIN_ID_EMAIL)); // errorCode : B007
        // 새로운 임시 비밀번호 설정
        String tempPassword = getTempPassword();
        user.setPassword(passwordEncoder.encode(tempPassword));
        // 이메일 보내기
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, false, "UTF-8");
            helper.setTo(user.getEmail());
            helper.setSubject("[멋쟁이 토마토] 임시 비밀번호 안내 이메일 입니다.");
            StringBuffer sb = new StringBuffer();
            sb.append("안녕하세요. 멋쟁이 토마토 임시 비밀번호 안내 관련 이메일 입니다.");
            sb.append(System.lineSeparator());
            sb.append("[").append(user.getNickname()).append("]님의 임시 비밀번호는 ").append(tempPassword).append("입니다.");
            helper.setText(sb.toString());
            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new BusinessExceptionHandler(ErrorCode.SEND_EMAIL_ERROR);
        }
    }

    // 임시 비밀번호 생성
    public static String getTempPassword(){
        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

        String str = "";

        // 문자 배열 길이의 값을 랜덤으로 10개를 뽑아 구문을 작성함
        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        return str;
    }

    // 로그아웃(미완)
    @Override
    @Transactional
    public void logout(HttpServletRequest httpServletRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 로그아웃 처리
    }

    // 회원 탈퇴(미완)
    @Override
    @Transactional
    public void removeUser(HttpServletRequest httpServletRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 회원 정보 추출

        // 회원 탈퇴 처리(Refresh Token 삭제)

        // 회원 탈퇴 처리(DB 삭제)
    }


}
