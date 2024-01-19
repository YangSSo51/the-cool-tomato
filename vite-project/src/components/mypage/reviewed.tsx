import { Box, Text } from "@chakra-ui/layout";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export default function Reviewed() {

    const [ reviewed, setReviewed ] = useState([])
    const testData = reviewed.map((item, index) => {
        return (
            <li key={index}>{item.product_name} / {item.product_content}</li>
        )
    })

    return (

        
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            { testData ? testData : <Text color="gray.400">구매한 이력이 없습니다. 상품 구경하러 가기</Text> }
        </Box>

    )
}
