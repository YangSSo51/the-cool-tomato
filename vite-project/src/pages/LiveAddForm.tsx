import {
    Center,
    Input,
    Container,
    Box,
    FormControl,
    FormLabel,
    Text,
    Textarea,
    Button,
    Switch,
    Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/stores/store";
import LiveItemAdd from "../components/broadcast/LiveItemAdd";
import AddGoods from "../components/broadcast/AddGoods";
import { reserveLive } from "../api/openVidu";


export default function LiveAddForm() {
    const user = useSelector((state: RootState) => state.user);
    const accessToken = user.accessToken;
    const [isSelected, isSelectedState] = useState(false);
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [priceEndDate, setPriceEndDate] = useState("");
    const [faqSetting, setFaqSetting] = useState(false);
    const [chatbotSetting, setChatbotSetting] = useState(false);
    const [memo, setMemo] = useState("");

    const onSetSelected = ( x : boolean ): void => {
        isSelectedState(x);
    }
    
    async function onSubmit(event: React.SyntheticEvent): Promise<void> {
        event.preventDefault();
        if (title === "") {
            alert("방송 제목을 입력해주세요!")
        } else if (startDate === "") {
            alert("방송 시작 시간을 확인해주세요!")
        } else if (priceEndDate === "") {
            alert("상품들의 할인가 적용 시간을 정해주세요!")
        } else {
            const broadcastData = {
                accessToken: accessToken,
                broadcastTitle: title,
                content: "이게 뭐임 방송상품?",
                script: memo,
                ttsSetting: faqSetting,
                chatbotSetting: chatbotSetting,
                broadcastStartDate: startDate
            };
            const response = await reserveLive(broadcastData);
            console.log(response)
        }
    }

    return (
        <>
            <Container maxW={"container.xl"} p={"3rem"}>
                <Center>
                    <Text as={"b"} fontSize={"5xl"}>
                        라이브 등록
                    </Text>
                </Center>
                <Center p={"1rem"} display={"block"}>
                    <Box p={"2rem"}>
                        <Text fontSize={"xl"} as={"b"}>
                            라이브 제목
                        </Text>
                        <FormControl
                            mt={"1rem"}
                            variant="floating"
                            id="first-name"
                            isRequired
                            isInvalid
                        >
                            <Input
                                placeholder=" "
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <FormLabel>제목을 입력해주세요</FormLabel>
                        </FormControl>
                    </Box>
                    <Box></Box>
                    <Box p={"2rem"}>
                        <Text fontSize={"xl"} as={"b"}>
                            라이브 시작 시간
                        </Text>
                        <Input
                            mt={"1rem"}
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </Box>

                    <Box p={"3rem"}>
                        <Box
                            minHeight={"initial"}
                            maxH={"80vh"}
                            borderWidth={"4px"}
                            borderRadius={"30px"}
                        >
                            {/* 나머지는 페이지네이션으로 넘겨라! */}

                            {isSelected ? (
                                <Box
                                    maxH={"100%"}
                                    minH={"40rem"}
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <AddGoods isSelected={isSelected} isSelectedState={onSetSelected} />
                                </Box>
                            ) : (
                                <Center maxH={"100%"} minH={"40rem"}>
                                    <LiveItemAdd isSelected={isSelected} isSelectedState={onSetSelected} />
                                </Center>
                            )}
                        </Box>
                    </Box>

                    <Box p={"2rem"}>
                        <Text fontSize={"xl"} as={"b"}>
                            라이브 할인이 끝나는 시간을 설정해주세요
                        </Text>
                        <Input
                            mt={"1rem"}
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            value={priceEndDate}
                            onChange={(e) => setPriceEndDate(e.target.value)}
                        />
                    </Box>

                    <Flex>
                        <Box p={"2rem"}>
                            <Text fontSize={"xl"} as={"b"}>
                                자주 묻는 질문 설정 (챗봇)
                            </Text>
                            <Switch ml={"2rem"} size={"lg"} isChecked={faqSetting} onChange={(e) => setFaqSetting(e.target.checked)} />
                        </Box>
                        <Box p={"2rem"}>
                            <Text fontSize={"xl"} as={"b"}>
                                채팅을 자동으로 읽어주기 설정
                            </Text>
                            <Switch ml={"2rem"} size={"lg"} isChecked={chatbotSetting} onChange={(e) => setChatbotSetting(e.target.checked)} />
                        </Box>
                    </Flex>

                    <Box p={"2rem"}>
                        <Text as={"b"} fontSize={"2xl"}>
                            중요한 메모 및 대본
                        </Text>
                        <Textarea
                            h={"10rem"}
                            placeholder="스크립트를 작성해주세요"
                            value={memo}
                            onChange={(e) => setMemo(e.target.value)}
                        ></Textarea>
                    </Box>

                    <Center mt={"1rem"}>
                        <Button onClick={onSubmit} bgColor={"themeGreen.500"} color="white" mr={3}>
                            등록
                        </Button>
                        <Button bgColor={"themeRed.500"} color="white">
                            취소
                        </Button>
                    </Center>
                </Center>
            </Container>
        </>
    );
}