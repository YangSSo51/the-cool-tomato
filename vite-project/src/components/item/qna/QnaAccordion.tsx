import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    AccordionButton,
    AccordionItem,
    Box,
    Text,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { ItemQnA } from "../../../types/DataTypes";

function QnaAccordion({ data }: { data: ItemQnA }) {
    console.log("QnaAccordion");
    const questionDate = data.questionRegisterDate
        ? data.questionRegisterDate.split("T")[0].replaceAll("-", ".")
        : "";
    const answerDate = data.answerRegisterDate
        ? data.answerRegisterDate.split("T")[0].replaceAll("-", ".")
        : "";
    const questionTitle =
        data.questionContent.length > 35
            ? data.questionContent.slice(0, 35) + "..."
            : data.questionContent;
    return (
        <>
            <AccordionItem py={2}>
                <AccordionButton py={6}>
                    {data.answer === 0 ? (
                        <Text
                            mr={3}
                            color={"grey"}
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            letterSpacing={".1em"}
                        >
                            미답변
                        </Text>
                    ) : (
                        <Text
                            mr={3}
                            color={"themeGreen.500"}
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            letterSpacing={".1em"}
                        >
                            답변완료
                        </Text>
                    )}
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
                            {questionTitle}
                        </Box>
                        {data.isMine === 1 ? (
                            <DeleteIcon color={"lightgrey"} />
                        ) : null}
                    </Box>
                    <Text
                        pr={"2"}
                        color={"grey"}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                        letterSpacing={".1em"}
                    >
                        {questionDate}
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                    py={7}
                    borderTop={"1px"}
                    borderBottom={"1px"}
                    borderColor={"themeLightGreen.500"}
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
                        {data.questionContent}
                    </Text>
                </AccordionPanel>
                {data.answer === 1 ? (
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
                                {data.answerContent || null}
                            </Text>
                        </Box>
                        <Box textAlign={"right"}>
                            {/* <EditIcon /> */}
                            <Box
                                as="span"
                                px={"3"}
                                color={"grey"}
                                fontSize={"xs"}
                                fontWeight={"bold"}
                                textAlign={"right"}
                                letterSpacing={".1em"}
                            >
                                {answerDate}
                            </Box>
                        </Box>
                    </AccordionPanel>
                ) : null}
            </AccordionItem>
        </>
    );
}

export default QnaAccordion;
