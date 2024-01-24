import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    AccordionButton,
    AccordionItem,
    Box,
    Text,
    AccordionPanel,
    AccordionIcon,
    Tag,
} from "@chakra-ui/react";

function QnaAccordion() {
    return (
        <>
            <AccordionItem py={2}>
                <AccordionButton py={6}>
                    <Text
                        mr={3}
                        color={"grey"}
                        fontSize={"sm"}
                        fontWeight={"bold"}
                        letterSpacing={".1em"}
                    >
                        미답변
                    </Text>

                    <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        pl={"3"}
                        borderLeft={"1px"}
                        borderLeftColor={"lightgrey"}
                        fontWeight={"bold"}
                        letterSpacing={".1em"}
                    >
                        <Box as="span" pr={"2"}>
                            현종 아조씨의 고구마는 정품인가요?
                        </Box>
                        <DeleteIcon color={"lightgrey"} />
                    </Box>
                    <Text
                        pr={"2"}
                        color={"grey"}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                        letterSpacing={".1em"}
                    >
                        2024.01.24
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                    py={7}
                    borderTop={"1px"}
                    borderBottom={"1px"}
                    borderColor={"themeLightGreen.500"}
                    // backgroundColor={"#f7f8fa"}
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={"xl"}
                        color={"themeGreen.500"}
                    >
                        Q
                    </Text>
                    <Text
                        mt={"2"}
                        fontSize={"sm"}
                        lineHeight={"200%"}
                        letterSpacing={".1em"}
                    >
                        질문 내용 질문 내용 상품에 대한 질문을 하고 있습니다.
                        저는 이 상품이 매우 궁금하며, 앞으로 알아볼 열의를 갖고
                        있습니다. 과연 이 상품은 무엇일까요?? 그건 앞으로
                        알아가야 할 일이라고 생각합니다.
                    </Text>
                </AccordionPanel>
                <AccordionPanel py={7}>
                    <Box>
                        <Text
                            fontWeight={"bold"}
                            fontSize={"xl"}
                            color={"themeRed.500"}
                        >
                            A
                        </Text>
                        <Text
                            fontSize={"sm"}
                            lineHeight={"200%"}
                            letterSpacing={".1em"}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. 답변 답변 답변 답변 답변
                            답변 답변 답변 답변 답변 답변 답변 답변 답변 답변
                            답변 답변 답변 답변 답변 답변 답변 답변 답변 답변
                            답변 답변 답변 답변 답변 답변 답변 답변 답변 답변
                            답변 답변 답변 답변 답변 답변
                        </Text>
                    </Box>
                    <Box textAlign={"right"}>
                        <EditIcon />
                        <Box
                            as="span"
                            px={"3"}
                            color={"grey"}
                            fontSize={"xs"}
                            fontWeight={"bold"}
                            textAlign={"right"}
                            letterSpacing={".1em"}
                        >
                            2024.01.24
                        </Box>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </>
    );
}

export default QnaAccordion;
