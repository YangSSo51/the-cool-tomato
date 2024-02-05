import { Text, Center, Container } from "@chakra-ui/react";

function NoticePage() {
    return (
        <>
            <Center my="auto" h={"80vh"} w={"100%"}>
                <Container
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
                        관리자의 공지사항
                    </Text>
                </Container>
            </Center>
        </>
    );
}

export default NoticePage;
