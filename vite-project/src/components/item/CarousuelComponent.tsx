import { Box, Flex } from "@chakra-ui/react";
import LiveGoods from "./LiveItemComponent";
import dummylist from "./dummylist/dummy";
import ItemsCarousel from "react-items-carousel";
import { useState } from "react";

export default function CarouselComponent() {
    const carousel_num = dummylist.length;
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <Flex p={"2rem"}>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={8}
                gutter={20}
                leftChevron={<button>{"<"}</button>}
                rightChevron={<button>{">"}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            ></ItemsCarousel>
            <Flex
                wrap="wrap"
                m="auto"
                gap={3}
            >
                {dummylist.map((data) => (
                    <Box
                        key={data.id}
                        w="calc(15% + 2rem)"
                        p={1}
                        className="carousel_img"
                    >
                        <LiveGoods img={data.img} price={data.price} />
                    </Box>
                ))}
            </Flex>
            </div>
        </Flex>
    );
}
