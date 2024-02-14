import { Flex, Text } from "@chakra-ui/react";
import LiveCarouselComponent from "../components/broadcast/LiveCarouselComponent";
import CarouselComponent from "../components/common/CarouselComponent";
import { fetchLiveCarousel } from "../api/live";
import { useEffect } from "react";

export default function LiveList() {

    useEffect(() => {
        try {
            fetchLiveCarousel().then((res) => {
                console.log(res)
            })
        } catch (err) {
            console.log(err)
        }
    })

    return (
        <>
            <CarouselComponent />

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
            </Flex>
        </>
    );
}
