import { Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const navigate = useNavigate();
    return (
        <Flex alignItems="center" gap="3">
            <Link
                className="TopNavFont"
                _hover={{ color: "themeGreen.500" }}
                onClick={() => {
                    navigate("./login");
                }}
            >
                로그아웃
            </Link>
            <br />
            <Link
                className="TopNavFont"
                _hover={{ color: "themeGreen.500" }}
                onClick={() => {
                    navigate("./board/notice");
                }}
            >
                고객센터
            </Link>
        </Flex>
    );
}
