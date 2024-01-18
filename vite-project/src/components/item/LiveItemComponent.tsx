import { Box } from "@chakra-ui/react";
import "../../css/ItemListComponentcss.css";

interface GoodsProps {
    img: string;
    price: number;
}

const Goods = ({ img, price }: GoodsProps) => {
    return (
        <>
            <Box>
                <ul>
                    <a href="twtter.com">
                        <div className="img">
                            <img className="Realimage" src={img}></img>
                        </div>
                        <span className="tagWrap">{price}</span>
                    </a>
                </ul>
            </Box>
        </>
    );
};

export default Goods;
