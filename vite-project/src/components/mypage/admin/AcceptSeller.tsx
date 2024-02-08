// import { Box } from "@chakra-ui/layout";
// import {
//     Accordion,
//     AccordionButton,
//     AccordionItem,
//     AccordionPanel,
//     AccordionIcon,
//   } from '@chakra-ui/react'
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/stores/store";
// import { getSellerApplicationsAPI } from "../../../api/user";
// import { AdminUserInfo } from "../../../types/DataTypes";

// function AcceptSeller() {
//     const user = useSelector((state: RootState) => state.user);
//     const [allUserData, setAllUserData] = useState([])

//     useEffect(() => {
//         getSellerApplicationsAPI(1, 100, user.accessToken)
//         .then((response) => {
//             setAllUserData(response.data)
//             console.log(response)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     })

//     return (
//         <Box flexDirection="column" w="90%" h="full">
//             <UserList allUserData={allUserData} />
//         </Box>
//     )
// }

// export default AcceptSeller;


// function UserList({ allUserData }: { allUserData: AdminUserInfo[]}) {
//     // const user = useSelector((state: RootState) => state.user);


//     return (
//         <>
//         <Accordion allowMultiple>
//             {allUserData.map((item, index) => (
//                 <AccordionItem key={index}>
//                     {/* 아코디언 초기 상태 */}
//                     <AccordionButton justifyContent="space-between">
//                         <Box
//                             color='gray.500'
//                             fontWeight='semibold'
//                             letterSpacing='wide'
//                             fontSize='xl'
//                             textTransform='uppercase'
//                             ml='2'
//                         >
//                             {item.users.Id} : {item.users.loginId} / 
//                         </Box>
//                         <AccordionIcon />
//                     </AccordionButton>

//                     <AccordionPanel>
//                         {item.users}
//                     </AccordionPanel>

//                 </AccordionItem>
//             ))}
//         </Accordion>
            
//         </>
//     );
// }