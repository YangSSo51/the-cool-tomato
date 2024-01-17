import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/common/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { theme } from "./components/util/Theme";

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/v1/login" element={<LoginPage />}></Route>
                </Routes>
            </ChakraProvider>
        </>
    );
}

export default App;
