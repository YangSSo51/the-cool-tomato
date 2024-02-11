import { useState, useRef } from "react";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import SearchContents from "../components/search/SearchContents";
import Recommends from "../components/search/Recommends";

// 검색 전/검색결과가 없을 경우 추천상품 띄우기
export default function Search() {
    const [loading] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');

    const SearchBar = () => {
        const TextInputRef = useRef<HTMLInputElement>(null);
        const submitHandler = (event: React.FormEvent) => {
            event.preventDefault();
            // 강제접근할 경우 (!)    
            const enteredText = TextInputRef.current?.value;
            setSearchKeyword(enteredText || '')
        };
        return (
            <Flex as="form" w="80vw" onSubmit={submitHandler}>
                <Input 
                    color='themeFontGreen.500'
                    placeholder='궁금한 야채 찾으러 가깅'
                    _placeholder={{ opacity: 0.4, color: 'gray' }}
                    focusBorderColor='themeRed.500' 
                    mr="2" 
                    ref={TextInputRef}
                />
                <Button colorScheme="red" color="white" type="submit">
                    <SearchIcon />
                </Button>
            </Flex>
          );
        }
    
    // const fetchData = async (query) => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get(`your_api_endpoint?q=${query}`);
    //     setSearchResults(response.data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };  

    // useEffect(() => {
    //     fetchData("initial_query");
    //   }, []);

    // const handleSearch = (query) => {
    //     fetchData(query);
    //   };

  return (
    <Flex direction="column" h="100vh" align="center">
        
        <Flex justify={"center"} className="MainText" color={"themeGreen.500"} mt="0.5rem">
            검색하기
        </Flex>
    
        <Flex justify="center" w="90vw">
            <SearchBar />
        </Flex>
      
        <Flex direction="column" align="center">
            {loading ? (
            <Text mt={10} color="gray.700">
                Loading...
            </Text>
            ) : searchKeyword.length > 0 ? (
            <Text mt={10} mb={4} fontWeight="semibold" textAlign="center" color="gray.700">
                검색결과
                {/* <SearchContents results={searchKeyword} />     */}
            </Text>
            ) : (
            <Text mt={10} mb={4} fontWeight="semibold" textAlign="center" color="gray.700">
                Recommended Products
                <Recommends />
            </Text>
            )}
        </Flex>
    </Flex>
  );
}