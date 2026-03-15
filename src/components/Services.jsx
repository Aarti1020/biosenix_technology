import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";

function Services() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4"style={{color:"purple"}}>Our Services</h2>

  <Row className="g-4">
  {["Web Development", "Mobile Apps", "Cloud Solutions"].map((service, i) => (
    <Col md={4} key={i}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          scale: 1.04,
          boxShadow: "0 0 30px rgba(139, 92, 246, 0.45)",
        }}
        whileTap={{ scale: 0.98 }}
        style={{ borderRadius: "10px", cursor: "pointer" }}
      >
        <Card
          className="p-3 h-100"
          style={{
            background: "rgba(8, 4, 20, 0.92)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            borderRadius: "10px",
            color: "#ede9fe",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.08) inset",
            backdropFilter: "blur(16px)",
            transition: "border-color 0.3s ease",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "2px",
              background: "linear-gradient(90deg, #6366f1, #a855f7)",
              transformOrigin: "left",
              borderRadius: "2px 2px 0 0",
            }}
          />

          <Card.Body className="pt-4">

            {/* Animated icon circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.15, type: "spring", stiffness: 200 }}
              style={{
                width: "44px", height: "44px",
                borderRadius: "10px",
                background: "rgba(139, 92, 246, 0.12)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
                fontSize: "1.3rem",
              }}
            >
              {["💻", "📱", "☁️"][i]}
            </motion.div>

            <Card.Title
              style={{
                fontFamily: "'Orbitron', monospace",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.06em",
                background: "linear-gradient(90deg, #e0d7ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "12px",
              }}
            >
              {service}
            </Card.Title>

            <Card.Text
              style={{
                color: "#9380b8",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              We provide professional {service} services tailored to your needs.
            </Card.Text>

            {/* Bottom learn more */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              style={{
                marginTop: "16px",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#a855f7",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              Learn More
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                ›
              </motion.span>
            </motion.div>

          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  ))}
</Row>
    </Container>
  );
}

export default Services;