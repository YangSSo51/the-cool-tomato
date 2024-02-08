import { Box, Flex } from "@chakra-ui/layout";
import { Image, Badge, Button, Accordion,Input, InputGroup, InputRightElement,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from "@chakra-ui/react";

function QnaItems() {
    const handleSendresponse = () => {
        //
    }

    const qnaInfo = {
      imageUrl: 'https://www.vegannews.co.kr/data/photos/20230727/art_1688713002447_e60ce1.png',
      imageAlt: 'Rear view of modern home with pool',
      title: '병창농부의 특급 제안-소나무같은 브룩껄리',
      content: '브로컬리 샀는데 팔뚝만한다더니 굴뚝만한데요? 이걸 어떻게 요리해먹어야할까요?', 
      time: '2024.01.25 오후 8:00 예정',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
        <>
        <Accordion allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Image mr="2" boxSize="100px" src={qnaInfo.imageUrl} alt={qnaInfo.imageAlt} />
                        <Flex alignItems='baseline'>
                            <Badge colorScheme='red'>새문의</Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='m'
                                textTransform='uppercase'
                                ml='2'
                                >
                                {qnaInfo.title} 
                            </Box>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {qnaInfo.content}
                    <InputGroup>
                        <Input mt="3" type="text" placeholder="문의답변" />
                        <InputRightElement mt="3" pr="2" w="5rem">
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
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
    )
}

export default QnaItems