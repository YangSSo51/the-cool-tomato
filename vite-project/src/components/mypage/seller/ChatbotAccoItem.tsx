import {
    Button,
    Tr,
    Td,
} from "@chakra-ui/react";
// import { useState, ChangeEvent } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/stores/store";

function ChatbotItem() {
    // const user = useSelector((state: RootState) => state.user);

    const onClickEdit = () => {
        // API().then((result) => {
        //  //
        // });
    };

    const onClickDelete = () => {
    //    API().then((result) => {
    //    //
    //     });
    };

    return (
        <>
            <Tr>
                <Td style={{ maxWidth: "10%", whiteSpace: "pre-wrap" }}>
                    집
                </Td>
                <Td style={{ maxWidth: "70%", whiteSpace: "pre-wrap" }}>
                    집가고싶다 집에너무가고싶다 집가서 전기장판틀고자고싶다집가고싶다 집에너무가고싶다 집가서전기장판 틀고자고싶다
                </Td>
                <Td display="flex" style={{ wordWrap: "break-word", maxWidth: "20%" }}>
                    <Button 
                        mr="1"
                        onClick={onClickEdit}
                    >
                        수정
                    </Button>
                    <Button 
                        colorScheme="red"
                        onClick={onClickDelete}
                    >
                        삭제
                    </Button>
                </Td>
            </Tr>           
        </>
    );
}

export default ChatbotItem;
