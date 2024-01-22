import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme, Fonts } from "./theme/Theme";
import LayOut from "./components/common/Layout";
import Search from "./pages/Search";
import LiveList from "./pages/LiveList";
import ItemList from "./pages/ItemList";
import Calendar from "./pages/Calendar";
import BuyerPage from "./pages/BuyerPage";
import SellerPage from "./pages/SellerPage";
import UserinfoPage from "./pages/UserinfoPage";
import LoginPage from "./pages/LoginPage";
import ItemDetail from "./pages/ItemDetail";
import Broadcast from "./pages/BroadcastPage";
import Live from "./pages/LivePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <>
            <ChakraProvider theme={Theme}>
                <Fonts />
                <Routes>
                    <Route path="/v1" element={<LayOut />}>
                        <Route path="search" element={<Search />} />
                        <Route path="live/list" element={<LiveList />} />
                        <Route path="items/list" element={<ItemList />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="buyer/:userId" element={<BuyerPage />} />
                        <Route path="seller" element={<SellerPage />} />
                        <Route path="userinfo" element={<UserinfoPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="items/list/detail/:id" element={<ItemDetail/>} />
                        <Route path="signup" element={<SignUpPage />} />
                    </Route>
                    <Route path="broadcast" element={<Broadcast />} />
                    <Route path="live" element={<Live />} />
                </Routes>
            </ChakraProvider>
        </>
    );
}

export default App;
