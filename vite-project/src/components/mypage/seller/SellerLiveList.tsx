import { Box } from "@chakra-ui/layout";
import LiveItems from "./SellerLiveItems";

function LiveList() {
    // const [livedItem, setLivedItem] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await sellersMyproductsAPI()
    //             setSellerItem(response.data.list)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     };
    //     fetchData();
    // }, [])

    return (
        <Box flexDirection="column" w="90%" h="full">
            {/* { sellerItem && sellerItem.map((item, index) => {
                return <ItemsofItems sellerItem={sellerItem[index]} i={index} />
                })
            } */}
            <LiveItems />
            <LiveItems />
        </Box>
    )
}

export default LiveList