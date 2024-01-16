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
            <Link to="/search">🔍</Link>
            <Link to="/search">🔔</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/login">로그인</Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>NavBar</h1>
    </div>
  );
}