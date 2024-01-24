import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Card, CardBody } from "@chakra-ui/react";

export default function SearchContents() {

    return (
        <Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {[1, 2, 3, 4].map((productNumber) => (
            <GridItem key={productNumber}>
              <Card>
                <CardBody p={6}>
                  <img
                    alt={`Product ${productNumber} Image`}
                    className="w-full h-32 object-cover mb-2"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    Product {productNumber}
                  </Text>
                  <Text color="gray.500">
                    This is a short description of the product.
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
        </Box>

    )
}
