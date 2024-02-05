import { Container } from "@chakra-ui/react";
import "../css/ItemListComponentcss.css";
import ItemListpagenation from "../components/item/ItemListPagenation";
import ItemComponent from "../components/item/ItemComponent";

export default function ItemList() {

    return (
        <Container maxW={"80vw"} centerContent>
            <ItemComponent />
            <ItemListpagenation />
        </Container>
    );
}