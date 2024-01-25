import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal,
    Box,
} from "@chakra-ui/react";
import { useRef } from "react";

function Nofitication() {
    return (
        <Popover closeOnBlur={false} placement="bottom">
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button>Click to {isOpen ? "close" : "open"}</Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverHeader>This is the header</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Box>
                                    Hello. Nice to meet you! This is the body of
                                    the popover
                                </Box>
                            </PopoverBody>
                            <PopoverFooter>This is the footer</PopoverFooter>
                        </PopoverContent>
                    </Portal>
                </>
            )}
        </Popover>
    );
}

export default Nofitication;
