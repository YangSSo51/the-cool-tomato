import { useState, useEffect } from "react";
import {
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    Select,
    FormLabel,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerification, setEmailVerification] = useState("");
    const [nickname, setNickname] = useState("");
    const [sex, setSex] = useState("");
    const [birthday, setBirthday] = useState("");
    const isUsernameValid = false;
    const isPasswordValid = false;
    const isEmailValid = false;
    const isNicknameValid = false;
    const isSexValid = false;
    const isBirthdayValid = false;

    async function usernameDuplicateCheck(): Promise<void> {}

    function onSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <FormControl mt={1} isInvalid={isUsernameValid} isRequired>
                    <FormLabel>아이디</FormLabel>
                    <InputGroup size="md">
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="ID"
                            size="md"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputRightElement width="4rem" pr={"1"}>
                            <Button
                                h="1.75rem"
                                size="sm"
                                colorScheme="themeGreen"
                                variant="solid"
                                // color="themeGreen.500"
                                onClick={usernameDuplicateCheck}
                                borderRadius="md"
                            >
                                중복확인
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>아이디를 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl my={1} isInvalid={isPasswordValid} isRequired>
                    <FormLabel>비밀번호</FormLabel>
                    <InputGroup size="md">
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="password"
                            size="md"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            mb={1}
                            id="password"
                        ></Input>
                        <InputRightElement>
                            <ViewIcon color="grey" />
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
                            <ViewIcon color="grey" />
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                        비밀번호를 확인해 주세요
                    </FormErrorMessage>
                </FormControl>
                <FormControl my={1} isInvalid={isEmailValid} isRequired>
                    <FormLabel>이메일</FormLabel>
                    <InputGroup size="md" mb={"1"}>
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
                                variant="solid"
                                // color="themeGreen.500"
                                // onClick={}
                                borderRadius="md"
                            >
                                재전송
                            </Button>
                        </InputRightElement>
                    </InputGroup>
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
                                variant="solid"
                                // color="themeGreen.500"
                                // onClick={}
                                borderRadius="md"
                            >
                                확인
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>이메일을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl my={1} isInvalid={isNicknameValid} isRequired>
                    <FormLabel>닉네임</FormLabel>
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
                <FormControl my={1} isInvalid={isSexValid} isRequired>
                    <FormLabel>성별</FormLabel>
                    <Select
                        placeholder="gender"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    >
                        <option value="male">남자</option>
                        <option value="female">여자</option>
                    </Select>
                    <FormErrorMessage>성별을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl my={1} isInvalid={isBirthdayValid} isRequired>
                    <FormLabel>생년월일</FormLabel>
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
                    w="100%"
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
