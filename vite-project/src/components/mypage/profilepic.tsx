import { Box, Image, Center, Button } from '@chakra-ui/react';

export default function Profile() {
    return (
        <Box>
            <Box maxW='420px' bg='white' p='6'>
                <Image
                    src='../../../public/img/profile.png'
                    alt='Profile picture'
                    borderRadius='xl'
                    objectFit='cover'
                    mx='auto' />
            </Box>
            <Center my="6">
                <Button colorScheme="blue">회원정보수정</Button>
            </Center>
        </Box>

    )
}
