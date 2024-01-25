import { Box } from "@chakra-ui/react";
import "../../css/ItemListComponentcss.css";
import { Link } from "react-router-dom";

interface GoodsProps {
    id: number;
    img: string;
    title: string;
    price: number;
}

const Goods = ({ id, img, title, price }: GoodsProps) => {
    return (

        <Link to={`detail/${id}`}>
            <Box>
                <Box>
                    <Box maxW={"25rem"} className="img">
                        <img src={img}></img>
                    </Box>
                    <Box className="Text">
                        <Box className="TextTitle">{title}</Box>
                    </Box>
                    <Box className="tagWrap">{price}</Box>
                </Box>
            </Box>
        </Link>
    );
};

export default Goods;
