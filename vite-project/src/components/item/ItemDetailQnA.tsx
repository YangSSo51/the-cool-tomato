import {
    Accordion,
    AccordionButton,
    AccordionItem,
    Button,
    Center,
    Icon,
} from "@chakra-ui/react";
import QnaAccordion from "./qna/QnaAccordion";
import { useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { getQnAList } from "../../api/itemQnA";
import { useEffect, useState } from "react";
import { ItemQnA } from "../../types/DataTypes";
import { AxiosResponse } from "axios";

function ItemDetailQnA() {
    const size = 5;
    const { id } = useParams() as { id: string };
    const productID = parseInt(id);
    const [accortionList, setAccortionList] = useState<Array<ItemQnA>>([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    function getMoreQnA() {
        if (page >= maxPage) {
            console.log("max page");
            return;
        }
        setPage(page + size);
    }

    useEffect(() => {
        getQnAList({ page, size, "product-id": productID }).then(
            (res: AxiosResponse) => {
                setAccortionList([...accortionList, ...res.data.data.list]);
                if (maxPage === 0) {
                    const pages = res.data.data.totalCount / size;
                    if (Number.isInteger(pages)) {
                        setMaxPage(pages);
                    } else {
                        setMaxPage(Math.floor(pages) + 1);
                    }
                }
            }
        );
    }, [page, productID]);
    return (
        <>
            <Accordion allowMultiple w={"90%"} borderColor={"themeWhite.500"}>
                {accortionList.map((data, index) => {
                    return <QnaAccordion data={data} key={index} />;
                })}
                <AccordionItem>
                    <AccordionButton py={2}>
                        <Center w={"100%"} onClick={getMoreQnA}>
                            <Icon as={FaChevronDown}></Icon>
                        </Center>
                    </AccordionButton>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default ItemDetailQnA;
