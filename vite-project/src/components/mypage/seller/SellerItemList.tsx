import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ItemsofItems from "./SellerItemsofItems";
import { sellersMyproductsAPI } from "../../../api/Itemlist";
import { ItemDetailInterface } from "../../../types/DataTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";

function Items() {
    const accessToken = useSelector((state: RootState) => {return state.user.accessToken})
    const navigate = useNavigate();
    const [sellerItem, setSellerItem] = useState<Array<ItemDetailInterface>>([])
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentpage] = useState<string[]>([])

    useEffect(() => {
        sellersMyproductsAPI(page, 2, accessToken)
            .then((response) => {
                // console.log(response)
                setSellerItem(response.data.list);
                
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page]);

    const handleItemDelete = (productId : number) => {
        const updatedItems = sellerItem.filter(item => item.productId !== productId);
        setSellerItem(updatedItems)
    }

    function onclick() {
        navigate("/v1/ItemAdd");
    }

    const pageUpdate = () => {
        setPage(page+1)
    }

    return (
        <Box flexDirection="column" w="90%" h="full">
            <Button onClick={onclick} colorScheme='yellow'>상품등록</Button>
            {sellerItem.map((item) => {
                return <ItemsofItems sellerItem = {item} onDelete={handleItemDelete} key={item.productId} />
            })
            }
            <Button onClick={pageUpdate}> 버어튼 크을릭 </Button>

        </Box>
    )
}

export default Items
