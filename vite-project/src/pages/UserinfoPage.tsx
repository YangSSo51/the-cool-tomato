import { Box, Flex,  Center } from "@chakra-ui/layout";
import { Avatar, Button, Text, Select, FormControl, FormLabel, InputGroup, Input, InputRightElement, Menu, MenuButton, MenuList, MenuItem, FormHelperText} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, CheckIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/stores/store";
// import { getMyInfoAPI, postMyInfoAPI, deleteMyInfoAPI } from "../api/user";

export default function UserinfoPage() {
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.user);
    const accessToken = user.accessToken;
    const refreshToken = user.refreshToken;
    const [loginId, setLoginId] = useState("")
    const [profileImgFile, setProfileImgFile] = useState(null)
    const [profileImgsrc, setProfileImgsrc] = useState(user.profileImg)
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const [sex, setSex] = useState("")
    const [birthday, setBirthday] = useState("")
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [validMessage, setValidMessage] = useState("")

//     function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
//         const inputValue = e.target.value;
//         const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
//         // 체크아이콘 표시를 위해
//         setCheck(regex.test(inputValue));
//         setPassword(inputValue);
//     }

    function handlePassword2(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
        // 체크아이콘 표시를 위해
        setCheck2(regex.test(inputValue));
        setNewPassword(inputValue);
        
        // 유효성 검사를 통과하지 않을 경우 validMessage 설정
        if (!regex.test(inputValue)) {
            setValidMessage("최소 8자 이상, 최소한 하나의 대문자, 하나의 소문자, 하나의 숫자, 하나의 특수문자를 포함, 공백 허용하지 않습니다");
        } else {
            setValidMessage(""); // 유효성 검사를 통과하면 validMessage를 빈 문자열로 설정
        }
    }
    

    useEffect(() => {
        const fetchUserInfo = async () => {
            const response = await getMyInfoAPI(accessToken);
            setLoginId(response.data.loginId)
            setNickname(response.data.nickname)
            setSex(response.data.sex)
            setBirthday(response.data.birthday)
        }
        fetchUserInfo();
    }, [accessToken]);
 

    async function onSubmit(event: React.SyntheticEvent): Promise<void> {
        event.preventDefault();
        if (isPasswordValid === false) {
            alert("유효한 비밀번호가 아닙니다")
        } else {
            const userData = {
                profileImgFile: profileImgFile,
                profileImg: profileImgsrc, 
                password: password,
                newPassword: newPassword,
                nickname: nickname,
                sex: sex,
                birthday: birthday
            };
            const response = await postMyInfoAPI(userData, accessToken, refreshToken);
            if (response === 1) {
                navigate('/v1/sign')
            } else if (response === 33) {
                alert("이미 회원가입된 이메일입니다. 로그인해주세요")
            }
        }
    }
   

    return (
        <Box minH="100vh" mb="10" paddingBlock="6rem">
            <Center className="response_title" fontFamily="GmkBold" fontSize={{ base: "4rem", md: "5rem", lg: "6rem" }} color={"themeFontGreen.500"}>
                회원정보수정
            </Center>

            <Flex m="auto"  border="2px" borderColor="themeFontGreen.500" overflow="scroll" rounded="lg" w="85vw" minH="85vh" >

                <Flex m="auto" direction={{ base: "column", lg: "row"}} rounded="lg" w="80vw" maxH={{ base:"auto", lg: "80vh"}} px="2">
                    <Box w={{ base: "100%", lg: "25%" }} pr="4" >
                        <Box w="full" bg="white" rounded="lg" overflow="hidden">
                            <Flex direction="column" align="center" py="6">

                                <Button
                                    mb="4"
                                    onClick={() => {
                                        navigate("/v1/buyer/");
                                    }}
                                >
                                마이페이지로 돌아가기
                                </Button>

                                <Avatar mt="4" mb="4" size="xl" 
                                    // src={profileImg} 
                                    />
                                
                                <Menu>
                                    <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.400' }}
                                        _focus={{ boxShadow: 'outline' }}
                                    >
                                        프로필 사진 수정
                                    </MenuButton>
                                    <MenuList>

                                        <MenuItem>
                                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg, image/jpg" 
                                                // onChange={handleFileChange}
                                            />
                                        </MenuItem>
                                        <MenuItem 
                                            // onClick={onclickDeletePic}
                                        >현재 사진 삭제</MenuItem>
                                    </MenuList>
                                </Menu>

                                <Button
                                    mt="4"
                                    colorScheme="red"
                                    // onClick={() => {deleteMyInfoAPI(user.accessToken)}}
                                >회원 탈퇴
                                </Button>
                            </Flex>
                        </Box>
                    </Box>

                    <Box w="75%" bg="white" rounded="lg">
                        <Flex direction="column" justify="center" align="center" h="full">
                            
                            <Button
                                mt="4"
                                colorScheme="red"
                                // onClick={handleDeleteAccount}
                            >판매자 정보 보기
                            </Button>
                        
                        <form    
                            // onSubmit={onSubmit}
                            style={{ width: "100%" }}
                        >
                            <FormControl my={2}>
                                <FormLabel>
                                    <Text as={"b"}>아이디</Text>
                                </FormLabel>
                                <Input
                                    focusBorderColor="themeGreen.500"
                                    // placeholder={loginId}
                                    size="md"
                                    disabled
                                />
                            </FormControl>
                            
                            <FormControl my={2}>
                                <FormLabel>
                                    <Text as={"b"}>현재 비밀번호</Text>
                                </FormLabel>
                                
                                <InputGroup size="md" mb={2}>
                                    <Input
                                        focusBorderColor="themeGreen.500"
                                        placeholder="password"
                                        size="md"
                                        autoComplete="current-password"
                                        // value={password}
                                        // onChange={handlePassword}
                                        // type={show ? 'text' : 'password'}
                                        id="password"
                                    />
                                    <InputRightElement>
                                        {/* {check ? (
                                            <CheckIcon color="green.500" mr={"1"} />
                                            ) : (
                                                ''
                                        )}
                                        <Button h='1.75rem' size='sm' variant="ghost" onClick={handleClick}>
                                        {show ? (
                                            <ViewIcon color="grey" />
                                        ) : (
                                            <ViewOffIcon color="grey" />
                                        )}     */}
                                        {/* </Button> */}
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                                
                            <FormControl my={2}>

                                <FormLabel>
                                    <Text as={"b"}>새 비밀번호</Text>
                                </FormLabel>
                                <InputGroup size="md">
                                    <Input
                                        focusBorderColor="themeGreen.500"
                                        placeholder="new password"
                                        size="md"
                                        value={newPassword}
                                        onChange={handlePassword2}
                                        id="newPassword"
                                        />
                                    <InputRightElement>
                                        {check2 ? (
                                            <CheckIcon color="green.500" mr={"1"} />
                                            ) : (
                                                ''
                                                )}
                                    </InputRightElement>
                                </InputGroup>

                                <FormHelperText>{validMessage}</FormHelperText>
                            </FormControl>

                            <FormControl my={2}>
                                <FormLabel>
                                    <Text as={"b"}>닉네임</Text>
                                </FormLabel>
                                <Input
                                    focusBorderColor="themeGreen.500"
                                    placeholder="nickname"
                                    size="md"
                                    autoComplete="nickname"
                                    // value={nickname}
                                    // onChange={(e) => {setNickname(e.target.value);}}
                                />
                            </FormControl>

                            <FormControl my={2}>
                                <FormLabel>
                                    <Text as={"b"}>성별</Text>
                                </FormLabel>
                                <Select
                                    placeholder=""
                                    // value={sex}
                                    // onChange={(e) => setSex(e.target.value)}
                                >
                                    <option value="M">남자</option>
                                    <option value="F">여자</option>
                                </Select>
                                
                            </FormControl>
                            <FormControl my={2}>
                                <FormLabel>
                                    <Text as={"b"}>생년월일</Text>
                                </FormLabel>
                                <Input
                                    focusBorderColor="themeGreen.500"
                                    placeholder="birthday"
                                    size="md"
                                    type="date"
                                    autoComplete="bday"
                                    // value={birthday}
                                    // onChange={(e) => setBirthday(e.target.value)}
                                ></Input>
                            </FormControl>
                            <Button
                                my={4}
                                w="95%"
                                colorScheme="themeGreen"
                                type="submit"
                                borderRadius="3xl"
                            >
                                정보수정하기
                            </Button>
                        </form>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}
