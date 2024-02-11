import { Box, Flex } from "@chakra-ui/layout";
import { Image, Badge, Button, Accordion, Input, InputGroup, InputRightElement, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

interface sellerQnaType {
    productQuestionBoardId: number;
    writerId: number;
    writerNickname: string;
    productId: number;
    imgSrc: string;
    productName: string;
    productContent: string;
    questionContent: string;
    answerContent: string | null;
    questionRegisterDate: string;
    answerRegisterDate: string | null;
    answer: number;
}

function QnaItems({ sellerQnaList }: { sellerQnaList: sellerQnaType[] }) {
    const handleSendresponse = () => {
        // Send response logic
    }

    return (
        <Accordion allowMultiple>
            {sellerQnaList.map((qnaInfo, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton>
                            <Image mr="2" boxSize="100px" src={qnaInfo.imgSrc} alt="Product Image" />
                            <Flex alignItems='baseline'>
                                <Badge colorScheme='red'>{qnaInfo.answer ? "답변완료" : "새문의"}</Badge>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='m'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    {qnaInfo.productName}
                                </Box>
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {qnaInfo.questionContent}
                        {qnaInfo.answer === 1 ? (
                            <Box mt="3">
                                {qnaInfo.answerContent}
                            </Box>
                        ) : (
                            <InputGroup>
                                <Input type="text" placeholder="문의답변" />
                                <InputRightElement pr="2" w="5rem">
                                    <Button
                                        h="1.75rem"
                                        size="m"
                                        colorScheme="themeGreen"
                                        variant="ghost"
                                        onClick={handleSendresponse}
                                        borderRadius="md"
                                        _hover={{
                                            bg: "themeGreen.500",
                                            color: "white",
                                        }}
                                    >
                                        답변하기
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        )}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default QnaItems;
