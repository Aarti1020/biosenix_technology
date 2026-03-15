import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <motion.img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="img-fluid"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          />
        </Col>

        <Col md={6}>
          <h2 style={{color:"purple"}}>About Our Company</h2>
          <p>
           At Biosenix Technology, we empower businesses with cutting-edge IT solutions designed to accelerate growth and efficiency. Specializing in custom software development, digital transformation, and technology consulting, we craft innovative solutions tailored to your unique needs. Our team of skilled professionals leverages advanced technologies and industry best practices to deliver seamless, secure, and high-performing applications. From strategic planning to execution, we ensure that every solution we create drives measurable results, enhances user experience, and strengthens your competitive edge. Partner with us to transform your vision into reality with reliable, future-ready IT services that keep your business ahead of the curve.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;