import React from "react";
import { Text, Center, Container } from "@chakra-ui/react";
import LoginForm from "../components/login/LoginForm";
import LoginNavigate from "../components/login/LoginNavigate";

function LoginPage() {
    return (
        <>
            <Center>
                <Container
                    pt={3}
                    m={0}
                    maxW={{ xl: "35%", lg: "75%", sm: "90%" }}
                    centerContent
                >
                    <Text
                        pb={3}
                        fontSize="4xl"
                        fontWeight="bold"
                        color="themeFontGreen.500"
                    >
                        Login
                    </Text>
                    <LoginForm />
                    <LoginNavigate />
                </Container>
            </Center>
        </>
    );
}

export default LoginPage;
