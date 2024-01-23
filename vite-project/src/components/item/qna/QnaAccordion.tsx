import React from "react";
import {
    AccordionButton,
    AccordionItem,
    Box,
    Text,
    Tag,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

function QnaAccordion() {
    return (
        <>
            <AccordionItem py={3}>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        질문 질문 질문 질문 질문 질문 질문 중 앞에서 80자 잘라서
                        표시할 제목제목
                    </Box>
                    <Tag borderRadius="full">미답변</Tag>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                    mb={4}
                    borderTop={"1px"}
                    borderBottom={"1px"}
                    borderColor={"lightgray"}
                >
                    <Text>
                        질문 내용 질문 내용 상품에 대한 질문을 하고 있습니다.
                        저는 이 상품이 매우 궁금하며, 앞으로 알아볼 열의를 갖고
                        있습니다. 과연 이 상품은 무엇일까요?? 그건 앞으로
                        알아가야 할 일이라고 생각합니다.
                    </Text>
                </AccordionPanel>
                <AccordionPanel mb={4}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. 답변 답변 답변 답변 답변 답변 답변
                        답변 답변 답변 답변 답변 답변 답변 답변 답변 답변 답변
                        답변 답변 답변 답변 답변 답변 답변 답변 답변 답변 답변
                        답변 답변 답변 답변 답변 답변 답변 답변 답변 답변 답변
                        답변
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </>
    );
}

export default QnaAccordion;
