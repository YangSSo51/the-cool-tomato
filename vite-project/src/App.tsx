import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/common/Navbar';
import Search from './pages/Search'
import LiveList from './pages/LiveList'
import ItemList from './pages/ItemList'
import Calendar from './pages/Calendar'
import BuyerMypage from './pages/BuyerMypage'

function App() {
  return (
    <>
    <ChakraProvider>
      <Routes>
        <Route path="/v1" element={<NavBar />}>
            <Route path='search' element={<Search />} />
            <Route path='live/list' element={<LiveList />} />
            <Route path='items/list' element={<ItemList />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='buyer/' element={<BuyerMypage />} />
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
          <Route path="/buyer" element={<Home />}  />
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
