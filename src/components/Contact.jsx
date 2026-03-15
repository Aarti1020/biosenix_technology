import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Rajdhani:wght@400;500;600&display=swap');

  .contact-wrapper {
    min-height: 100vh;
   background: white;
    display: flex;
    align-items: center;
    padding: 60px 0;
  }

  .contact-box {
    background: white;
    border: 1px solid rgba(139, 92, 246, 0.25);
    border-radius: 14px;
    padding: 44px 40px;
    max-width: 520px;
    margin: 0 auto;
    box-shadow: 0 0 60px rgba(139, 92, 246, 0.08);
  }

  .contact-heading {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    font-size: 1.6rem;
    background: Black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 6px;
  }

  .contact-sub {
    font-family: 'Rajdhani', sans-serif;
    color: #7c6a9e;
    font-size: 0.95rem;
    margin-bottom: 32px;
  }

  .field-wrap {
    margin-bottom: 20px;
  }

  .field-label {
    display: block;
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #9380b8;
    margin-bottom: 7px;
    transition: color 0.2s;
  }

  .field-wrap:focus-within .field-label {
    color: #c084fc;
  }

  .field-input {
    width: 100%;
    background: rgba(139, 92, 246, 0.06);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    color: #ede9fe;
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.95rem;
    padding: 11px 15px;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
  }

  .field-input::placeholder { color: rgba(147,128,184,0.4); }

  .field-input:focus {
    border-color: rgba(168, 85, 247, 0.6);
    background: rgba(139, 92, 246, 0.1);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
    color: #fff;
  }

  textarea.field-input { resize: none; }

  .send-btn {
    width: 100%;
    padding: 13px;
    margin-top: 6px;
    background: #36013d;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-family: 'Orbitron', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.2s;
    box-shadow: 0 4px 18px rgba(139, 92, 246, 0.3);
  }

  .send-btn:hover {
    box-shadow: 0 6px 28px rgba(168, 85, 247, 0.5);
    transform: translateY(-1px);
  }

  .send-btn:active { transform: translateY(0); }

  .success-msg {
    text-align: center;
    padding: 30px 0 10px;
  }

  .success-circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(139,92,246,0.12);
    border: 1.5px solid rgba(168,85,247,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 1.5rem;
    color: #c084fc;
  }

  .success-title {
    font-family: 'Orbitron', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: #e0d7ff;
    margin-bottom: 8px;
  }

  .success-text {
    font-family: 'Rajdhani', sans-serif;
    color: #7c6a9e;
    font-size: 0.92rem;
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="contact-wrapper">
        <Container>
          <motion.div
            className="contact-box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {!sent ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  <h2 className="contact-heading">Contact Us</h2>
                  <p className="contact-sub">We'll get back to you within 24 hours.</p>
                </motion.div>

                <form onSubmit={submit}>
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "John Doe" },
                    { label: "Email", name: "email", type: "email", placeholder: "john@example.com" },
                  ].map((f, i) => (
                    <motion.div
                      key={f.name}
                      className="field-wrap"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.1, duration: 0.45 }}
                    >
                      <label className="field-label">{f.label}</label>
                      <input
                        className="field-input"
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={handle}
                        required
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    className="field-wrap"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, duration: 0.45 }}
                  >
                    <label className="field-label">Message</label>
                    <textarea
                      className="field-input"
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handle}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.45 }}
                  >
                    <motion.button
                      type="submit"
                      className="send-btn"
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                  </motion.div>
                </form>
              </>
            ) : (
              <motion.div
                className="success-msg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="success-circle"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
                >
                  ✓
                </motion.div>
                <p className="success-title">Message Sent!</p>
                <p className="success-text">Our team will be in touch soon.</p>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </div>
    </>
  );
}