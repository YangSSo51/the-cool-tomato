import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    FormErrorMessage,
    Select,
    FormLabel,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import { ViewIcon, CheckIcon } from "@chakra-ui/icons";
import { SignupUserAPI } from "../../api/user";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerification, setEmailVerification] = useState("");
    const [nickname, setNickname] = useState("");
    const [sex, setSex] = useState("");
    const [birthday, setBirthday] = useState("");

    console.log(username)
    console.log(password)
    console.log(passwordAgain)
    console.log(email)
    console.log(nickname)
    console.log(sex)
    console.log(birthday)

    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isNicknameValid, setIsNicknameValid] = useState(false);
    const [isSexValid, setIsSexValid] = useState(false);
    const [isBirthdayValid, setIsBirthdayValid] = useState(false);

    async function usernameDuplicateCheck(): Promise<void> {}

    function handleUsername(e) {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[^A-Za-z0-9]/g, '');
        // 한글 입력 제한
        if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(inputValue)) {
            alert('한글은 입력할 수 없습니다.');
            return;
        }
        // 글자 수 제한
        const limitedValue = cleanedValue.substring(0, 30);
        if (cleanedValue.length > 30) {
            alert('ID는 최대 30자까지 가능합니다.');
            return;
        }
        setUsername(limitedValue);
    }

    function handlePassword(e) {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[^A-Za-z0-9]/g, '');
        // 한글 입력 제한
        if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(inputValue)) {
            alert('한글은 입력할 수 없습니다.');
            return;
        }
        // 글자 수 제한
        const limitedValue = cleanedValue.substring(0, 30);
        if (cleanedValue.length > 30) {
            alert('ID는 최대 30자까지 가능합니다.');
            return;
        }
        setUsername(limitedValue);
    }

    function handleEmail(e) {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[^A-Za-z0-9]/g, '');
        // 한글 입력 제한
        if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(inputValue)) {
            alert('한글은 입력할 수 없습니다.');
            return;
        }
        // 글자 수 제한
        const limitedValue = cleanedValue.substring(0, 30);
        if (cleanedValue.length > 30) {
            alert('ID는 최대 30자까지 가능합니다.');
            return;
        }
        setUsername(limitedValue);
    }
    
    function onSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        // TODO: 회원가입 비동기 통신
        SignupUserAPI 
        console.log('온서브밋')
    }


    
    return (
        <>
            <form
                onSubmit={onSubmit}
                style={{ width: "100%", height: "100vh" }}
            >
                <FormControl my={2} isInvalid={isUsernameValid} isRequired>
                    <FormLabel>
                        <Text as={"b"}>아이디</Text>
                    </FormLabel>
                    <InputGroup size="md">
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="ID"
                            size="md"
                            autoComplete="username"
                            value={username}
                            onChange={handleUsername}
                        />
                        <InputRightElement width="4.5rem" pr={"1"}>
                            <Button
                                h="1.75rem"
                                size="sm"
                                colorScheme="themeGreen"
                                variant="ghost"
                                onClick={usernameDuplicateCheck}
                                borderRadius="md"
                                _hover={{
                                    bg: "themeGreen.500",
                                    color: "white",
                                }}
                            >
                                중복확인
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>아이디를 확인해 주세요</FormErrorMessage>
                </FormControl>
                
                <FormControl my={2} isInvalid={isPasswordValid} isRequired>
                    <FormLabel>
                        <Text as={"b"}>비밀번호</Text>
                    </FormLabel>
                    <InputGroup size="md" mb={2}>
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="password"
                            size="md"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                        ></Input>
                        <InputRightElement>
                            <CheckIcon color="green.500" mr={"1"} />
                            <ViewIcon color="grey" mr={"1"} />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup size="md">
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="password again"
                            size="md"
                            value={passwordAgain}
                            onChange={(e) => setPasswordAgain(e.target.value)}
                            id="passwordAgain"
                        ></Input>
                        <InputRightElement>
                            <CheckIcon color="green.500" mr={"1"} />
                            <ViewIcon color="grey" mr={"1"} />
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                        비밀번호를 확인해 주세요
                    </FormErrorMessage>
                </FormControl>

                <FormControl my={2} isInvalid={isEmailValid} isRequired>
                    <FormLabel>
                        <Text as={"b"}>이메일</Text>
                    </FormLabel>
                    <InputGroup size="md" mb={"2"}>
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="email"
                            size="md"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                        <InputRightElement pr={"1"} w="3.25rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                colorScheme="themeGreen"
                                variant="ghost"
                                // color="themeGreen.500"
                                // onClick={}
                                borderRadius="md"
                                _hover={{
                                    bg: "themeGreen.500",
                                    color: "white",
                                }}  
                            >
                                재전송
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {/* {errors.email && <p>{errors.email.message}</p>} */}
                    <InputGroup size="md">
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="verification code"
                            size="md"
                            value={emailVerification}
                            onChange={(e) =>
                                setEmailVerification(e.target.value)
                            }
                        ></Input>
                        <InputRightElement pr={"1"}>
                            <Button
                                h="1.75rem"
                                size="sm"
                                colorScheme="themeGreen"
                                variant="ghost"
                                // color="themeGreen.500"
                                // onClick={}
                                borderRadius="md"
                                _hover={{
                                    bg: "themeGreen.500",
                                    color: "white",
                                }}
                            >
                                확인
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>이메일을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl my={2} isInvalid={isNicknameValid} isRequired>
                    <FormLabel>
                        <Text as={"b"}>닉네임</Text>
                    </FormLabel>
                    <Input
                        focusBorderColor="themeGreen.500"
                        placeholder="nickname"
                        size="md"
                        autoComplete="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    ></Input>
                    <FormErrorMessage>닉네임을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl my={2} isInvalid={isSexValid} isRequired>
                    <FormLabel>
                        <Text as={"b"}>성별</Text>
                    </FormLabel>
                    <Select
                        placeholder=""
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    >
                        <option value="male">남자</option>
                        <option value="female">여자</option>
                    </Select>
                    <FormErrorMessage>성별을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl my={2} isInvalid={isBirthdayValid} isRequired>
                    <FormLabel>
                        <Text as={"b"}>생년월일</Text>
                    </FormLabel>
                    <Input
                        focusBorderColor="themeGreen.500"
                        placeholder="birthday"
                        size="md"
                        type="date"
                        autoComplete="bday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    ></Input>
                </FormControl>
                <Button
                    my={4}
                    w="95%"
                    colorScheme="themeGreen"
                    type="submit"
                    borderRadius="3xl"
                >
                    회원가입
                </Button>
            </form>
        </>
    );
}

export default SignUpForm;
