import { Box, Flex, Text } from "@chakra-ui/react";
import GoodsList from "../item/dummylist/dummy";
import "../../css/ItemListComponentcss.css";
import { useEffect, useState } from "react";

export default function CarouselComponent() {
    const dummylist = GoodsList;
    const [slideIndex, setSlideIndex] = useState(0);

    if (slideIndex === dummylist.length) {
        setSlideIndex(0)
    }

    useEffect(() => {
        const totalSlides = dummylist.length;
        const interval = setInterval(() => {
            setSlideIndex((currentIndex) => (currentIndex + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [dummylist.length]);

    return (
        <Box display={"block"} p={"1rem"} overflowX={"hidden"}>
            <Flex
                overflowX={"hidden"}
                wrap={"nowrap"}
                style={{
                    width: `${24 * dummylist.length}vw`,
                    transition: "all 5000ms linear",
                    transitionDuration: "5s",
                    transform: `translateX(${-1 * ((100 / dummylist.length) * slideIndex)
                        }%)`,
                }}
            >
                {dummylist.map((data, index) => (
                    <Box key={index} p={2}>
                        <Box width="20rem">
                            <img
                                className="img"
                                src={data.img}
                            ></img>
                        </Box>
                        <Text color={"themeRed.500"} as={'b'}>9,900원</Text>
                        <Text ml={"1rem"} color={"black"} as={'b'} textDecorationLine={"line-through"}>{`${data.price}원`}</Text>

                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
