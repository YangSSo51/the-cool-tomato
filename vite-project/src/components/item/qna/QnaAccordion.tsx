import {
    AccordionButton,
    AccordionItem,
    Box,
    Text,
    Tag,
    AccordionPanel,
    AccordionIcon,
    Divider,
    TagLabel,
} from "@chakra-ui/react";

function QnaAccordion() {
    return (
        <>
            <AccordionItem py={3}>
                <AccordionButton>
                    <Text fontWeight={"bold"} mr={3} color={"themeWhite.500"}>
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
                    >
                        현종 아조씨의 고구마는 정품인가요?
                    </Box>
                    <Text
                        pr={"2"}
                        color={"grey"}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                    >
                        2024.01.24
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                    my={2}
                    py={2}
                    borderTop={"1px"}
                    borderBottom={"1px"}
                    borderColor={"themeLightGreen.500"}
                    backgroundColor={primary.outwhite}
                >
                    <Text as={"b"}>
                        질문 내용 질문 내용 상품에 대한 질문을 하고 있습니다.
                        저는 이 상품이 매우 궁금하며, 앞으로 알아볼 열의를 갖고
                        있습니다. 과연 이 상품은 무엇일까요?? 그건 앞으로
                        알아가야 할 일이라고 생각합니다.
                    </Text>
                </AccordionPanel>
                <AccordionPanel my={2} py={2}>
                    <Box>
                        <Text as={"b"}>
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
                    <Box>
                        <Text
                            pr={"1"}
                            color={"grey"}
                            fontSize={"xs"}
                            fontWeight={"bold"}
                            textAlign={"right"}
                        >
                            2024.01.24
                        </Text>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </>
    );
}

export default QnaAccordion;
