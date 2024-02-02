import { Container } from "@chakra-ui/react";
import "../css/ItemListComponentcss.css";
// import { ItemDetailDelete } from "../api/Itemlist";
import ItemListpagenation from "../components/item/ItemListPagenation";
import ItemComponent from "../components/item/ItemComponent";

export default function ItemList() {
    // Delete 관련 !
    // const onDelete = (targetId : number) => {
    //     ItemDetailDelete(targetId)
    // }

    // onClick={() => onDelete(data.productId)}

    return (
        <Container maxW={"80vw"} centerContent>
            <ItemComponent />
            <ItemListpagenation />
        </Container>
    );
}
