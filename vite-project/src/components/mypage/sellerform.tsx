import { Box, Flex } from "@chakra-ui/layout";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export default function Sellerform() {

    const sellerData = ['사업자 번호', '판매자 실명', '통신판매신고번호', '사업장 주소', '업체 연락처']

    // let data = useQuery([current_products], ()=>
    //     axios.get('링크')
    //     .then((a)=> {return a.data})
    // )

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Box h="full" pl="4">
                <Flex justify="center" align="center" h="full">
                    {sellerData.map(data => {
                        return (<li key={data}>{data}</li>)
                    }
                    )}
                </Flex>
            </Box>
        </Box>

    )
}
