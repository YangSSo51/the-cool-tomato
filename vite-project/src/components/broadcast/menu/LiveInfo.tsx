import { Text } from "@chakra-ui/layout"
import { Center } from "@chakra-ui/react"

export default function LiveInfo() {
    return (
        <Center mb={"1.5rem"}>
            <Text fontSize={"4xl"} as={"b"}>
                방송 정보 수정
            </Text>
        </Center>
    )
}