import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container  id="navv">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='navcol'>
            <Nav.Link as={Link} to="home">Home |</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert Employee |</Nav.Link>
            <Nav.Link as={Link} to="display">Display |</Nav.Link>
            <Nav.Link as={Link} to="salary">Salary Summery |</Nav.Link>
            <Nav.Link as={Link} to="search">Search Employee |</Nav.Link>
            <Nav.Link as={Link} to="update">Update </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
