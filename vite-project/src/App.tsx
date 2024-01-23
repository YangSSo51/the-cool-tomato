import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LayOut from "./components/common/Layout";
import Search from "./pages/Search";
import LiveList from "./pages/LiveList";
import ItemList from "./pages/ItemList";
import Calendar from "./pages/Calendar";
import BuyerPage from "./pages/BuyerPage";
import SellerPage from "./pages/SellerPage";
import UserinfoPage from "./pages/UserinfoPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SignPage from "./pages/SignPage";
import FindAccountPage from "./pages/FindAccountPage";
import { Theme, Fonts } from "./theme/Theme";

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
                        <Route path="buyer" element={<BuyerPage />} />
                        <Route path="seller" element={<SellerPage />} />
                        <Route path="userinfo" element={<UserinfoPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignUpPage />} />
                        <Route path="sign" element={<SignPage />} />
                        <Route
                            path="findid"
                            element={<FindAccountPage type="username" />}
                        />
                        <Route
                            path="pwdrecover"
                            element={<FindAccountPage type="password" />}
                        />
                        <Route
                            path="findaccount"
                            element={<FindAccountPage type="result" />}
                        />
                    </Route>
                </Routes>
            </ChakraProvider>
        </>
    );
}

export default App;
