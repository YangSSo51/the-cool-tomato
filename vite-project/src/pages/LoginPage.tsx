import React from "react";
import { Text, Center, Container } from "@chakra-ui/react";
import LoginForm from "../components/login/LoginForm";
import LoginNavigate from "../components/login/LoginNavigate";

function LoginPage() {
    return (
        <>
            <Center>
                <Container pt={3} m={0} maxW="50%" centerContent>
                    <Text
                        pb={3}
                        fontSize="4xl"
                        fontWeight="bold"
                        color="#0E3E30"
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
