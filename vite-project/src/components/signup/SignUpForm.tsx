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
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
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
                <FormControl mt={1} isInvalid={isUsernameValid}>
                    <InputGroup size="lg">
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="ID"
                            size="md"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
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
                        <FormErrorMessage>
                            아이디를 확인해 주세요
                        </FormErrorMessage>
                    </InputGroup>
                </FormControl>
                <FormControl my={1} isInvalid={isPasswordValid}>
                    <InputGroup size="lg">
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
                    <InputGroup size="lg">
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
                <FormControl py={1} isInvalid={isEmailValid}>
                    <Input
                        focusBorderColor="themeGreen.500"
                        placeholder="email"
                        size="md"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <FormErrorMessage>이메일을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl py={1} isInvalid={isNicknameValid}>
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
                <FormControl py={1} isInvalid={isSexValid}>
                    <Select
                        placeholder="성별"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    >
                        <option value="male">남자</option>
                        <option value="female">여자</option>
                    </Select>
                    <FormErrorMessage>성별을 확인해 주세요</FormErrorMessage>
                </FormControl>
                <FormControl py={1} isInvalid={isBirthdayValid}>
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
            </form>
        </>
    );
}

export default SignUpForm;
