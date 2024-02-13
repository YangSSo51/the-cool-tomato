import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getLiveProduct } from "../../api/liveProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import { LiveProductAll } from "../../types/DataTypes";
import BuyerLiveItem from "./BuyerLiveItem";

export default function BuyerItem({ roomId }: { roomId: number }) {
    const accessToken = useSelector((state: RootState) => { return state.user.accessToken })
    const [ liveproducts, setLiveproducts ] = useState<LiveProductAll[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLiveProduct({"live-id":39}, accessToken);
            setLiveproducts(response.list)
        };
        fetchData();
    }, [roomId, accessToken])

    return (
        <>
            <Flex direction={"column"}>
                <Center p={"1rem"}>
                    <Text as={"b"} fontSize={"2xl"}>
                        라이브 특별 가격!
                    </Text>
                </Center>
                <Divider></Divider>
                <Box p={"0.5rem"}>
                    {liveproducts.map((item) => (
                        <BuyerLiveItem
                            key={item.liveProductId}
                            id={item.liveProductId}
                            img={item.imgSrc}
                            title={item.productName}
                            price={item.price}
                        />
                    ))}
                </Box>
            </Flex>
        </>
    );
}
