import { Text } from "@chakra-ui/layout";
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl,
    FormHelperText,
    Input,
    Select,
} from "@chakra-ui/react";

import "../../../css/FileUpload.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { ItemAddFunction } from "../../../api/Itemlist";
import { AddItemInterface } from "../../../types/DataTypes"

export default function NewProduct() {
    const [Submitform, SetSubmitform] = useState<AddItemInterface>()

    const onSubmit = () => {
        
    }

    const inputEl = useRef(null);
    const [fileName, setFileName] = useState<string>('');
    const fileInputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setFileName(files[0].name);
        }
    }, []);

    useEffect(() => {
        const currentInputEl = inputEl.current;
        if (currentInputEl) {
            currentInputEl.addEventListener("input", fileInputHandler);
        }
        return () => {
            if (currentInputEl) {
                currentInputEl.removeEventListener("input", fileInputHandler);
            }
        };
    }, [fileInputHandler]);

    return (
        <>
            <Center mb={"1.5rem"}>
                <Text fontSize={"4xl"} as={"b"}>
                    새상품 등록하기
                </Text>
            </Center>
            <Container maxW={"container.xl"}>
                <Center display={"block"}>
                    <Box mt={"1rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            상품명
                        </Text>
                        <FormControl
                            mt={"1rem"}
                            variant="floating"
                            id="first-name"
                            isRequired
                        >
                            <Input
                                type="text"
                                name="productName"
                                placeholder=" "
                                maxLength={10}
                            />

                            <FormHelperText>
                                제목은 10자 아래로 설정해주세요
                            </FormHelperText>

                            {/* {TitleInput.length >= 1 ? null : (
                                <FormLabel>제목을 입력해주세요</FormLabel>
                            )} */}
                        </FormControl>
                    </Box>

                    <Box mt={"2.5rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            가격
                        </Text>
                        <FormControl
                            mt={"1rem"}
                            variant="floating"
                            id="first-name"
                            isRequired
                        >
                            <Input type="text" name="price" placeholder=" " />

                            <FormHelperText>
                                가격은 100원 단위로 설정해주세요
                            </FormHelperText>

                            {/* {values.price > 0 ? null : (
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            )} */}
                        </FormControl>
                    </Box>

                    <Box mt={"2.5rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            사진
                        </Text>

                        {/* <Input
                            type="file"
                            accept="image/png, image/jpeg"
                            mt={"1rem"}
                        /> */}

                        <Box className="Container">
                            <label htmlFor="file">
                                <Box className="StyledFileInput">

                                    {fileName ? (
                                        <Box className="AttachedFile">
                                            {fileName}
                                        </Box>
                                    ) : (
                                        <Box className="AttachmentButton">
                                            🔗 파일 업로드하기
                                        </Box>

                                    )}
                                </Box>
                                <Input className="Input" type="file" id="file" ref={inputEl} disabled={fileName ? true : false} />
                            </label>

                        </Box>
                    </Box>

                    <Box mt={"2.5rem"}>
                        <Flex>
                            <Text fontSize={"2xl"} as={"b"}>
                                카테고리
                            </Text>
                        </Flex>
                        <Select
                            mt={"1rem"}
                            placeholder="카테고리를 선택해주세요"
                        // onChange={handleCategory}
                        >
                            <option value="0">농산물</option>
                            <option value="1">수산물</option>
                            <option value="2">김현종</option>
                        </Select>
                    </Box>

                    <Center mt={"5rem"}>
                        <Button
                            bgColor={"themeGreen.500"}
                            mr={3}
                        // onClick={onSubmit}
                        >
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
