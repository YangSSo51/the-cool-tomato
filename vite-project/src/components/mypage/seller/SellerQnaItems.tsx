import { Box, Flex } from "@chakra-ui/layout";
import { Image, Badge, Button, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function QnaItems() {
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
                                fontSize='xs'
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
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton>
                            
                        <Image mr="2" boxSize="100px" src={qnaInfo.imageUrl} alt={qnaInfo.imageAlt} />
                        <Flex alignItems='baseline'>
                            <Badge colorScheme='green'>답변완료</Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                                >
                                {qnaInfo.title} 
                            </Box>
                        </Flex>
                            {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                    )}
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </AccordionPanel>
                </>
                )}
            </AccordionItem>
        </Accordion>
    </>
    )
}

export default QnaItems