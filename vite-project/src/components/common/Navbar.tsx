import "../../css/Navbar.css";
import { Search2Icon, BellIcon } from "@chakra-ui/icons";
import { Image, Box, Flex, Spacer, Avatar } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <Box className="paddingNavBar">
            <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box />
                <Spacer />
                <Flex alignItems="center" gap="3">
                    <Box className="TopNavFont">회원가입</Box>
                    <br />
                    <Box className="TopNavFont">로그인</Box>
                    <br />
                    <Box className="TopNavFont">고객센터</Box>
                </Flex>
            </Flex>
            <Flex
                minWidth="max-content"
                alignItems="center"
                gap="3"
                className="NavBottom"
            >
                <Box width={"13"} height={"10"} overflow={"hidden"} onClick={() => {navigate('./')}}>
                    <Image
                        width={"100%"}
                        height={"100%"}
                        objectFit={"cover"}
                        src="/img/main_logo.png"
                    ></Image>
                </Box>

                <Spacer />
                <Box>
                    <Flex minWidth="max-content" alignItems="center" gap="3">
                        <Box
                            onClick={() => {
                                navigate("/v1/live/list");
                            }}
                            color={"black"}
                            _hover={{ color: "#126F54" }}
                            className="NavFont"
                        >
                            라이브
                        </Box>
                        <Spacer />
                        <Box
                            onClick={() => {
                                navigate("/v1/items/list");
                            }}
                            color={"black"}
                            _hover={{ color: "#126F54" }}
                            className="NavFont"
                        >
                            상품 목록
                        </Box>
                        <Spacer />
                        <Box
                            onClick={() => {
                                navigate("/v1/calendar");
                            }}
                            color={"black"}
                            _hover={{ color: "#126F54" }}
                            className="NavFont"
                        >
                            라이브 달력
                        </Box>
                    </Flex>
                </Box>
                <Spacer />
                <Box>
                    <Flex minWidth="max-content" alignItems="center" gap="4">
                        <Search2Icon
                            onClick={() => {
                                navigate("/v1/search");
                            }}
                            color={"#126F54"}
                            boxSize={6}
                        />
                        <BellIcon color={"#126F54"} boxSize={6} />
                        <Avatar
                            onClick={() => {
                                navigate("/v1/buyer");
                            }}
                            size="sm"
                            
                        />
                    </Flex>
                </Box>
            </Flex>
            <hr />
        </Box>
    );
}

export default NavBar;
