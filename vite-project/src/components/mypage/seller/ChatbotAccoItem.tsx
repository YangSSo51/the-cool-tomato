import {
    Button,
    Tr,
    Td,
} from "@chakra-ui/react";

interface chatbotInfo {
    chatbotId: number;
    roomId: number;
    question: string;
    answer: string;
    registerDate: string;
}

function ChatbotItem({chatbotList, deleteChatbot} : {chatbotList: chatbotInfo[], deleteChatbot: (chatbotId: number) => void;}) {

    return (
        <>
            {chatbotList.map((item, index) => (
                <Tr key={index}>
                    <Td width="10%">{item.question}</Td>
                    <Td width="70%">{item.answer}</Td>
                    <Td width="20%">
                        {/* <Button
                            onClick={onClickEdit}
                            colorScheme="teal"
                            size="sm"
                            mr={2}
                        >
                            수정
                        </Button> */}
                        <Button
                            onClick={()=>{deleteChatbot(item.chatbotId);}}
                            colorScheme="red"
                            size="sm"
                        >
                            삭제
                        </Button>
                    </Td>
                </Tr>
            ))}
        </>
    );
}

export default ChatbotItem;
