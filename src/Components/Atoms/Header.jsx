import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import LogoNewYork from "../../Img/Logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        bg="white"
        variant="white"
        expand="lg"
        className="justify-content-center"
      >
        <Container className="justify-content-center">
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <img
                  src={LogoNewYork}
                  alt="New York Times Logo"
                  height="70"
                  className="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link to href="/">Home</Nav.Link>
                  <Nav.Link to href="/world">World</Nav.Link>
                  <Nav.Link to href="/politics">Politics</Nav.Link>
                  <Nav.Link to href="/Business">Business</Nav.Link>
                  <Nav.Link to href="/tech">Tech</Nav.Link>
                  <Nav.Link to href="/science">Science</Nav.Link>
                  <Nav.Link to href="/health">Health</Nav.Link>
                  <Nav.Link to href="/Sports">Sports</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default Header;
