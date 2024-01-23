import { Box, Heading } from "@chakra-ui/layout";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export default function Question() {

    // let data = useQuery([current_products], ()=>
    //     axios.get('링크')
    //     .then((a)=> {return a.data})
    // )

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Heading>문의한 내역이 없습니다.</Heading>
        </Box>

    )
}
