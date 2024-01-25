import { Flex, Text } from "@chakra-ui/react";

import MainCarouselComponent from "../components/common/MainCarouselComponent";
import LiveCarouselComponent from "../components/broadcast/LiveCarouselComponent";

export default function LiveList() {
    return (
        <>
            <MainCarouselComponent />

            <Flex
                direction={"column"}
                p={"1rem"}
                alignItems={"center"}
                mt={"2rem"}
                mb={"2rem"}
                maxW={"100vw"}
            >
                <Text
                    color={"themeGreen.500"}
                    fontSize={"3xl"}
                    as={"b"}
                    mt={"1rem"}
                >
                    지금 가장 핫한 라이브
                </Text>

                <LiveCarouselComponent />
                <Text
                    color={"themeGreen.500"}
                    fontSize={"3xl"}
                    as={"b"}
                    mt={"1rem"}
                    textAlign={"left"}
                >
                    회원님이 평소 검색한 라이브
                </Text>
                <LiveCarouselComponent />
                <Text
                    color={"themeGreen.500"}
                    fontSize={"3xl"}
                    as={"b"}
                    mt={"1rem"}
                >
                    현종 아조씨가 좋아하는 라이브
                </Text>
                <LiveCarouselComponent />
            </Flex>
        </>
    );
}
