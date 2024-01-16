import "../../css/Navbar.css";
import { Search2Icon, BellIcon } from "@chakra-ui/icons";
import {
    Button,
    ChakraProvider,
    Center,
    Grid,
    GridItem,
    Flex,
} from "@chakra-ui/react";

function NavBar() {
    return (
        <ChakraProvider>
            <Center>
                <Grid
                    className="MainBorder"
                    templateColumns="repeat(3, 10fr)"
                    gap={100}
                >
                    <GridItem w="100%" h="20">
                        <img src="img/image.png" className="LogoImage"></img>
                    </GridItem>
                    <Flex align="center" justify="center" w="100%" h="10">
                        <Flex align="center" justify="center">
                            <Flex className="NavFont">
                                라이브
                            </Flex>
                            <Flex className="NavFont">
                                상품 목록
                            </Flex>
                            <Flex className="NavFont">
                                라이브 달력
                            </Flex>
                        </Flex>
                    </Flex>
                    <GridItem w="190%" h="10">
                        <Search2Icon className="NavRight" boxSize={5} />
                        <BellIcon className="NavRight" boxSize={5} />
                        <Button
                            className="NavRight"
                            color="#126F54"
                            borderColor="#126F54"
                            _hover={{ borderColor: "#126F54" }}
                            _active={{
                                bg: "#126F54",
                                transform: "scale(0.98)",
                                borderColor: "#126F54",
                            }}
                            width="30"
                        >
                            마이페이지
                        </Button>
                        <Button
                            className="NavRight"
                            bg="#126F54"
                            colorScheme="#000000"
                            borderColor="#126F54"
                            _active={{
                                bg: "#ffffff",
                                transform: "scale(0.98)",
                                borderColor: "#ffffff",
                            }}
                        >
                            회원가입
                        </Button>
                    </GridItem>
                </Grid>
            </Center>
        </ChakraProvider>
    );
}

export default NavBar;
