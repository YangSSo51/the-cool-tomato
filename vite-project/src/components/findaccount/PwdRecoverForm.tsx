import React from "react";
import {
    Text,
    Input,
    Button,
    Center,
    FormControl,
    Container,
    FormLabel,
} from "@chakra-ui/react";

function PwdRecoverForm() {
    function onSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        alert("PwdRecoverForm onSubmit");
    }

    return (
        <>
            <Container
                pt={3}
                m={0}
                maxW={{ xl: "35%", lg: "55%", sm: "90%" }}
                centerContent
            >
                <Text
                    pb={3}
                    fontSize="4xl"
                    fontWeight="bold"
                    color="themeFontGreen.500"
                >
                    비밀번호 찾기
                </Text>
                <form onSubmit={onSubmit} style={{ width: "100%" }}>
                    <FormControl my={1}>
                        <FormLabel>아이디 입력</FormLabel>
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="ID"
                            size="md"
                            autoComplete="username"
                        />
                    </FormControl>
                    <FormControl my={1}>
                        <FormLabel>이메일 입력</FormLabel>
                        <Input
                            focusBorderColor="themeGreen.500"
                            placeholder="email"
                            type="email"
                            size="md"
                            autoComplete="email"
                        />
                    </FormControl>
                    <Center>
                        <Button
                            mt={4}
                            w="100%"
                            colorScheme="themeGreen"
                            type="submit"
                            borderRadius="3xl"
                            py={1}
                        >
                            전송
                        </Button>
                    </Center>
                </form>
            </Container>
        </>
    );
}

export default PwdRecoverForm;
