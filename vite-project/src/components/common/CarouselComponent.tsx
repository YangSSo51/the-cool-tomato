import { Box, Flex, Text } from "@chakra-ui/react";
import GoodsList from "../item/dummylist/dummy";
import "../../css/ItemListComponentcss.css";
import { useEffect, useState } from "react";

export default function CarouselComponent() {
    const dummylist = GoodsList; 
    const [offset, setOffset] = useState(0);
    const [elapsed, setElapsed] = useState(1)

    useEffect(() => {
        setOffset(3 * elapsed)
    }, [elapsed])

    setInterval(()=> {
        setElapsed(elapsed + 1)
    }, 2500)
        
    return (
        <>
            <Flex justify={"center"} className="MainText" mt={"1.5rem"} mb={"5rem"}>
                <Text mr={"2rem"} color={"themeFontGreen.500"}>
                    현재 <span style={{ color: "red" }}>라이브</span> 중인 상품</Text>
            </Flex>

            <Box display={"block"} p={"1rem"} overflowX={"hidden"}>
                <Flex
                    overflowX={"hidden"}
                    wrap={"nowrap"}
                    style={{
                        width: `${26 * dummylist.length}vw`,
                        transitionDuration: "10s",
                        transform: `translateX(-${offset}%)`,
                        transition: 'transform 10s linear',
                    }}
                >
                    {dummylist.map((data, index) => (
                        <Box key={index} p={2}>
                            <Box width="20rem" mb={"1rem"}>
                                <img className="img" src={data.img}></img>
                            </Box>
                            <Text
                                color={"themeRed.500"}
                                as={"b"}
                                fontSize={"xl"}
                            >
                                9,900원
                            </Text>
                            <Text
                                fontSize={"lg"}
                                ml={"1rem"}
                                color={"black"}
                                as={"b"}
                                textDecorationLine={"line-through"}
                            >{`${data.price}원`}</Text>
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Flex justify={"center"} p={"2.5rem"} mt={"5rem"}>
                <Box
                    w={"80%"}
                    h={"0.5px"}
                    backgroundColor={"themeGreen.500"}
                ></Box>
            </Flex>
        </>
    );
}
