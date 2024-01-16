import { Link } from "react-router-dom";
import { Container,Nav,Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/v1">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/live/list">라이브</Link>
            <Link to="/items/list">상품목록</Link>
            <Link to="/calendar">라이브 예고</Link>
            <Link to="/live/form">라이브 등록</Link>
            <Link to="/items/form">상품 등록</Link>
            <Link to="/search">🔍</Link>
            <Link to="/search">🔔</Link>
            <Link to="/seller/{userid}">마이페이지</Link>
            <Link to="/logout">로그아웃</Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>NavBar</h1>
    </div>
  );
}