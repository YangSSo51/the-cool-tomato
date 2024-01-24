import { Accordion } from "@chakra-ui/react";
import QnaAccordion from "./qna/QnaAccordion";
import { useParams } from "react-router-dom";

function ItemDetailQnA() {
    const { id } = useParams();

    return (
        <>
            <Accordion allowMultiple w={"90%"} borderColor={"themeWhite.500"}>
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

export default ItemDetailQnA;
