import { Box, Flex } from "@chakra-ui/layout";
import { Image, Badge, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from "@chakra-ui/react";

function BuyerQnaItems() {
  
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
                    <input type="text" placeholder="안보이는데 있어요 고칠거에요좀만기다려주세요"/>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
    )
}

export default BuyerQnaItems