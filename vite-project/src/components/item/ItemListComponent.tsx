import { Box } from "@chakra-ui/react";
import "../../css/ItemListComponentcss.css";

interface GoodsProps {
    img: string;
    title: string;
    price: number;
}

const Goods = ({ img, title, price }: GoodsProps) => {
    return (
        <>
            <Box>
                <ul>
                    <a href="twtter.com">
                        <div className="img">
                            <img className="Realimage" src={img}></img>
                        </div>
                        <div className="Text">
                            <h4 className="TextTitle">{title}</h4>
                        </div>
                        <span className="tagWrap">{price}</span>
                    </a>
                </ul>
            </Box>
        </>
    );
};

export default Goods;
