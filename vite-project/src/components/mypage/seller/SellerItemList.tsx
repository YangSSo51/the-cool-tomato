import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ItemsofItems from "./SellerItemsofItems";
import { sellersMyproductsAPI } from "../../../api/Itemlist";


function Items() {
    const navigate = useNavigate();
    const [sellerItem, setSellerItem] = useState([])

    useEffect(() => {
        const fetchData = () => {
            sellersMyproductsAPI()
                .then((response) => {
                    setSellerItem(response.data.list);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        fetchData();
    }, []);
    
    function onclick() {
        navigate("/v1/ItemAdd");
    }

    return (
        <Box flexDirection="column" w="90%" h="full">
            <Button onClick={onclick} colorScheme='yellow'>상품등록</Button>
            { sellerItem && sellerItem.map((item, index) => {
                return <ItemsofItems sellerItem={sellerItem[index]} key={index} />
                })
            }
        </Box>
    )
}

export default Items
