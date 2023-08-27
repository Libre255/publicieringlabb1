import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

const NavigationBar :React.FC = () => {

  return(
    <>
      <NavBar bg="primary" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href="/">React Platform</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/time">Time</Nav.Link>
            <Nav.Link href="/Weather">Weather</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </>
  )
}

export default NavigationBar 