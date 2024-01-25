import { Box, Flex } from "@chakra-ui/layout";
import { Image, Badge, Button, useDisclosure, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, } from "@chakra-ui/react";
import { useRef } from "react";

function PlanItems() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const broadcastInfo = {
      imageUrl: 'https://www.vegannews.co.kr/data/photos/20230727/art_1688713002447_e60ce1.png',
      imageAlt: 'Rear view of modern home with pool',
      title: '병창농부의 특급 제안-소나무같은 브룩껄리',
      time: '2024.01.25 오후 8:00 예정',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Flex justifyContent="space-between" p="2" borderWidth='1px' borderRadius='lg' overflow='hidden'>

        <Flex p="2">
            <Image mr="2" boxSize="100px" src={broadcastInfo.imageUrl} alt={broadcastInfo.imageAlt} />
            <Box>
                <Box display='flex' alignItems='baseline'>
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
                    >{broadcastInfo.title}
                </Box>
        
                <Box>
                    {broadcastInfo.time}
                </Box>
            </Box>
        </Flex>
        
        <Flex mt='2' alignItems='center'>
            <Button onClick={onOpen}>바로시작</Button>
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
                        아래 내용과 지금 하려는 방송이 일치하시나용
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                        취소
                        </Button>
                        <Button colorScheme='red' ml={3}>
                        방송시작!
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            <Button>수정</Button>
            <Button>등록취소</Button>
        </Flex>

      </Flex>
    )
}

export default PlanItems