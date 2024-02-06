import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getSellerDetailAPI } from "../api/user";
import { useParams } from "react-router-dom";
import SellerHeader from "../components/sellerprofile/Sellerheader";
import SellerPosts from "../components/sellerprofile/SellerPosts";

function ProfilePage() {
    const { sellerId } = useParams<{ sellerId: string }>();
    const sellerIdNumber = parseInt(sellerId);
    const [ test, setTest ] = useState(false)

    const [sellerInfo, setSellerInfo] = useState({})
    // const [products, setProducts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSellerDetailAPI(sellerIdNumber)
                setSellerInfo(response.data)
                setTest(true)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, [])

    return (
        <>
            <Flex
                direction={"column"}
                p={"1rem"}
                alignItems={"center"}
                mt={"2rem"}
                mb={"2rem"}
                maxW={"100vw"}
            >
                {
                    test ? 
                    <SellerHeader sellerId={sellerIdNumber} sellerInfo={sellerInfo} />
                    :
                    <h1>loading</h1>
                }
                <SellerPosts />
            </Flex>
        </>
    );
}

export default ProfilePage;
