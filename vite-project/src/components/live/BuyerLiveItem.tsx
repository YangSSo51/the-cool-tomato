import { Text, Flex, Image } from "@chakra-ui/react";

interface Items {
    id: number;
    img: string;
    title: string;
    price: number;
}

const BuyerLiveItem = ({ id, img, title, price }: Items) => {
    return (
        <Flex direction={"row"} gap={3} key={id} p={"0.3rem"}>
            <Image objectFit={"cover"} boxSize={"6rem"} src={`${img}`} />
            <Flex direction={"column"} gap={3} mt={"1rem"}>
                <Text as={'b'} fontSize={"lg"}>{title}</Text>
                <Text as={'b'} fontSize={"lg"}>{price}</Text>
            </Flex>
        </Flex>
    );
};

export default BuyerLiveItem;
