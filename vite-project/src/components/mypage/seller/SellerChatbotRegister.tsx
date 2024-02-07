import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";

function ChatbotRegistrationModal({
    isOpen,
    handleModalOpen,
    // 함수,
}: {
    isOpen: boolean;
    handleModalOpen: () => void;
    // 함수: (인자: 타입) => void;
}) {
    const [chatbotCommand, setChatbotCommand] = useState("");
    const [chatbotContent, setChatbotContent] = useState("");
    const accessToken = useSelector((state: RootState) => state.user.accessToken);


    const handleInputCommand = (e: ChangeEvent<HTMLInputElement>) =>
        setChatbotCommand(e.target.value);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setChatbotContent(e.target.value);

    const handleClose = () => {
        setChatbotContent("");
        handleModalOpen();
    };

    const registerChatbot = () => {
        const data = {
            // 데이터
        };
        // // post 함수
        //     .then(() => {
        //         // 함수
        //         handleClose();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                motionPreset="slideInBottom"
                isCentered
                size="2xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>챗봇 설정하기</ModalHeader>
                    <ModalCloseButton onClick={handleModalOpen} />
                    <ModalBody>
                        <FormControl my={2}  isRequired>
                            <FormLabel>
                                <Text as={"b"}>명령어</Text>
                            </FormLabel>
                            <Input
                                focusBorderColor="themeGreen.500"
                                placeholder="command"
                                size="md"
                                mb="5"
                                value={chatbotCommand}
                                onChange={handleInputCommand}
                            />

                            <FormLabel>
                                <Text as={"b"}>내용</Text>
                            </FormLabel>
                            <Textarea
                                value={chatbotContent}
                                onChange={handleInputChange}
                                placeholder="명령어 입력 시 자동 답변할 내용을 작성해주세요"
                                focusBorderColor="themeGreen.500"
                                size="md"
                                resize="none"
                                mb="1.5rem"
                                h={"30rem"}
                                />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            variant={"outline"}
                            mr={3}
                            onClick={handleClose}
                        >
                            취소
                        </Button>
                        <Button
                            colorScheme="themeGreen"
                            onClick={registerChatbot}
                        >
                            등록
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ChatbotRegistrationModal;
