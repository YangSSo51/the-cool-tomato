import { Center, Text } from '@chakra-ui/react'
import dummy from '../../components/item/dummylist/dummy'

export default function BuyerItem() {
    const data = dummy

    return (
        <>
            <Center p={"3px"}>
                <Text as={'b'} fontSize={'lg'}>라이브 특별 가격!</Text>
            </Center>
        </>
    )
}