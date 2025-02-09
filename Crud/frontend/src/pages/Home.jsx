import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src='/images/hero.jpg' alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3 style={{fontSize:"90px" , color:"bisque", textShadow:"0 0 5px black, 0 0 10px brown"}}> Read Books</h3>
            <p style={{fontSize:"40px" , color:"bisque", textShadow:"0 0 5px black, 0 0 10px brown"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/images/hero2.png' alt="Second slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3 style={{fontSize:"90px" , color:"bisque", textShadow:"0 0 5px black, 0 0 10px brown"}}>Gain Knowledge</h3>
            <p style={{fontSize:"40px" , color:"bisque", textShadow:"0 0 5px black, 0 0 10px brown"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/images/hero3.jpg' alt="Third slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3 style={{fontSize:"90px" , color:"bisque", textShadow:"0 0 5px black, 0 0 10px brown"}}>Spread Positivity</h3>
            <p style={{fontSize:"40px" , color:"bisque", textShadow:"0 0 5px black, 0 0 10px brown"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
