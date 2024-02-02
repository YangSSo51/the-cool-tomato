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
import LiveItemAdd from "../components/broadcast/LiveItemAdd";
import { useState } from "react";
import AddGoods from "../components/broadcast/AddGoods";


export default function LiveAddForm() {
    const [isSelected, isSelectedState] = useState(false);

    const onSetSelected = ( x : boolean ): void => {
        isSelectedState(x);
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
                            <Input placeholder=" " />
                            <FormLabel>제목을 입력해주세요</FormLabel>
                        </FormControl>
                    </Box>
                    <Box></Box>
                    <Box p={"2rem"}>
                        <Text fontSize={"xl"} as={"b"}>
                            라이브 시작 날짜
                        </Text>
                        <Input
                            mt={"1rem"}
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </Box>

                    <Box p={"2rem"}>
                        <Text fontSize={"xl"} as={"b"}>
                            라이브 가격 적용되는 시간 (끝나는 시간 설정해주세요)
                        </Text>
                        <Input
                            mt={"1rem"}
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </Box>

                    <Flex>
                        <Box p={"2rem"}>
                            <Text fontSize={"xl"} as={"b"}>
                                자주 묻는 질문 설정 (챗봇)
                            </Text>
                            <Switch ml={"2rem"} size={"lg"} />
                        </Box>
                        <Box p={"2rem"}>
                            <Text fontSize={"xl"} as={"b"}>
                                채팅을 자동으로 읽어주기 설정
                            </Text>
                            <Switch ml={"2rem"} size={"lg"} />
                        </Box>
                    </Flex>

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
                        <Text as={"b"} fontSize={"2xl"}>
                            중요한 메모 & 스크립트
                        </Text>
                        <Textarea
                            h={"10rem"}
                            placeholder="스크립트를 작성해주세요"
                        ></Textarea>
                    </Box>
                    <Center mt={"1rem"}>
                        <Button bgColor={"themeGreen.500"} mr={3}>
                            <Text as={"samp"} color={"white"}>
                                등록
                            </Text>
                        </Button>
                        <Button bgColor={"themeRed.500"}>
                            <Text as={"samp"} color={"white"}>
                                취소
                            </Text>
                        </Button>
                    </Center>
                </Center>
            </Container>
        </>
    );
}
