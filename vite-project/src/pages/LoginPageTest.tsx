import React from "react";
import axios from "axios";
import { Text, Center, Container } from "@chakra-ui/react";
import LoginForm from "../components/login/LoginForm";
import LoginNavigate from "../components/login/LoginNavigate";

export const login = async (id, password) => {
    const result = await axios.post('링크', {id, password});
    return result.data;
};

function LoginPage() {
    const onClick = async () => {
        
    }
    const result = await login(id, pw);
    const { accessToken, refreshToken } = result;
    localStorage.setItem('access', accessToken);
    localStorage.setItem('refresh', refreshToken);


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
