import React from 'react'
import { Container, Row , Col , Button , Card , Image } from 'react-bootstrap';


const About = () => {
  return (
    <>
      <Container fluid className="about-container">
      <Row className="mb-5">
        <Col md={6} className="text-center">
          <Image 
            src="/images/image2.jpg" 
            alt="Library" 
            fluid 
            rounded 
            className="about-image" 
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2>About BookNest Library</h2>
            <p>
              BookNest Library is a place for book lovers, where knowledge, imagination, and creativity come together. We offer a wide collection of books, including the latest bestsellers, educational resources, and timeless classics.
            </p>
            <Button variant="primary" href="#contact">Contact Us</Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="text-center">Our Mission</h3>
          <p className="text-center">
            At BookNest, our mission is to foster a love for reading and to provide a welcoming environment for people of all ages to explore the world through books. We aim to promote lifelong learning, personal growth, and community connection.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/images/image3.jpg" />
            <Card.Body>
              <Card.Title>Vast Collection</Card.Title>
              <Card.Text>
                Explore our vast collection of books across various genres, including fiction, non-fiction, science, history, and more!
              </Card.Text>
              <Button variant="secondary">Explore Books</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/images/hero.jpg" />
            <Card.Body>
              <Card.Title>Community Events</Card.Title>
              <Card.Text>
                Join our community events, such as book clubs, readings, and workshops to share ideas and discuss your favorite books.
              </Card.Text>
              <Button variant="secondary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/images/image1.jpg" />
            <Card.Body>
              <Card.Title>Quiet Reading Spaces</Card.Title>
              <Card.Text>
                We offer peaceful and quiet spaces for reading and studying, allowing you to focus and enjoy your books without distractions.
              </Card.Text>
              <Button variant="secondary">Visit Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About
