import { Box, Flex, Text } from "@chakra-ui/layout";
import { Card, Image, Stack, CardBody, Heading, CardFooter, Button } from "@chakra-ui/react";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export default function Recent() {

    // let data = useQuery([current_products], ()=>
    //     axios.get('링크')
    //     .then((a)=> {return a.data})
    // )

    const [ currentSee, setCurrentSee ] = useState([ {
        "product_id" : 3,
        "category_id" : 1,
        "seller_id" : 1,
        "product_name" : "name1",
        "product_content" : "only 5 inches",
        "product_img" : "https://d3cpiew7rze14b.cloudfront.net/assets/mission/potato.png",
        "price" : 1000
      },
      {
        "product_id" : 4,
        "category_id" : 2,
        "seller_id" : 3,
        "product_name" : "name4",
        "product_content" : "spicy  spicy6",
        "product_img" : "https://ai.esmplus.com/gded/h/a/20210804/22/1628084716623eaf99f9.jpg",
        "price" : 50100
      },
      {
        "product_id" : 5,
        "category_id" : 2,
        "seller_id" : 3,
        "product_name" : "name5",
        "product_content" : "for less than 6",
        "product_img" : "https://cdnimage.dailian.co.kr/news/202106/news_1625036256_1006748_m_1.jpeg",
        "price" : 6100
      },
      {
        "product_id" : 6,
        "category_id" : 2,
        "seller_id" : 3,
        "product_name" : "name6",
        "product_content" : "for less than 6",
        "product_img" : "https://cdn.wadiz.kr/wwwwadiz/green001/2021/1202/20211202170553149_131466.jpg/wadiz/resize/1200/format/jpg/quality/80/",
        "price" : 6100
      },
      {
        "product_id" : 7,
        "category_id" : 2,
        "seller_id" : 3,
        "product_name" : "name7",
        "product_content" : "for less than 6",
        "product_img" : "https://i.namu.wiki/i/B3eGKbxRUW3Kq1jy9eHW81UCbtPui0K97-yVQZqusnssOG-3gc2e0dHsTlGOcMWdcsNvr9oZp7Z7o4qZLutILA.webp",
        "price" : 6100
      },
      {
        "product_id" : 2,
        "category_id" : 2,
        "seller_id" : 3,
        "product_name" : "name2",
        "product_content" : "for less than 6",
        "product_img" : "https://i.namu.wiki/i/aD0cdxkIOd7Ov4vsrdamC04cSBaqI3KLwSI8PsYoEkdkmzLOM-Ke1pu5A5cuz8UbCXLVht2JVk1l44VFCx2d2g.webp",
        "price" : 20000
      },
      {
        "product_id" : 1,
        "category_id" : 3,
        "seller_id" : 5,
        "product_name" : "name3",
        "product_content" : "Born in France",
        "product_img": "https://www.foodneconomy.com/news/photo/201811/218656_22708_208.jpg",
        "price" : 6000
      }
    ])

    const testData = currentSee.map((item, index) => (
        <CardItem key={index} product={item} />
    ));

    return (
        <Box flexDirection="column" w="90%" h="full">
            <Flex flexDir="column" h="full" overflowY="scroll">
                {testData.length ? testData : <Text color="gray.400">최근 본 상품이 없습니다! 상품 구경하러 가기</Text>}
            </Flex>
        </Box>
    );
}

function CardItem({ product }) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            variant='outline'
        >
            <Flex w="100%">
                <Image
                    objectFit='contain'
                    maxW={{ base: '20%', sm: '100px' }}
                    src={product.product_img}
                    alt={product.product_name}
                />
                <Stack>
                    <CardBody>
                        <Heading size='md'>{product.product_name}</Heading>
                        <Text>가격 : {product.price}</Text>
                    </CardBody>
                    <CardFooter>
                        <Button variant='solid' colorScheme='green'>
                            {`${product.product_name} 사러가기`}
                        </Button>
                    </CardFooter>
                </Stack>
            </Flex>
        </Card>
    );
}