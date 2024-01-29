import { CloseIcon } from "@chakra-ui/icons";
import { Button, Center, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function BuyerLiveNav() {
    const navigate = useNavigate();
    return (
        <Container centerContent>
            <Button
                p={"1.5rem"}
                size={"lg"}
                leftIcon={<CloseIcon />}
                colorScheme="teal"
                variant="link"
                onClick={() => {
                    navigate("/v1/main");
                }}
            >
                <Center><Text as={"b"}>라이브 나가기</Text></Center>
                
            </Button>
        </Container>
    );
}
