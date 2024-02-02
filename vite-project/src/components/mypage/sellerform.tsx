import { Box, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel, FormHelperText, Input, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { useState } from "react";
import { registerSellerAPI } from "../../api/user";
import { setAuthSeller } from "../../redux/reducers/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/stores/store";

export default function Sellerform() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const accessToken = user.accessToken;
    console.log(user)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [businessNumber, setBusinessNumber] = useState<string>("");
    const [businessContent, setBusinessContent] = useState<string>("");
    const [mailOrderSalesNumber, setMailOrderSalesNumber] = useState<string>("");
    const [businessAddress, setBusinessAddress] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    // 안내메시지
    const [validMessage, setValidMessage] = useState<Record<string, string>>({
        businessNumber: "",
        businessContent: "",
        mailOrderSalesNumber: "",
        businessAddress: "",
        phoneNumber: ""
        });
    const sellerData: {
        title: string;
        enTitle: string;
        key: string;
        change: React.Dispatch<React.SetStateAction<string>>;
    }[] = [
    {
        title : '사업자 번호',
        enTitle : 'Business Registration Number',
        // rule : 10자리 (xxx-xx-xxxxx),
        key : businessNumber,
        change : setBusinessNumber
    },
    {
        title : '판매자 설명',
        enTitle : 'Seller\'s Legal Name',
        // rule : 한글 혹은 영문만 가능,
        key : businessContent,
        change : setBusinessContent
    },
    {
        title : '통신판매신고번호',
        enTitle : 'Online Sales Registration Number',
        // rule : 2020-서울송파-0148,
        key : mailOrderSalesNumber,
        change : setMailOrderSalesNumber
    },
    {
        title : '사업장 주소',
        enTitle : 'Business Address',
        // rule : 한글영어숫자작대기 콤마랑 작대기만,
        key : businessAddress,
        change : setBusinessAddress
    },
    {
        title : '업체 연락처',
        enTitle : 'Company Contact Information',
        // rule : 숫자,
        key : phoneNumber,
        change : setPhoneNumber
    }];

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, title: string, change: React.Dispatch<React.SetStateAction<string>>) {
        let inputValue = e.target.value;
        let regex;
        let values;
        let message = '';

        switch (title) {
            case '사업자 번호':
                // 숫자만
                regex = /[^0-9-]/gi;
                if (regex.test(inputValue)) {
                    message = "숫자만 입력할 수 있습니다";
                }
                inputValue = inputValue.replace(regex, '');
                values = inputValue.split('-').join('');
                if (values.length < 4) {
                    inputValue = values;
                } else if (values.length < 6) {
                    inputValue = values.slice(0, 3) + '-' + values.slice(3);
                } else {
                    inputValue = values.slice(0, 3) + '-' + values.slice(3, 5) + '-' + values.slice(5, 10);
                }
                break;
            case '판매자 실명':
                // 한글 혹은 영문
                regex = /[^가-힣a-zA-Z]/g;
                if (regex.test(inputValue)) {
                    message = "한글 혹은 영어만 입력할 수 있습니다";
                }
                
                break;
            case '업체 연락처':
                regex = /[^0-9-]/gi;
                if (regex.test(inputValue)) {
                    message = "숫자만 입력해주세요";
                }
                inputValue = inputValue.replace(regex, '');
                values = inputValue.split('-').join('');
                if (values.length < 4) {
                    inputValue = values;
                } else if (values.length < 8) {
                    inputValue = values.slice(0, 3) + '-' + values.slice(3);
                } else {
                    inputValue = values.slice(0, 3) + '-' + values.slice(3, 7) + '-' + values.slice(7, 11);
                }
                break;
            default:
                break;
        }
        setValidMessage({ ...validMessage, [title]: message });
        change(inputValue);
    }
    
    async function onSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        // TODO: 회원가입 비동기 통신
        if (businessNumber === '') {
            alert("사업자 번호를 입력해주세요")
        } else if (businessContent === '') {
            alert("판매자 설명을 확인해주세요")
        } else if (mailOrderSalesNumber === '') {
            alert("통신판매신고번호를 확인해주세요")
        } else if (businessAddress === '') {
            alert("사업장 주소를 확인해주세요")
        } else if (phoneNumber === '') {
            alert("업체 연락처를 확인해주세요!")
        } else {
            const sellerData = {
                businessNumber: businessNumber,
                businessContent: businessContent,
                mailOrderSalesNumber: mailOrderSalesNumber,
                businessAddress: businessAddress,
                phoneNumber: phoneNumber
            };
            await registerSellerAPI(sellerData, accessToken)
            setIsSubmitted(true)
            dispatch(setAuthSeller());
        console.log('온서브밋')
        }
    }

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Box h="full" pl="4">
                <Flex justify="center" direction="column" align="center" h="full">
                { !isSubmitted ? (
                <form onSubmit={onSubmit}>
                    {sellerData.map((data, index:number) => (
                        <FormControl key={index} mb={4}>
                            <FormLabel>{data.title}</FormLabel>
                            <Input
                                type='text'
                                value={data.key}
                                onChange={(e) => handleInputChange(e, data.title, data.change)}
                                placeholder={data.enTitle}
                            />
                            <FormHelperText>
                                {validMessage[data.title]}
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
                </form>
                ) : (
                <Alert status='success' textAlign='center' mb="10">
                    <AlertIcon />
                    판매자 신청이 완료되었습니다! <br />
                    판매자 전환은 영업일 기준 3일 이내 완료됩니다.
                </Alert>)}
                </Flex>
            </Box>
        </Box>
    );
}
