import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>BookNest Library</h5>
            <p>
              Your gateway to endless knowledge and stories. We offer a wide range of books, events, and resources for everyone.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="home" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="about" className="text-white">About</Nav.Link>
              <Nav.Link as={Link} to="insert" className="text-white">Insert</Nav.Link>
              <Nav.Link as={Link} to="display" className="text-white">Display</Nav.Link>
              <Nav.Link as={Link} to="search" className="text-white">Search</Nav.Link>
              <Nav.Link as={Link} to="update" className="text-white">Update</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Address:</strong> 123 Library Street, Bhopal, MP, IND 12345
            </p>
            <p>
              <strong>Email:</strong> contact@booknest.com
            </p>
            <p>
              <strong>Phone:</strong> +91 99 92 32 33 92
            </p>
            <div className="social-links">
              <Button variant="outline-light" className="me-2">Facebook</Button>
              <Button variant="outline-light" className="me-2">Twitter</Button>
              <Button variant="outline-light">Instagram</Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">© 2025 BookNest Library. All rights reserved. || By Sudhansh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
