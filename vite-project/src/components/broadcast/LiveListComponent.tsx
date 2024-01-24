import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface LiveComponent {
    id: number;
    url: string;
    title: string;
    price : number;
}

const LiveListComponent = ({ id, url, title, price }: LiveComponent) => {

    return (
        <Card maxW="18rem" key={id}>
            <CardBody>
                <Image
                    src={url}
                    borderRadius="lg"
                    boxSize={"sm"}
                    objectFit={'cover'}
                    h={"18rem"}
                    
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{title}</Heading>
                    
                    <Text color="themeGreen.500" fontSize="2xl">
                        {price}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
 
    );
};

export default LiveListComponent;
