import NavBar from "./Navbar";
import FooterComponent from "./Footer";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function Layout() {
    return (
        <Flex direction={"column"} minHeight={"100vh"}>
            <NavBar />
            <Flex flex="1" direction={"column"} overflowY={"auto"}>
                <Outlet />
            </Flex>
            <FooterComponent />
        </Flex>
    );
}

export default Layout;
