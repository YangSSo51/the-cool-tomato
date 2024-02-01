import { Box } from "@chakra-ui/layout";
import { TestItems } from "./TestItem";


export function TestComponent(test: object) {
    return (
        <Box flexDirection="column" w="90%" h="full">
            <TestItems test={test.title}/>
            <TestItems test={test.title}/>
            <TestItems test={test.title}/>
            <TestItems test={test.title}/>
            <TestItems test={test.title}/>
            <TestItems test={test.title}/>
        </Box>
    )
}