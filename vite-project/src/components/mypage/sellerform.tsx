import { Box, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel, FormHelperText, Input, Button } from '@chakra-ui/react'
import { useState } from "react";
import { RegisterSeller } from "../../types/DataTypes";

export default function Sellerform() {
    const [businessNumber, setBusinessNumber] = useState<string>("");
    const [businessContent, setBusinessContent] = useState<string>("");
    const [mailOrderSalesNumber, setMailOrderSalesNumber] = useState<string>("");
    const [businessAddress, setBusinessAddress] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const sellerData: {
        title: string;
        enTitle: string;
        input: string;
        change: React.Dispatch<React.SetStateAction<string>>;
    }[] = [
    {
        title : '사업자 번호',
        enTitle : 'Business Registration Number',
        // rule : 10자리 (xxx-xx-xxxxx),
        input : businessNumber,
        change : setBusinessNumber
    },
    {
        title : '판매자 실명',
        enTitle : 'Seller\'s Legal Name',
        // rule : 한글 혹은 영문만 가능,
        input : businessContent,
        change : setBusinessContent
    },
    {
        title : '통신판매신고번호',
        enTitle : 'Online Sales Registration Number',
        // rule : 2020-서울송파-0148,
        input : mailOrderSalesNumber,
        change : setMailOrderSalesNumber
    },
    {
        title : '사업장 주소',
        enTitle : 'Business Address',
        // rule : 한글영어숫자작대기 콤마랑 작대기만,
        input : businessAddress,
        change : setBusinessAddress
    },
    {
        title : '업체 연락처',
        enTitle : 'Company Contact Information',
        // rule : 숫자,
        input : phoneNumber,
        change : setPhoneNumber
    }];
    const [input, setInput] = useState("");
    const handleInputChange = (e) => setInput(e.target.value);

    function handleBSnumber(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        const regex = /[0-9]/gi;
    }

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Box h="full" pl="4">
                <Flex justify="center" direction="column" align="center" h="full">

                    {sellerData.map((data, index:number) => (
                        <FormControl key={index} mb={4}>
                            <FormLabel>{data.title}</FormLabel>
                            <Input
                                type='text'
                                value={data.input}
                                onChange={(e) => data.change(e.target.value)}
                                placeholder={data.enTitle}
                            />
                            <FormHelperText>
                                {data.title.toLowerCase()}을 입력하세요
                            </FormHelperText>
                        </FormControl>
                    ))}
                    <Button
                        my={4}
                        w="95%"
                        colorScheme="themeGreen"
                        type="submit"
                        borderRadius="3xl"
                        _hover={{
                            bg: "red"
                        }}
                    >
                        판매자 신청
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}
