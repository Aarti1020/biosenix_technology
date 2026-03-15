import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

const carouselImages = [
  {
    src: "https://img.freepik.com/free-photo/portrait-business-woman-working-laptop_1303-9727.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Technology circuits",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Developer coding",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    alt: "Team collaboration",
  },
];

function HeroSection() {
  return (
    <div style={{  backgroundImage: "url('https://t3.ftcdn.net/jpg/06/77/22/90/360_F_677229066_Bb48grnbq8Jxzbxx6upFL7CfjZcm57sX.jpg')", 
  color: "white", padding: "100px 0" }}>
      <Container>
        <Row className="align-items-center">

          {/* Left Content */}
          <Col md={6}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
                Transform Your Business With Technology
              </h1>

              <p className="mt-3">
                We provide modern IT solutions including Web Development,
                Cloud Services, and Mobile Applications.
              </p>

              <Button style={{backgroundColor:"#36013d"}} size="lg" className="mt-3">
                Get Started
              </Button>
            </motion.div>
          </Col>

          {/* Right Carousel */}
          <Col md={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Carousel
                interval={3000}
                fade
                indicators={true}
                controls={true}
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid d-block w-100 rounded"
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;