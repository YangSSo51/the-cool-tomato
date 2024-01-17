import React from "react";
import { Container, Text, HStack, StackDivider } from "@chakra-ui/react";

function LoginNavigate() {
    return (
        <>
            <HStack
                pt={5}
                w="80%"
                divider={<StackDivider borderColor="grey" />}
            >
                <Container w="auto">
                    <Text>아이디 찾기</Text>
                </Container>
                <Container w="auto">
                    <Text>비밀번호 찾기</Text>
                </Container>
                <Container w="auto">
                    <Text>회원가입</Text>
                </Container>
            </HStack>
        </>
    );
}

export default LoginNavigate;
