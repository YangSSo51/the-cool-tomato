import { Box, Flex, Center } from "@chakra-ui/layout";
import { Avatar, Button, Text, FormControl, FormLabel, InputGroup, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/stores/store";
// import { getMyInfoAPI, postMyInfoAPI, deleteMyInfoAPI } from "../api/user";

export default function UserinfoPage() {
    const navigate = useNavigate()
//     const user = useSelector((state: RootState) => state.user);
//     const accessToken = user.accessToken;
//     const refreshToken = user.refreshToken;
//     const [loginId, setLoginId] = useState("")
//     const [profileImgFile, setProfileImgFile] = useState<File | null>(null);
//     const [profileImg, setProfileImg] = useState(user.profileImg);
//     const [password, setPassword] = useState("")
//     const [newPassword, setNewPassword] = useState("")
//     const [nickname, setNickname] = useState("")
//     const [sex, setSex] = useState("")
//     const [birthday, setBirthday] = useState("")
//     const [check, setCheck] = useState(false)
//     const [show, setShow] = useState(false);
//     const handleClick = () => setShow(!show)
//     const [isPasswordValid, setIsPasswordValid] = useState(false)

//     function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
//         const inputValue = e.target.value;
//         const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
//         // 체크아이콘 표시를 위해
//         setCheck(regex.test(inputValue));
//         setPassword(inputValue);
//     }

//     function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
//         const file = event.target.files?.[0]; // 선택한 파일 가져오기
//         if (file) {
//             setProfileImgFile(file); // 파일 상태 업데이트
//             console.log(profileImgFile)
//         }
//     }

//     function onclickDeletePic() {
//         setProfileImg("")
//     }

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             const response = await getMyInfoAPI(accessToken);
//             setLoginId(response.data.loginId)
//             setNickname(response.data.nickname)
//             setSex(response.data.sex)
//             setBirthday(response.data.birthday)
//         }
//         fetchUserInfo();
//     }, [accessToken]);
 

//     // async function onSubmit(event: React.SyntheticEvent): Promise<void> {
//         // event.preventDefault();
//         // if (isPasswordValid === false) {
//         //     alert("유효한 비밀번호가 아닙니다")
//         // } else {
//         //     const userData = {
//         //         profileImgFile: profileImgFile,
//         //         profileImg: profileImg, 
//         //         password: password,
//         //         newPassword: newPassword,
//         //         nickname: nickname,
//         //         sex: sex,
//         //         birthday: birthday
//         //     };
//         //     const response = await postMyInfoAPI(userData, accessToken, refreshToken);
//         //     if (response === 1) {
//         //         navigate('/v1/sign')
//         //     } else if (response === 33) {
//         //         alert("이미 회원가입된 이메일입니다. 로그인해주세요")
//         //     }
//         // }
//     }
   

    return (
        <Box minH="100vh" mb="10" paddingBlock="6rem">
            <Center className="response_title" fontFamily="GmkBold" fontSize={{ base: "4rem", md: "5rem", lg: "6rem" }} color={"themeFontGreen.500"}>
                회원정보수정
            </Center>

            <Flex m="auto" border="2px" borderColor="themeFontGreen.500" overflow="scroll" rounded="lg" w="85vw" minH="85vh">
                <Flex m="auto" direction={{ base: "column", lg: "row" }} rounded="lg" w="80vw" maxH={{ base: "auto", lg: "80vh" }} px="2">
                    <Box w={{ base: "100%", lg: "25%" }} pr="4" >
                        <Box w="full" bg="white" rounded="lg" overflow="hidden">
                            <Flex direction="column" align="center" py="6">

                                <Button
                                    borderRadius="3xl"
                                    onClick={() => {
                                        navigate("/v1/buyer/");
                                    }}
                                    mb={"1rem"}
                                >
                                    마이페이지로 돌아가기
                                </Button>
                                <Avatar mt={"1rem"} mb={"1rem"} size="xl" src={previewURL ? `${previewURL}` : '/img/default_profile.jpeg'} />
                                <Button
                                    mt={"1rem"}
                                    px={4}
                                    py={2}
                                    w={"10rem"}
                                    transition='all 0.2s'
                                    borderRadius='md'
                                    borderWidth='3px'
                                    _hover={{ bg: 'themeGreen.500', textColor: "white" }}
                                    mb={"1.5rem"}
                                >
                                    <input type="file" style={{ "display": "none" }} id="profileImg" accept="image/png, image/jpeg, image/jpg" onChange={profileChange} />
                                    <label htmlFor="profileImg">프로필 이미지 추가</label>

                                </Button>
                                <Button
                                    px={4}
                                    py={2}
                                    w={"10rem"}
                                    transition='all 0.2s'
                                    borderRadius='md'
                                    borderWidth='3px'
                                    _hover={{ bg: 'red', textColor: "white" }}
                                    onClick={clearProfile}
                                >

                                    프로필 사진 삭제
                                </Button>
                            </Flex>
                        </Box>
                    </Box>

                    <Box w="75%" bg="white" rounded="lg" className="custom-scrollbar">
                        <Flex justify="center" align="center" h="full">
                            <form onSubmit={event => {
                                event.preventDefault();
                                profileSubmit();
                            }}
                                style={{ width: "100%" }}
                            >
                                <FormControl my={2} mb={"3rem"}>
                                    <FormLabel>
                                        <Text as={"b"}>현재 비밀번호</Text>
                                    </FormLabel>

                                    <InputGroup size="md" mb={2}>
                                        <Input
                                            focusBorderColor="themeGreen.500"
                                            placeholder="password"
                                            size="md"
                                            autoComplete="current-password"
                                            onChange={handlePassword}
                                            id="password"
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl my={2} mb={"3rem"}>

                                    <FormLabel>
                                        <Text as={"b"}>새 비밀번호</Text>
                                    </FormLabel>
                                    <InputGroup size="md">
                                        <Input
                                            focusBorderColor="themeGreen.500"
                                            placeholder="new password"
                                            size="md"

                                            id="newPassword"
                                            onChange={handleNewPassword}
                                        />

                                    </InputGroup>
                                </FormControl>

                                <FormControl my={2} mb={"3rem"}>
                                    <FormLabel>
                                        <Text as={"b"}>닉네임</Text>
                                    </FormLabel>
                                    <Input
                                        focusBorderColor="themeGreen.500"
                                        placeholder="nickname"
                                        size="md"
                                        autoComplete="nickname"
                                        onChange={handleNickname}
                                    />
                                </FormControl>
                                <Flex justifyContent={"space-between"}>
                                    <Button
                                        my={4}
                                        w="25%"
                                        colorScheme="themeGreen"
                                        type="submit"
                                        borderRadius="3xl"

                                    >
                                        정보수정하기
                                    </Button>
                                    <Button
                                        my={4}
                                        w="25%"
                                        type="submit"
                                        colorScheme="red"
                                        borderRadius="3xl"

                                    >회원 탈퇴
                                    </Button>
                                </Flex>
                            </form>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}