import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/common/Navbar';
import BuyerPage from './pages/BuyerPage';
import theme from './theme/index'
import { Fonts } from './theme/fonts';

function App() {
    return (
        <>
        <ChakraProvider theme={theme}>
            <Fonts />
                <Routes>
                    <Route path="buyer" element={<BuyerPage />}  />
                    <Route path="/v1/*" element={<NavBar />}>
                    {/* <Route path="" element={<Home />}  /> */}
                    {/* <Route path="/login" element={<Home />}  /> */}
                    {/* <Route path="/findid" element={<Home />}  />
                    <Route path="/" element={<Home />}  />
                    {/* <Route path="/login" element={<Home />}  />
                    <Route path="/findid" element={<Home />}  />
                    <Route path="/pwdrecover" element={<Home />}  />
                    <Route path="/logout" element={<Home />}  />
                    <Route path="/signup" element={<Home />}  />
                    <Route path="/sign" element={<Home />}  />
                    <Route path="/user" element={<Home />}  />
                    
                    <Route path="/seller" element={<Home />}  />
                    <Route path="/data" element={<Home />}  />
                    <Route path="/live" element={<Home />}  />
                    <Route path="/broadcast" element={<Home />}  />
                    <Route path="/items" element={<Home />}  />
                    <Route path="/search" element={<Home />}  />
                    <Route path="/board" element={<Home />}  />
                    <Route path="/admin" element={<Home />}  /> */}
                    </Route>
                </Routes>
        </ChakraProvider>
        </>
    )
}

export default App
