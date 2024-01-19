import { Box, Flex } from "@chakra-ui/react";
import GoodsList from "./dummylist/dummy";
import "../../css/ItemListComponentcss.css";
import { useEffect, useState } from "react";

export default function CarouselComponent() {
    const dummylist = GoodsList;
    const [slideIndex, setSlideIndex] = useState(0);

    if (slideIndex === dummylist.length) {
        setSlideIndex(0)
    }

    const SLIDE_NUM = dummylist.length;
    const beforeSlide = dummylist[SLIDE_NUM - 1];
    const afterSlide = dummylist[0];
    const copiedArr = [beforeSlide, ...dummylist, afterSlide];

    useEffect(() => {
        const totalSlides = dummylist.length;
        const interval = setInterval(() => {
            setSlideIndex((currentIndex) => (currentIndex + 1) % totalSlides);
        }, 2000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [dummylist.length]);

    return (
        <Box display={"block"} p={"1rem"}>
            <Flex
                overflowX={"auto"}
                wrap={"nowrap"}
                style={{
                    width: `${24 * dummylist.length}vw`,
                    transition: "all 2000ms ease-in-out",
                    transform: `translateX(${
                        -1 * ((100 / dummylist.length) * slideIndex)
                    }%)`,
                }}
            >
                {dummylist.map((data, index) => (
                    <Box key={index} p={2}>
                        <Box width="24rem">
                            <img
                                className="img"
                                src={data.img}
                                alt={`Item ${index}`}
                            ></img>
                        </Box>
                        <Box className="tagWrap" mt={"1rem"}>
                            {data.price}
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
