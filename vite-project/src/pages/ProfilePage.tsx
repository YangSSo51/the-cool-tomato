import { Text, Button, Flex, Link, Center, Container, useDisclosure } from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getSellerDetailAPI } from "../api/user";
import { useParams } from "react-router-dom";

function ProfilePage() {
    const { sellerId } = useParams<{ sellerId: number }>();
    const sellerIdNumber = parseInt(sellerId);
    console.log('sellerId:', typeof(sellerId));
    console.log('sellerIdNumber:', typeof(sellerIdNumber))

    const [sellerInfo, setSellerInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSellerDetailAPI(sellerIdNumber)
                setSellerInfo(response.data.list)
                console.log(sellerInfo)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, [])

    return (
        <Text>
            hi
        </Text>
        // <Flex
        //     direction="column"
        //     className="profile-content"
        //     align="start"
        //     mt={4}
        //     ml={4}
        // >
        //     <Flex align="center" justify="space-between">

        //         <Text fontSize="2xl" fontWeight="bold" mb={2}>
        //             {sellerInfo?.memberUsername}
        //         </Text>

        //         {sellerInfo?.me ? (
        //             <>
        //                 <Link to={"/accounts/edit"} fontSize="sm" mr={2}>
        //                     프로필 편집
        //                 </Link>
        //                 <FaCog fontSize="20px" onClick={onOpen} cursor="pointer" />
        //             </>
        //             ) : (
        //             <>
        //                 {sellerInfo?.following ? (
        //                     <Flex align="center" justify="start">
        //                         <Button onClick={openUnFollowModal} ml={2}>
        //                             <ImageSprite {...memberImage} />
        //                         </Button>
        //                     </Flex>
        //                 ) : (
        //                     <Button
        //                         className="follow-button"
        //                         onClick={followHandler}
        //                         ml={2}
        //                         size="sm"
        //                     >
        //                     팔로우
        //                     </Button>
        //                 )}
        //             </>
        //          )}
        //         <ThreeDots onClick={openUserActionModal} />
        //     </Flex>
    
        //     <Flex align="center" mt={2} mb={4}>
        //         <Text mr={6}>
        //             게시물 <span>{sellerInfo?.memberPostsCount}</span>
        //         </Text>
        //         <Text
        //             onClick={() => openFollowerModal(true)}
        //             cursor="pointer"
        //             mr={6}
        //         >
        //             팔로워 <span>{sellerInfo?.memberFollowersCount}</span>
        //         </Text>
        //         <Text
        //             onClick={() => openFollowerModal(false)}
        //             cursor="pointer"
        //         >
        //             팔로우 <span>{sellerInfo?.memberFollowingsCount}</span>
        //         </Text>
        //     </Flex>
        //     <Text className="detail-info">{sellerInfo?.memberName}</Text>
        // </Flex>
    );
};

export default ProfilePage;
