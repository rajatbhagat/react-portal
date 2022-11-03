import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to={"/"}>
          {/* <Navbar.Brand> */}
            <img className='image-cropper' src="Logo.svg" alt="React Logo" />
          {/* </Navbar.Brand> */}
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
        <Offcanvas show={show} onHide={handleClose} responsive="lg" backdrop="true" placement='top'>
          <Offcanvas.Header closeButton>
          <LinkContainer to={"/"}>
            <Offcanvas.Title>Mythics Cloud Portal</Offcanvas.Title>
            </LinkContainer>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link className='justify-content-end'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;