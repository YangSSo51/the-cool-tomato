import { Avatar, AvatarBadge, Flex, Text, Input, Button } from "@chakra-ui/react";

export default function Live() {
  return (
    <Flex direction={{ base: "column", lg: "row" }} bg="white">
      <Flex
        className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md"
        w={{ base: "full", lg: "1/2" }}
        p={4}
      >
        <img
          src="../assets/temp.png"
          alt="Live stream"
        />
      </Flex>
      <Flex w={{ base: "full", lg: "1/2" }} p={4} border="1px" rounded="lg" bg="white">
        <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
          <Text as="h3" fontSize="lg" fontWeight="medium" color="gray.900">
            Live Chat
          </Text>
          <Flex direction="column" mt={4} h="64" overflowY="auto" borderTop="1px" borderBottom="1px" borderColor="gray.200" darkBorderColor="gray.700">
            <div className="py-2">
              <Flex>
                <Avatar>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <div className="text-sm text-gray-900 dark:text-gray-100">
                  <Text fontWeight="semibold">Jared Palmer</Text>
                  <Text>This live show is amazing!</Text>
                </div>
              </Flex>
              <Flex>
                <Avatar>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <div className="text-sm text-gray-900 dark:text-gray-100">
                  <Text fontWeight="semibold">Shadcn</Text>
                  <Text>Thanks! We're glad you're enjoying it.</Text>
                </div>
              </Flex>
            </div>
          </Flex>
          <Flex mt={4}>
            <Input className="w-full" placeholder="Type your message..." />
          </Flex>
        </div>
        <div className="mt-4">
          <Text as="h3" fontSize="lg" fontWeight="medium" color="gray.900">
            Product Information
          </Text>
          <Flex
            mt={2}
            bg="white"
            border="1px"
            rounded="lg"
            p={4}
            shadow="md"
          >
            <div>
              <Text fontSize="md" fontWeight="semibold" color="gray.900">
                Exclusive T-Shirt
              </Text>
              <Text mt={2} color="gray.600">
                Our exclusive T-Shirt is made from 100% cotton and comes in a variety of colors.
              </Text>
              <Text mt={2} fontSize="lg" fontWeight="semibold" color="gray.900">
                $19.99
              </Text>
              <Button mt={4} variant="outline">
                Add to Cart
              </Button>
            </div>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
}
