import { Text, Highlight } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

export default function Feedback() {
    return (
        <>
            <Center mb={"1.5rem"}>
                <Text fontSize={"4xl"} as={"b"}>
                    실시간 피드백
                </Text>
            </Center>
            <Text mb="4" borderBottom="1px" borderBottomColor="lightgray">
                말 좀 잘하세용!!
            </Text>
            <Text mb="4" borderBottom="1px" borderBottomColor="lightgray">
                하 피드백 어케 들어오려나
            </Text>
            <Text mb="4" borderBottom="1px" borderBottomColor="lightgray">
                어케들어올거냐고요
            </Text>
            <Text mb="4" borderBottom="1px" borderBottomColor="lightgray">
                모르겠어용
            </Text>
            <Text mb="4" borderBottom="1px" borderBottomColor="lightgray">
                <Highlight
                    query={[
                        "목소리 크게",
                        "튼실한 고구마",
                        "최적의 토양",
                        "우리아이 안심",
                    ]}
                    styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "themeRed.500",
                        color: "white",
                    }}
                >
                    With the 목소리 크게 component, 우리아이 안심 you can
                    spotlight, 튼실한 고구마 emphasize 최적의 토양 and
                    accentuate words.
                </Highlight>
            </Text>
        </>
    );
}
