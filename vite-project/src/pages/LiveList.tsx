import { Flex, Box, Center } from "@chakra-ui/react";
import LiveListComponent from "../components/broadcast/LiveListComponent";
import MainCarouselComponent from "../components/common/MainCarouselComponent";
import dummylivelist from "../components/item/dummylist/dummylivelist";

export default function LiveList() {
    return (
        <>
            <MainCarouselComponent />

            <Center>
                <Box display={"block"} overflowX={"hidden"} w={"80%"}>
                    <Flex
                        wrap={"nowrap"}
                        direction={"row"}
                        m={"auto"}
                        overflowX={"hidden"}
                        overflowY={"auto"}
                        w={`${16 * dummylivelist.length}vw`}
                    >
                        {dummylivelist.map((data) => (
                            <Box key={data.id} w="calc(16.33%)">
                                <LiveListComponent
                                    id={data.id}
                                    url={data.img}
                                    title={data.title}
                                    price={data.price}
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Center>
        </>
    );
}
