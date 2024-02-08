import { Box } from "@chakra-ui/layout";
import {
    Button,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";
import { getSellerApplicationsAPI, approveSellerApplicationAPI } from "../../../api/user";
import { AcceptSeller } from "../../../types/DataTypes";

function AcceptSeller() {
    const user = useSelector((state: RootState) => state.user);
    // const [totalsize, setTotalsize] = useState(0)
    const [allUserData, setAllUserData] = useState([])

    useEffect(() => {
        getSellerApplicationsAPI(0, 18, user.accessToken)
        .then((response) => {
            // setTotalsize(response.data.totalSize)
            // console.log(totalsize)
            setAllUserData(response.data.sellers)
            
            // getSellerApplicationsAPI(0, totalsize, user.accessToken)
            // .then((response) => {
            //     setAllUserData(response.data)
            //     console.log(allUserData)
            // })
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <Box flexDirection="column" w="90%" h="full">
            <UserList allUserData={allUserData} />
        </Box>
    )
}

export default AcceptSeller;


function UserList({ allUserData }: { allUserData: AcceptSeller[]}) {
    const user = useSelector((state: RootState) => state.user);
    console.log(allUserData)
    console.log("테스트 ㅣ ",user)
    return (
        <>
        <Accordion allowMultiple>
            {allUserData.map((item, index) => (
                <AccordionItem key={index}>
                    {/* 아코디언 초기 상태 */}
                    <AccordionButton justifyContent="space-between">
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xl'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {item.userId} : {item.loginId} / 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                        {item.sellerInfoId}
                        <Button onClick={()=>{approveSellerApplicationAPI(item.sellerInfoId, user.accessToken)}} />
                    </AccordionPanel>

                </AccordionItem>
            ))}
        </Accordion>
            
        </>
    );
}