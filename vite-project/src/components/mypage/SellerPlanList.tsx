import { Box } from "@chakra-ui/layout";
import PlanItems from "./SellerPlanItems"

function PlanList() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <PlanItems />
            <PlanItems />
            <PlanItems />
            <PlanItems />
            <PlanItems />
            <PlanItems />
        </Box>
    )
}

export default PlanList