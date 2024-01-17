import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/common/Navbar';
import BuyerPage from './pages/BuyerPage';
import theme from './theme/index'
import Fonts from './theme/fonts';

function App() {
    return (
        <>
        <ChakraProvider theme={theme}>
            <Fonts />
                <Routes>
                    <Route path="/buyer" element={<BuyerPage />}  />                    
                    {/* <Route path="buyer/:userId" element={<BuyerPage />}  /> */}
                    <Route path="/v1/*" element={<NavBar />} />
                    
                </Routes>
        </ChakraProvider>
        </>
    )
}

export default App
