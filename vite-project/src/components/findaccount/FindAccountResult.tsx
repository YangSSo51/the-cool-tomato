import React from "react";
import { Text, Center, Container } from "@chakra-ui/react";

function FindAccountResult() {
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
            </Container>
        </>
    );
}

export default FindAccountResult;
