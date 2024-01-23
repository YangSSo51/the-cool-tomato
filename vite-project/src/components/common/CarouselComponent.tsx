import { Box, Flex } from "@chakra-ui/react";
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
        }, 3000);

        return () => clearInterval(interval);
    }, [dummylist.length]);

    return (
        <Box display={"block"} p={"1rem"} overflowX={"hidden"}>
            <Flex
                overflowX={"hidden"}
                wrap={"nowrap"}
                style={{
                    width: `${26 * dummylist.length}vw`,
                    transition: "all 1000ms ease-in-out",
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
                            {data.title}
                        </Box>
                        <Box className="tagWrap" mt={"0.5rem"}>
                            {data.price}
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
