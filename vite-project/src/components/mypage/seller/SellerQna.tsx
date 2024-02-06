import { Box, Text } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import QnaItems from "./SellerQnaItems";
import { sellerGetQnaAPI } from "../../../api/itemQnA";

function Qna() {
    const [sellerQnaList, setSellerQnaList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await sellerGetQnaAPI(1, 16)
                setSellerQnaList(response.data.list)
                console.log(sellerQnaList)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, [])

    return (
        <Box flexDirection="column" w="90%" h="full">
            <QnaItems />
        </Box>
    )
}

export default Qna