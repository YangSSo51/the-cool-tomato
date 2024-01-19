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
        "price" : 1000
      },
      {
        "product_id" : 2,
        "category_id" : 2,
        "seller_id" : 3,
        "product_name" : "name2",
        "product_content" : "for less than 6",
        "price" : 20000
      },
      {
        "product_id" : 1,
        "category_id" : 3,
        "seller_id" : 5,
        "product_name" : "name3",
        "product_content" : "Born in France",
        "price" : 6000
      }
    ])

    const testData = currentSee.map((item, index) => {
        return (
            <li key={index}>{item.product_name} / {item.product_content}</li>
        )
    })

    return (

        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Box h="full" pl="4">
                <Flex flexDir="column" h="full">
                { testData ? testData : <Text color="gray.400">최근 본 상품이 없습니다! 상품 구경하러 가기</Text> }
                <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://d3cpiew7rze14b.cloudfront.net/assets/mission/potato.png'
                        alt='Caffe Latte'
                    />
                        <Stack>
                            <CardBody>
                                <Heading size='md'>맛있는감자</Heading>
                            </CardBody>
                            <CardFooter>
                                <Button variant='solid' colorScheme='green'>
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Flex>
            </Box>
        </Box>

    )
}

// function Card(props) {
//     console.log(props)
//     return (
//       <div>
//         <Link to={"/detail/" + (props.i)}>
//         <img src={process.env.PUBLIC_URL + "/shop" + (props.i+1) + ".jpg"} width="80%" alt="상품 이미지" /></Link>
//           <h4>{props.products.title}</h4>
//           <p>{props.products.price}</p>
//       </div>
//     )
//   }