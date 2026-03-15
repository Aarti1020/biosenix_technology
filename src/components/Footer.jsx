import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="text-light pt-5 pb-3 mt-2"
      // style={{backgroundColor:"#36013d"}}
      style={{  backgroundImage: "url('https://t3.ftcdn.net/jpg/06/77/22/90/360_F_677229066_Bb48grnbq8Jxzbxx6upFL7CfjZcm57sX.jpg')"}}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row>

          {/* Company Info */}
          <Col md={4}>
            <h5>Biosenix Technology</h5>
            <p>
              We provide innovative IT solutions including web development,
              mobile applications, and cloud services for businesses worldwide.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5>Follow Us</h5>

            <div style={{ fontSize: "22px" }}>
              <FaFacebook style={{ marginRight: "15px" }} />
              <FaTwitter style={{ marginRight: "15px" }} />
              <FaLinkedin style={{ marginRight: "15px" }} />
              <FaInstagram />
            </div>
          </Col>

        </Row>

        <hr />

        <div className="text-center">
          <p>© 2026 Biosenix Technology. All rights reserved.</p>
        </div>

      </Container>
    </motion.footer>
  );
}

export default Footer;