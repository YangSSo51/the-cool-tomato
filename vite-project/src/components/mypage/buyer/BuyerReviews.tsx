import { Box, Heading } from "@chakra-ui/layout";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export default function Reviews() {

    // let data = useQuery([current_products], ()=>
    //     axios.get('링크')
    //     .then((a)=> {return a.data})
    // )

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Heading>구매 이력이 존재하지 않습니다.</Heading>
        </Box>

    )
}
