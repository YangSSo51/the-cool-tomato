import { Box, Text, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/stores/store";
import { sellerGetQnaAPI } from "../../../api/itemQnA";
import QnaItems from "./SellerQnaItems";

function Qna() {
    const navigate = useNavigate();
    // const user = useSelector((state: RootState) => state.user);

    const [sellerQnaList, setSellerQnaList] = useState([])

    function onclick() {
        navigate(`/v1/ItemAdd`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await sellerGetQnaAPI(1, 16)
                // console.log(response)
                setSellerQnaList(response.data.list)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, [])

    return (
        <Box flexDirection="column" w="90%" h="full">
            { sellerQnaList.length ? <QnaItems /> : 
                <Flex m="auto" flexDir="column" mb="10">
                    <Text fontSize='5xl' color="gray.500" mb="5">받은 문의가 없습니다!</Text>
                    <Button colorScheme="themeGreen" onClick={onclick}>상품 등록하러 가기</Button>
                </Flex>
            }
        </Box>
    )
}

export default Qna