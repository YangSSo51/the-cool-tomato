import { Text } from "@chakra-ui/layout";

export default function NewProduct() {
    return (
        <>
            <Text>NewProduct</Text>
            <Text>
                {`
                    "liveProducts":[{
                        "productId" : 1,
                        "liveId" : 1,
                        "liveFlatPrice" : 5000,
                        "liveRatePrice" : 0,
                        "livePriceStartDate" : "2024.01.06",
                        "livePriceEndDate" : "2024.01.07",
                        "mainProductSetting" : true,
                        "seq" : 1
                    },{
                        "productId" : 2,
                        "liveId" : 1,
                        "liveFlatPrice" : 5000,
                        "liveRatePrice" : 0,
                        "livePriceStartDate" : "2024.01.06",
                        "livePriceEndDate" : "2024.01.07",
                        "mainProductSetting" : true,
                        "seq" : 1
                    }]
                `}
            </Text>
        </>
    );
}
