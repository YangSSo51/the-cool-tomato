import {
    Button,
    Center,
    Divider,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { getStompClient } from "../../api/chatting";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { chatMessageRecv, chatMessageSend } from "../../types/DataTypes";

export default function BuyerChat() {
    const client = getStompClient();
    const [message, setMessage] = useState<string>("");
    const [recv, setRecv] = useState<Array<chatMessageRecv>>([]);
    const [reconnect, setReconnect] = useState<number>(0);

    const accessToken = useSelector(
        (state: RootState) => state.user.accessToken
    );
    const nickname = useSelector((state: RootState) => state.user.nickname);
    const userId = useSelector((state: RootState) => state.user.userId);
    const roomId = useParams().roomId!;
    const id = parseInt(roomId);

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        client.connect(
            { Authorization: `Bearer ${accessToken}` },
            () => {
                client.subscribe(
                    `/sub/room/${id}`,
                    (message) => {
                        const msg = JSON.parse(message.body);
                        // console.log(msg);
                        setRecv([...recv, msg]);
                    },
                    { Authorization: `Bearer ${accessToken}` }
                );
            },
            (error) => {
                console.log(error);
                if (reconnect < 5) {
                    timerId = setTimeout(() => {
                        setReconnect(reconnect + 1);
                    }, 10 * 1000);
                }
            }
        );
        return () => {
            clearTimeout(timerId);
        };
    }, [reconnect]);

    function sendMessage() {
        const sendMsg: chatMessageSend = {
            roomId: id,
            senderId: userId,
            senderNickname: nickname,
            message: message,
        };
        client.send(
            "/pub/message",
            { Authorization: "Bearer " + accessToken },
            JSON.stringify(sendMsg)
        );
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }
    function handleKeyEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            sendMessage();
            setMessage("");
        }
    }
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        sendMessage();
        setMessage("");
    }

    return (
        <>
            <Flex direction={"column"} h={"100%"} p={"1rem"}>
                <Center>
                    <Text as={"b"} fontSize={"2xl"}>
                        실시간 채팅
                    </Text>
                </Center>
                <Divider></Divider>
                <Flex
                    flex="1"
                    direction={"column"}
                    overflowY={"auto"}
                    pt={"1rem"}
                >
                    <UnorderedList>
                        {recv.map((msg, index) => (
                            <ListItem key={index}>
                                {msg.senderNickname} : {msg.message}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Flex>
                <InputGroup>
                    <Input
                        variant="filled"
                        placeholder="채팅을 입력해주세요"
                        value={message}
                        onChange={handleChange}
                        onKeyDown={handleKeyEnter}
                    />
                    <InputRightElement>
                        <Button
                            variant="ghost"
                            color="themeGreen.500"
                            onClick={handleSubmit}
                        >
                            전송
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </>
    );
}
