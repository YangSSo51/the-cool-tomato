import { Box, Flex } from "@chakra-ui/layout";
import { Badge, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon 
} from "@chakra-ui/react";
import { ItemQnA } from "../../../types/DataTypes";

function BuyerQnaItems(questions : ItemQnA) {
    console.log(questions)
  
    return (
        <>
        <Accordion allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
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
                                {/* {qnaInfo.title}  */}
                            </Box>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {/* {qnaInfo.content} */}
                    <input type="text" placeholder="안보이는데 있어요 고칠거에요좀만기다려주세요"/>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
    )
}

export default BuyerQnaItems