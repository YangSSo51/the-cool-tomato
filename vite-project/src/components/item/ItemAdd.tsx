import {
    Text,
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    Input,
    Container,
    FormLabel,
    Select,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";

export default function ItemAdd() {
    const editorRef = useRef(null);
    const config = {
        editorClass: "custom-class",
        heightMin: 700,
        autofocus: true,
        attribution: false,
    };

    // Editor
    const [content, setContent] = useState('')

    const handleModelChange = (model : string) => {
        setContent(model)
        console.log(content)
    }

    useEffect(() => {
        if (editorRef.current) {
            const root = ReactDOM.createRoot(editorRef.current);
            root.render(<FroalaEditorComponent tag="textarea" />);
        }
    });

    // Values
    const [values, setValues] = useState({})
    const handleChange = (e: any) => {
        const {name, value} = e.target
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <>
            <Container maxW={"container.xl"} p={"3rem"}>
                <Center>
                    <Text as={"b"} fontSize={"5xl"}>
                        상품 등록
                    </Text>
                </Center>
                <Center mt={"3rem"} p={"1rem"} display={"block"}>
                    <Box p={"2rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            상품명
                        </Text>
                        <FormControl
                            mt={"1rem"}
                            variant="floating"
                            id="first-name"
                            isRequired
                            isInvalid
                        >
                            <Input type="text" name="title" onChange={handleChange} placeholder=" " />
                            <FormLabel>제목을 입력해주세요</FormLabel>
                        </FormControl>
                    </Box>

                    <Box p={"2rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            가격
                        </Text>
                        <FormControl
                            mt={"1rem"}
                            variant="floating"
                            id="first-name"
                            isRequired
                            isInvalid
                        >
                            <Input placeholder=" " />
                            <FormLabel>가격을 입력해주세요</FormLabel>
                        </FormControl>
                    </Box>

                    <Box mt={"1rem"} p={"2rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            내용
                        </Text>
                        <Box id="editor" mt={"1rem"}>
                            <FroalaEditorComponent
                                tag="textarea"
                                config={config}
                                model={content}
                                onModelChange={handleModelChange}
                            />
                        </Box>
                    </Box>

                    <Box p={"2rem"}>
                        <Flex>
                            <Text fontSize={"2xl"} as={"b"}>
                                카테고리
                            </Text>
                        </Flex>
                        <Select
                            mt={"1rem"}
                            placeholder="카테고리를 선택해주세요"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>

                    <Center mt={"10rem"}>
                        <Button bgColor={"themeGreen.500"} mr={3}>
                            <Text as={"samp"} color={"white"}>
                                등록
                            </Text>
                        </Button>
                        <Button bgColor={"themeRed.500"}>
                            <Text as={"samp"} color={"white"}>
                                취소
                            </Text>
                        </Button>
                    </Center>
                </Center>
            </Container>
        </>
    );
}
