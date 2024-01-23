import React from "react";
import { Text, Center, Container, Button } from "@chakra-ui/react";

function FindAccountResult() {
    function onClick(): void {
        alert("FindAccountResult onClick");
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
                    완료되었습니다
                    <br />
                    이메일을 확인해 주세요
                </Text>
                <Button
                    mt={4}
                    w="100%"
                    colorScheme="themeGreen"
                    borderRadius="3xl"
                    py={1}
                    onClick={onClick}
                >
                    메인으로
                </Button>
            </Container>
        </>
    );
}

export default FindAccountResult;
