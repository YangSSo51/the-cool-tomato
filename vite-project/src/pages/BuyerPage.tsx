import { Flex, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Profile from '../components/mypage/profilepic';

// import { useState, useEffect } from "react";

export default function BuyerPage() {

    let [tab, setTab] = useState(0)

    return (
        <>
        <Box width="100%" bgColor="#126F54" display="flex" alignItems="center" justifyContent="center" />
            <Box>구매자마이페이지</Box>
            <Flex>
                <Box>Left Panel
                    <Profile></Profile>
                    <Box variant="tabs"  defaultActiveKey="link0">
                        <li onClick={()=>{setTab(0)}}>최근 본 상품</li>
                        <li onClick={()=>{setTab(1)}}>팔로잉 목록</li>
                        <li onClick={()=>{setTab(2)}}>작성 가능한 리뷰</li>
                        <li onClick={()=>{setTab(3)}}>나의 할인 쿠폰</li>
                        <li onClick={()=>{setTab(4)}}>판매자 신청</li>
                    </Box>
                </Box>
                <Box>Right Panel</Box>
            </Flex>
        </>
    )
}

// <Nav variant="tabs"  defaultActiveKey="link0">
// <Nav.Item>
//   <Nav.Link eventKey="link0">버튼0</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
// </Nav.Item>
// </Nav>
// <TabContent products={props.products} tab={tab} />
// </div> 
// )
// }

function TabContent({tab}) {

    let [fade, setFade] = useState('');

    useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{
        setFade('')
        }
        }, [tab])

    return ( 
    <div className={"start " + fade}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
)}