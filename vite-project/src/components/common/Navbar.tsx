import "../../css/Navbar.css";
import { Image, Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import LoginComponent from "./navcomponent/LoginComponent";
import LogoutComponent from "./navcomponent/LogoutComponent";

import { useNavigate } from "react-router-dom";
import SellerComponent from "./navcomponent/SellerComponent";
import BuyerComponent from "./navcomponent/BuyerComponent";
import ProfileBuyerComponent from "./navcomponent/NavBuyerProfileComponent";
import ProfileSellerComponent from "./navcomponent/NavSellerProfileComponent";
import LogoutProfileComponent from "./navcomponent/LogoutProfileComponent";

function NavBar() {
    const navigate = useNavigate();
    const [loginlogout, LoginState] = useState(true);
    const [BuyerSeller, BuyerSellerState] = useState(true);
    const [profile, ProfileState] = useState();

    return (
        <Box className="paddingNavBar">
            <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box />
                <Spacer />
                {loginlogout ? <LoginComponent /> : <LogoutComponent />}
            </Flex>
            <Flex minWidth="max-content" alignItems="center" gap="3">
                <Box
                    width={"13"}
                    height={"10"}
                    overflow={"hidden"}
                    onClick={() => {
                        navigate("./");
                    }}
                >
                    <Image
                        width={"100%"}
                        height={"100%"}
                        objectFit={"cover"}
                        src="/img/main_logo.png"
                    ></Image>
                </Box>

                <Spacer />
                {BuyerSeller ? <BuyerComponent /> : <SellerComponent />}
                <Spacer />
                {loginlogout && BuyerSeller ? (
                    <ProfileBuyerComponent />
                ) : loginlogout && !BuyerSeller ? (
                    <ProfileSellerComponent />
                ) : (
                    <LogoutProfileComponent />
                )}
            </Flex>
        </Box>
    );
}

export default NavBar;
