import { Box, Flex } from "@chakra-ui/react";
import "../../css/MainCarousel.css";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaRegCircle } from "react-icons/fa";

export default function MainCarouselComponent() {
    const dummylist = [
        { img: "/img/MainC1.PNG" },
        { img: "/img/MainC2.PNG" },
        { img: "/img/MainC3.PNG" },
    ];
    const [slideIndex, setSlideIndex] = useState(0);

    // moveBar
    const moveLeft = () => {
        setSlideIndex(slideIndex === 0 ? dummylist.length - 1 : slideIndex - 1);
    };
    const moveRight = () => {
        setSlideIndex(slideIndex === dummylist.length - 1 ? 0 : slideIndex + 1);
    };

    if (slideIndex === dummylist.length) {
        setSlideIndex(0);
    }

    useEffect(() => {
        const totalSlides = dummylist.length;
        const interval = setInterval(() => {
            setSlideIndex((currentIndex) => (currentIndex + 1) % totalSlides);
        }, 9000);

        return () => clearInterval(interval);
    }, [dummylist.length]);

    return (
        <Box overflowX={"hidden"} position={"relative"}>
            <Flex
                overflowX={"hidden"}
                wrap={"nowrap"}
                style={{
                    width: `${100 * dummylist.length}vw`,
                    transition: "all 500ms ease-in-out",
                    transitionDuration: "1s",
                    transform: `translateX(${-1 * ((100 / dummylist.length) * slideIndex)
                        }%)`,
                }}

            >
                {dummylist.map((data, index) => (
                    <Box key={index} p={2} w={"100%"}>
                        <img
                            className="img"
                            src={data.img}
                        ></img>
                    </Box>
                ))}
            </Flex>
            <Box
                position={"absolute"}
                top={"50%"}
                transform={"translateY(-50%)"}
                left={"20%"}
                zIndex={2}
            >
                <ChevronLeftIcon boxSize={10} onClick={moveLeft} />
            </Box>
            <Box
                position={"absolute"}
                top={"50%"}
                transform={"translateY(-50%)"}
                right={"20%"}
                zIndex={2}
            >
                <ChevronRightIcon boxSize={10} onClick={moveRight} />
            </Box>
            <Box
                position={"absolute"}
                bottom={"0"}
                color={"white"}
                width={"100%"}
                textAlign={"center"}
                mb={"2rem"}
            >
                <FaRegCircle className="border active" />
                <FaRegCircle className="border" />
                <FaRegCircle className="border" />
            </Box>
        </Box>
    );
}