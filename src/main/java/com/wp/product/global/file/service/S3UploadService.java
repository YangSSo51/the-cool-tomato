package com.wp.product.global.file.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class S3UploadService {

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    public String makeDir(){
        String folderPath = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));

        amazonS3.putObject(bucket, folderPath + "/", new ByteArrayInputStream(new byte[0]), new ObjectMetadata());
        return folderPath;
    }
    public String saveFile(MultipartFile multipartFile) throws IOException {
        if(!multipartFile.isEmpty()) {
            String folderPath = makeDir();
            String uuid = UUID.randomUUID().toString();
            String originalFilename = uuid+multipartFile.getOriginalFilename();
            System.out.println("파일명 : "+originalFilename);
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(multipartFile.getSize());
            metadata.setContentType(multipartFile.getContentType());
            try {
                amazonS3.putObject(bucket + "/" + folderPath, originalFilename, multipartFile.getInputStream(), metadata);
            }catch (Exception e){
                log.debug(e.getMessage());
                throw new BusinessExceptionHandler("파일 업로드 중 에러 발생", ErrorCode.FAIL_FILE_UPLOAD);
            }
            return amazonS3.getUrl(bucket+"/"+folderPath, originalFilename).toString();
        }
        return "";
    }

    public void deleteImage(String imgsrc)  {
        try {
//            String path = imgsrc.substring(0,imgsrc.lastIndexOf(bucket)+);
            String fileName = imgsrc.substring(imgsrc.lastIndexOf(bucket)+bucket.length()+1);
//            System.out.println(path);
            System.out.println(fileName);

            amazonS3.deleteObject(bucket, fileName);
        }catch (Exception e){
            log.debug(e.getMessage());
            throw new BusinessExceptionHandler("사진 삭제 중 에러 발생", ErrorCode.FAIL_FILE_DELETE);
        }
    }
}
