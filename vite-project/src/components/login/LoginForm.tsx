import { useState } from "react";
import {
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";

function onSubmit(): void {
    alert("submitted");
}

function LoginForm() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <form onSubmit={onSubmit} style={{ width: "100%" }}>
            <FormControl py={1}>
                <Input
                    focusBorderColor="themeGreen.500"
                    placeholder="ID"
                    size="md"
                />
            </FormControl>
            <FormControl>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        focusBorderColor="themeGreen.500"
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size="sm"
                            colorScheme="themeGreen"
                            variant="outline"
                            color="themeGreen.500"
                            onClick={handleClick}
                            borderRadius="lg"
                        >
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Center>
                <Button
                    mt={4}
                    w="100%"
                    colorScheme="themeGreen"
                    type="submit"
                    borderRadius="3xl"
                    py={1}
                >
                    Login
                </Button>
            </Center>
        </form>
    );
}

export default LoginForm;
