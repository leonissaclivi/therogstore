import React, { useState } from 'react'
import Header from './components/Header'
import Container from 'react-bootstrap/Container'
import Cards from './components/Cards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from './components/imageCarousel';



function App() {

  const products = [
    {
      id: "g16",
      title: "Zephyrus G16",
      description: "Unleash your gaming potential with the AMD Ryzen AI 9 HX processor, 16-inch 2.5K display, NVIDIA GeForce RTX 4060, and lightning-fast 1TB SSD—power and performance at your fingertips!",
      imgSrc: "https://i.ibb.co/0XrqfFK/g161x1.jpg",
      alt: "g16",
      modalTarget: "#modalg16",
    },
    {
      id: "x13",
      title: "Flow X13",
      description: "Revamp your gaming experience with this renewed powerhouse featuring an AMD Ryzen 9 5980HS, 32GB RAM, and a 1TB SSD—plus one month of Game Pass to dive into over 100 high-quality PC games from day one!",
      imgSrc: "https://i.ibb.co/82M6Zch/flowx13.jpg",
      alt: "flow x13",
      modalTarget: "#modalx13",
    },
    {
      id: "g15",
      title: "Strix G15",
      description: "Dominate the game with this upgraded laptop featuring a 300Hz 15.6” Full HD display, AMD Ryzen 9-5900HX, NVIDIA GeForce RTX 3070, and 32GB of RAM—complete with ROG Aura Sync RGB lighting and a one-year warranty on upgrades!",
      imgSrc: "https://i.ibb.co/pQ1NhDX/strix-g15.jpg",
      alt: "strix g15",
      modalTarget: "#modalg15",
    },
    {
      id: "scar16",
      title: "Strix Scar 16",
      description: "Elevate your gaming to new heights with the Intel Core i9-14900HX, 32GB DDR5 RAM, and a stunning 16-inch QHD+ 240Hz Mini-LED display, powered by the NVIDIA GeForce RTX 4090—plus one month of Game Pass for endless gaming adventures!",
      imgSrc: "https://i.ibb.co/7td8F3X/scar16.jpg",
      alt: "strix scar 16",
      modalTarget: "#modalscar16",
    }
  ];

  return (
    <div>
      <Header />
      <Container-fluid>
      <ImageCarousel/>
      </Container-fluid>
      <Container className='py-4'>
        <Row className='g-2'>
          {products.map((pro,index) => {
            return(
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Cards {...pro} />
            </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default App