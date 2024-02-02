import "../../css/Navbar.css";
import { Image, Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/stores/store";
import LoginComponent from "./NavComponent/LoginComponent";
import LogoutComponent from "./NavComponent/LogoutComponent";
import SellerComponent from "./NavComponent/SellerComponent";
import BuyerComponent from "./NavComponent/BuyerComponent";
import ProfileBuyerComponent from "./NavComponent/NavBuyerProfileComponent";
import ProfileSellerComponent from "./NavComponent/NavSellerProfileComponent";
import LogoutProfileComponent from "./NavComponent/LogoutProfileComponent";

function NavBar() {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const [isLogin, setIsLogin] = useState(false);
    const isBuyer = user.auth === "BUYER";
    const isSeller = user.auth === "SELLER";
    const profileImg = user.profileImg
    if (user.auth === "BUYER" || user.auth === "SELLER" || user.auth === "ADMIN") {
        setIsLogin(true)
    }

    return (
        <Box className="paddingNavBar">
            <Flex minWidth={"max-content"} alignItems="center" gap="2">
                <Box />
                <Spacer />
                {isLogin ? <LoginComponent /> : <LogoutComponent />}
            </Flex>
            <Flex minWidth="max-content" alignItems="center" gap="3">
                <Box
                    width={"4rem"}
                    height={"4rem"}
                    onClick={() => {
                        navigate("./main");
                    }}
                >
                    <Image
                        width={"100%"}
                        height={"100%"}
                        objectFit={"cover"}
                        src={profileImg}
                    ></Image>
                </Box>

                <Spacer />

                {isSeller ? <SellerComponent /> : <BuyerComponent />}

                <Spacer />

                {isLogin && isBuyer ? (
                    <ProfileBuyerComponent />
                ) : isLogin && isSeller ? (
                    <ProfileSellerComponent />
                ) : (
                    <LogoutProfileComponent />
                )}
            </Flex>
        </Box>
    );
}

export default NavBar;
