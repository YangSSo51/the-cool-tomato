import { Box } from "@chakra-ui/react";
import LiveGoods from "./LiveItemComponent";
import Carousel from 'react-bootstrap/Carousel';
import GoodsList from "./dummylist/dummy";

export default function CarouselComponent() {
    const dummylist = GoodsList;
    return (

        {
            dummylist.map((data) => (
                <Carousel.Item interval={1000}>
                    <Carousel.Caption>
                        <Box
                            w="calc(15% + 2rem)"
                            p={1}
                            className="carousel_img"
                        >
                            {data.price}
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        }

    )
}
