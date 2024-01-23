import { Accordion } from "@chakra-ui/react";
import QnaAccordion from "./qna/QnaAccordion";

export default function ItemDetailQnA() {
    return (
        <>
            <Accordion allowMultiple w={"90%"}>
                <QnaAccordion />
                <QnaAccordion />
                <QnaAccordion />
                <QnaAccordion />
                <QnaAccordion />
                <QnaAccordion />
            </Accordion>
        </>
    );
}
