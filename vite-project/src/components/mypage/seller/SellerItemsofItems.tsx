import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar, Button, Card, Image, Stack, CardBody, Heading, CardFooter } from "@chakra-ui/react";

function ItemsofItems() {
    const productsInfo = {
        imageUrl: 'https://flexible.img.hani.co.kr/flexible/normal/640/480/imgdb/original/2023/1109/20231109503652.jpg',
        imageAlt: 'Rear view of modern home with pool',
        productName: '유기농흙밭 튼튼거대꿀맛고구마',
        productContent: '저희집 거대밭에서 꺼내놓은 ',
        price: 98150,
        deliveryCharge: 8512,
        quantity: 34,
        paymentLink: 4,
      }

    return (
        <Flex justifyContent="space-between" alignItems="center" my="4" mx="auto" p="2" borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Flex p="2">
                <Image mr="2" boxSize="100px" src={productsInfo.imageUrl} alt={productsInfo.imageAlt} />

                <Box ml="2" pt="4">

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        >
                        {productsInfo.productName}
                    </Box>

                    <Box>
                        <Box as='span' color='gray.600' fontSize='sm'>
                            {productsInfo.productContent}
                        </Box>
                    </Box>

                    <Box display='flex' alignItems='baseline'>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            >
                            가격 {productsInfo.price} &bull; 배송비 {productsInfo.deliveryCharge} &bull; 수량 {productsInfo.quantity}
                            &nbsp; 
                            판매링크 {productsInfo.paymentLink} 
                        </Box>
                    </Box>
                </Box>
            </Flex>

            <Button>
                데이터확인!
            </Button>
        </Flex>
    )
}

export default ItemsofItems