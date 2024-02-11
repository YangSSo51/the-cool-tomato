import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    Select,
    Text,
} from "@chakra-ui/react";

import "../../../css/FileUpload.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { ItemAddFunction } from "../../../api/Itemlist";
import { AddItemInterface, UploadImage } from "../../../types/DataTypes";
import { CloseIcon } from "@chakra-ui/icons";
import { FaRegEdit } from "react-icons/fa";
import { formatNumberWithComma } from "../../../components/common/Comma";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";

export default function NewProduct() {
    const accessToken = useSelector(
        (state: RootState) => state.user.accessToken
    );
    const [values, setValues] = useState<AddItemInterface>({
        categoryId: 0,
        productName: "",
        productContent:
            "라이브 상품입니다. 라이브 기간동안만 할인 가격이 적용됩니다",
        paymentLink: "https://naver.com",
        price: 0,
        deliveryCharge: 1000,
        quantity: 100,
    });

    const TitleError = values.productName === "";
    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let onlyNumber = parseInt(value.replace(/[^0-9]/g, ""));

        if (onlyNumber >= 100000000) {
            onlyNumber = 100;
        }

        if (isNaN(onlyNumber)) {
            onlyNumber = 0;
        }

        setValues((prevValues) => ({
            ...prevValues,
            [name]: onlyNumber,
        }));
    };

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [`${name}`]: value,
        }));
    };

    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setValues((prevValues) => ({
            ...prevValues,
            ["categoryId"]: Number(value),
        }));
    };

    const [fileName, setFileName] = useState<UploadImage | undefined>(
        undefined
    );

    const fileInputHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            console.log(files);
            if (files && files[0]) {
                setFileName({
                    file: files[0],
                    type: files[0].name,
                });
            }
        },
        []
    );

    const formData = new FormData();
    const onSubmit = async () => {
        if (fileName !== undefined) {
            formData.append("productRequest", JSON.stringify(values));
            formData.append("file", fileName.file);
            if (
                values.price >= 100 &&
                values.categoryId &&
                values.productName.length >= 1 &&
                values.productContent.length >= 1
            ) {
                try {
                    await ItemAddFunction(formData, accessToken);
                    alert("상품이 정상적으로 등록되었습니다");
                } catch (error) {
                    alert("등록 실패했습니다. 상품을 다시 설정해주세요.");
                }
            } else if (!values.price) {
                alert("가격을 설정해주세요");
            } else if (!values.categoryId) {
                alert("카테고리를 설정해주세요");
            } else if (!values.productName) {
                alert("상품명을 설정해주세요");
            }
        }
    };

    // 사진 등록
    // const inputEl = useRef(null);
    // const [fileName, setFileName] = useState<string>("");
    // const fileInputHandler = useCallback(
    //     (e: React.ChangeEvent<HTMLInputElement>) => {
    //         const files = e.target.files;
    //         if (files && files[0]) {
    //             setFileName(files[0].name);
    //         }
    //     },
    //     []
    // );

    // useEffect(() => {
    //     const currentInputEl = inputEl.current;
    //     if (currentInputEl) {
    //         currentInputEl.addEventListener("input", fileInputHandler);
    //         setValues((prevValues) => ({
    //             ...prevValues,
    //             ["imgSrc"]: fileName,
    //         }));
    //     }
    //     return () => {
    //         if (currentInputEl) {
    //             currentInputEl.removeEventListener("input", fileInputHandler);
    //         }
    //     };
    // }, [fileInputHandler, fileName]);

    // const ClearFile = () => {
    //     setFileName("");
    // };
    // 여기까지

    // function EditIcon() {
    //     return (
    //         <Icon mt={"0.5rem"} boxSize={"1.8rem"} ml={"3rem"} as={FaRegEdit} />
    //     );
    // }

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
                            isRequired={TitleError}
                        >
                            <Input
                                type="text"
                                name="productName"
                                placeholder=" "
                                maxLength={10}
                                onChange={handleTitle}
                            />

                            <FormHelperText>
                                제목은 10자 아래로 설정해주세요
                            </FormHelperText>

                            {values.productName.length >= 1 ? null : (
                                <FormLabel>제목을 입력해주세요</FormLabel>
                            )}
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
                            isInvalid={values.price ? true : false}
                        >
                            <Input
                                type="text"
                                name="price"
                                placeholder=" "
                                value={formatNumberWithComma(values.price)}
                                onChange={handleNumber}
                            />

                            <FormHelperText>
                                가격은 100원 단위로 설정해주세요
                            </FormHelperText>

                            {values.price > 100 ? null : (
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            )}
                        </FormControl>
                    </Box>

                    {/* <Box mt={"2.5rem"}>
                        <Text fontSize={"2xl"} as={"b"}>
                            사진
                        </Text>

                        <Box className="Container">
                            {fileName ? (
                                <Center>
                                    <Text
                                        fontSize={"1rem"}
                                        as={"b"}
                                        mr={"0.5rem"}
                                    >
                                        업로드 된 파일 :
                                    </Text>
                                    <Box className="AttachedFile">
                                        {fileName}
                                    </Box>
                                    <Flex alignItems="center">
                                        <Input
                                            className="Input"
                                            type="file"
                                            id="file"
                                            ref={inputEl}
                                            disabled={fileName ? false : true}
                                            style={{ display: "none" }}
                                        />

                                        <label htmlFor="file">
                                            <EditIcon />
                                        </label>

                                        <CloseIcon
                                            ml={"2rem"}
                                            boxSize={"1rem"}
                                            onClick={ClearFile}
                                        />
                                    </Flex>
                                </Center>
                            ) : (
                                <>
                                    <Input
                                        className="Input"
                                        type="file"
                                        id="file"
                                        ref={inputEl}
                                        disabled={fileName ? true : false}
                                        style={{ display: "none" }}
                                    />

                                    <label
                                        htmlFor="file"
                                        className="AttachmentButton"
                                    >
                                        🔗 사진 업로드하기
                                    </label>
                                </>
                            )}
                        </Box>
                    </Box> */}
                    <Box onClick={() => fileInputHandler}>
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
                            onChange={handleCategory}
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
                            onClick={onSubmit}
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
