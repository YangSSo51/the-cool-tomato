import { Box, Flex, Text } from "@chakra-ui/layout";
import { Badge, Button, useDisclosure, AlertDialog, Divider,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";
import { getLiveDetailAPI, getLiveStartToken } from "../../../api/openVidu";
import { useNavigate } from "react-router-dom";

interface broadcastInfo {
    liveBroadcastId: number;
    broadcastTitle: string;
    nickName: string;
    viewCount: number;
    sellerId: number;
    broadcastStatus: boolean;
}

interface broadcastDetailInfo {
    broadcastTitle: string;
    content: string;
    script: string;
    ttsSetting: boolean;
    chatbotSetting: boolean;
    broadcastStartDate: string;
    broadcastEndDate: string;
}

function PlanItems({plans, onDelete} : {plans: broadcastInfo, onDelete: (liveBroadcastId: number) => void;}) {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);
    const accessToken = useSelector((state: RootState) => state.user.accessToken);
    const [planDetail, setPlanDetail] = useState<broadcastDetailInfo | null>(null);
    const [ startdate, setStartdate ] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLiveDetailAPI({broadcastId: plans.liveBroadcastId}, accessToken)
            setPlanDetail(response)
            setStartdate(response.broadcastStartDate)
        }
        fetchData()
    }, [plans.liveBroadcastId, accessToken])

    const StartLive = () => {
        getLiveStartToken({ accessToken, liveBroadcastId: plans.liveBroadcastId }).then(()=> {
            navigate(`/v1/broadcast/${plans.liveBroadcastId}`)
        }).catch((error) => {
            console.log(error)
        })
    }

    const DeleteLive = () => {
        onDelete(plans.liveBroadcastId)
    }
  
    return (
      <Flex justifyContent="space-between" p="2" borderWidth='1px' borderRadius='lg' overflow='hidden'>

        <Flex p="2">
            <Box>
                <Box display='flex' alignItems='baseline' mt="1rem">
                    <Badge borderRadius='full' px='2' colorScheme='red'>
                    대기중
                    </Badge>
                </Box>
        
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    >{plans.broadcastTitle}
                </Box>
        
                <Box mt="2rem">
                    방송예정일자 : {startdate}
                </Box>
            </Box>
        </Flex>
        
        <Flex mt='2' direction="column" alignItems='center'>
            <Button mb="0.5rem" colorScheme="red" onClick={onOpen}>시작</Button>
                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                    <AlertDialogHeader>라이브 정보 확인하기</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        아래 내용과 지금 하려는 방송이 일치하시나요?
                        <Divider m="2" />
                        {planDetail && (
                            <Box>
                                <Text>방송 제목: {planDetail.broadcastTitle}</Text>
                                <Text>내용: {planDetail.content}</Text>
                                <Text>TTS 설정: {planDetail.ttsSetting ? "활성화" : "비활성화"}</Text>
                                <Text>챗봇 설정: {planDetail.chatbotSetting ? "활성화" : "비활성화"}</Text>
                            </Box>
                        )}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                        취소
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={StartLive}>
                        방송시작!
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            <Button mb="0.5rem" onClick={() => {navigate(`/v1/live/edit/${plans.liveBroadcastId}`)}}>수정</Button>
            <Button onClick={DeleteLive}>삭제</Button>
        </Flex>

      </Flex>
    )
}

export default PlanItems