import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

export default function Prompter() {
    return (
        <>
            <Center mb={"1.5rem"}>
                <Text fontSize={"4xl"} as={"b"}>
                    스크립트
                </Text>
            </Center>
            <h1>스크립트 내용이 나올 부분입니다.</h1>
        </>
    );
}
