import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "About",
    to: "/about",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    label: "Services",
    to: "/services",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    dropdown: [
      { label: "Cloud Solutions", icon: "☁️" },
      { label: "Cybersecurity", icon: "🛡️" },
      { label: "AI & Machine Learning", icon: "🤖" },
      { label: "Web Development", icon: "💻" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

  :root {
    --nav-bg: rgba(8, 4, 20, 0.96);
    --nav-border: rgba(139, 92, 246, 0.18);
    --accent-violet: #8b5cf6;
    --accent-purple: #a855f7;
    --accent-indigo: #6366f1;
    --accent-magenta: #c026d3;
    --glow-violet: 0 0 22px rgba(139, 92, 246, 0.45);
    --glow-purple: 0 0 22px rgba(168, 85, 247, 0.45);
    --text-primary: #ede9fe;
    --text-muted: #9380b8;
  }

  .biosenix-navbar {
    background: var(--nav-bg) !important;
    border-bottom: 1px solid var(--nav-border);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 0 !important;
    font-family: 'Rajdhani', sans-serif;
    transition: all 0.4s ease;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(139, 92, 246, 0.12);
  }

  .biosenix-navbar.scrolled {
    background: rgba(5, 2, 14, 0.99) !important;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.85), 0 1px 0 rgba(139, 92, 246, 0.25);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;
  }

  /* Subtle grid scan lines */
  .biosenix-navbar::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(139, 92, 246, 0.012) 2px,
      rgba(139, 92, 246, 0.012) 4px
    );
    pointer-events: none;
    z-index: 0;
  }

  /* === BRAND === */
  .brand-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    position: relative;
    z-index: 1;
  }

  .brand-logo {
    width: 42px;
    height: 42px;
    position: relative;
    flex-shrink: 0;
  }

  .logo-hex {
    width: 100%;
    height: 100%;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .brand-name {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: 0.08em;
    color: #fff;
    text-transform: uppercase;
    background: linear-gradient(90deg, #e0d7ff 0%, #a855f7 50%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .brand-tagline {
    font-size: 0.6rem;
    letter-spacing: 0.25em;
    color: var(--text-muted);
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 2px;
  }

  /* === STATUS BADGE === */
  .status-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.25);
    border-radius: 20px;
    padding: 3px 10px 3px 7px;
    margin-left: 14px;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #c084fc;
    box-shadow: 0 0 7px #c084fc;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; box-shadow: 0 0 7px #c084fc; }
    50% { opacity: 0.45; box-shadow: 0 0 2px #c084fc; }
  }

  .status-text {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: #c084fc;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* === NAV LINKS === */
  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    position: relative;
    z-index: 1;
  }

  .nav-item-wrapper {
    position: relative;
  }

  .nav-link-custom {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 16px;
    color: var(--text-muted) !important;
    text-decoration: none;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 6px;
    position: relative;
    transition: color 0.25s ease;
    white-space: nowrap;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-link-custom svg {
    transition: all 0.25s ease;
    opacity: 0.5;
  }

  .nav-link-custom:hover,
  .nav-link-custom.active {
    color: var(--accent-violet) !important;
  }

  .nav-link-custom:hover svg,
  .nav-link-custom.active svg {
    opacity: 1;
    filter: drop-shadow(0 0 4px var(--accent-violet));
  }

  .nav-link-underline {
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-violet), var(--accent-indigo));
    border-radius: 2px;
    box-shadow: var(--glow-violet);
  }

  /* Dropdown arrow */
  .dropdown-arrow {
    width: 10px;
    height: 10px;
    margin-left: 2px;
    opacity: 0.6;
    transition: transform 0.25s ease;
    flex-shrink: 0;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }

  /* === DROPDOWN === */
  .services-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    min-width: 230px;
    background: rgba(10, 5, 25, 0.98);
    border: 1px solid rgba(139, 92, 246, 0.25);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(139, 92, 246, 0.06) inset;
    z-index: 9999;
  }

  .dropdown-header {
    padding: 10px 16px 6px;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: var(--accent-violet);
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: 1px solid rgba(139, 92, 246, 0.12);
    font-family: 'Orbitron', monospace;
  }

  .dropdown-item-custom {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 16px;
    color: var(--text-muted);
    font-family: 'Rajdhani', sans-serif;
    font-weight: 500;
    font-size: 0.88rem;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.03);
  }

  .dropdown-item-custom:last-child {
    border-bottom: none;
  }

  .dropdown-item-custom:hover {
    background: rgba(139, 92, 246, 0.08);
    color: #ede9fe;
    padding-left: 22px;
  }

  .dropdown-item-custom .item-icon {
    font-size: 1rem;
    width: 22px;
    text-align: center;
  }

  .dropdown-item-custom .item-arrow {
    margin-left: auto;
    opacity: 0;
    transform: translateX(-4px);
    transition: all 0.2s ease;
    color: var(--accent-violet);
    font-size: 0.7rem;
  }

  .dropdown-item-custom:hover .item-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* === CTA BUTTON === */
  .cta-button {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
    padding: 9px 20px;
    background: linear-gradient(135deg, #8823ad, #a3238e);
    border: none;
    border-radius: 6px;
    color: #fff !important;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.3s ease;
    box-shadow: 0 4px 18px rgba(139, 92, 246, 0.38);
    flex-shrink: 0;
  }

  .cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a855f7, #2529ff);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cta-button:hover::before {
    opacity: 1;
  }

  .cta-button:hover {
    box-shadow: 0 6px 28px rgba(168, 85, 247, 0.55);
    transform: translateY(-1px);
    color: #fff !important;
  }

  .cta-button span {
    position: relative;
    z-index: 1;
  }

  .cta-icon {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .cta-button:hover .cta-icon {
    transform: translateX(3px);
  }

  /* === MOBILE TOGGLE === */
  .toggle-btn {
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3) !important;
    border-radius: 6px;
    padding: 6px 10px;
    transition: all 0.3s ease;
  }

  .toggle-btn:hover {
    background: rgba(139, 92, 246, 0.18);
  }

  .toggle-btn .navbar-toggler-icon {
    filter: invert(1) sepia(1) saturate(3) hue-rotate(240deg);
  }

  /* === MOBILE COLLAPSE === */
  .mobile-menu {
    background: rgba(6, 3, 16, 0.99);
    border-top: 1px solid rgba(139, 92, 246, 0.12);
    padding: 12px 0 16px;
  }

  .mobile-nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    color: var(--text-muted) !important;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border-left: 2px solid transparent;
    transition: all 0.2s ease;
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    color: var(--accent-violet) !important;
    border-left-color: var(--accent-violet);
    background: rgba(139, 92, 246, 0.05);
    padding-left: 24px;
  }

  .mobile-divider {
    height: 1px;
    background: rgba(139, 92, 246, 0.1);
    margin: 8px 20px;
  }

  .mobile-cta {
    margin: 12px 20px 0;
    display: block;
    text-align: center;
  }

  /* === SCAN LINE ANIMATION === */
  @keyframes scanline {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  .scan-effect::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.35), transparent);
    animation: scanline 5s linear infinite;
    pointer-events: none;
  }

  /* === CORNER ACCENTS === */
  .corner-accent {
    position: absolute;
    width: 8px;
    height: 8px;
    border-color: var(--accent-violet);
    border-style: solid;
    opacity: 0.45;
  }

  .corner-tl { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
  .corner-tr { top: 8px; right: 8px; border-width: 1px 1px 0 0; }
  .corner-bl { bottom: 8px; left: 8px; border-width: 0 0 1px 1px; }
  .corner-br { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }
`;

export default function NavigationBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{styles}</style>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar
          expand="lg"
          sticky="top"
          expanded={expanded}
          onToggle={setExpanded}
          className={`biosenix-navbar scan-effect ${scrolled ? "scrolled" : ""}`}
        >
          <Container fluid="xl">
            <div className="nav-inner">
              {/* ── Brand ── */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/" className="brand-wrapper me-2">
                  <div className="brand-logo">
                    <svg className="logo-hex" viewBox="0 0 42 42" fill="none">
                      {/* Hexagon outline */}
                      <polygon
                        points="21,3 38,12 38,30 21,39 4,30 4,12"
                        stroke="url(#hexGrad)"
                        strokeWidth="1.5"
                        fill="rgba(139,92,246,0.07)"
                      />
                      {/* Inner circuit paths */}
                      <line x1="21" y1="3" x2="21" y2="12" stroke="#a855f7" strokeWidth="1" opacity="0.55" />
                      <line x1="21" y1="30" x2="21" y2="39" stroke="#a855f7" strokeWidth="1" opacity="0.55" />
                      <line x1="4" y1="12" x2="12" y2="16" stroke="#6366f1" strokeWidth="1" opacity="0.55" />
                      <line x1="38" y1="12" x2="30" y2="16" stroke="#6366f1" strokeWidth="1" opacity="0.55" />
                      {/* Core B letter */}
                      <text x="12" y="27" fontFamily="Orbitron" fontWeight="900" fontSize="16" fill="url(#textGrad)">B</text>
                      {/* Dot accents */}
                      <circle cx="21" cy="3" r="1.5" fill="#a855f7" />
                      <circle cx="38" cy="12" r="1.5" fill="#6366f1" />
                      <circle cx="38" cy="30" r="1.5" fill="#6366f1" />
                      <circle cx="21" cy="39" r="1.5" fill="#a855f7" />
                      <circle cx="4" cy="30" r="1.5" fill="#6366f1" />
                      <circle cx="4" cy="12" r="1.5" fill="#6366f1" />
                      <defs>
                        <linearGradient id="hexGrad" x1="0" y1="0" x2="42" y2="42">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ede9fe" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="brand-text">
                    <span className="brand-name">Biosenix</span>
                    <span className="brand-tagline">Technology</span>
                  </div>
                </Link>
              </motion.div>

              {/* Status badge */}
              <div className="status-badge d-none d-md-flex">
                <div className="status-dot" />
                <span className="status-text">Systems Online</span>
              </div>

              {/* ── Desktop Nav ── */}
              <div className="nav-links d-none d-lg-flex">
                {navLinks.map((link, i) => (
                  <div
                    key={link.label}
                    className="nav-item-wrapper"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    >
                      {link.dropdown ? (
                        <button
                          className={`nav-link-custom ${isActive(link.to) ? "active" : ""}`}
                        >
                          {link.icon}
                          {link.label}
                          <svg
                            className={`dropdown-arrow ${activeDropdown === link.label ? "open" : ""}`}
                            viewBox="0 0 10 10"
                            fill="currentColor"
                          >
                            <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          </svg>
                          {isActive(link.to) && (
                            <motion.div
                              className="nav-link-underline"
                              layoutId="underline"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </button>
                      ) : (
                        <Link
                          to={link.to}
                          className={`nav-link-custom ${isActive(link.to) ? "active" : ""}`}
                        >
                          {link.icon}
                          {link.label}
                          {isActive(link.to) && (
                            <motion.div
                              className="nav-link-underline"
                              layoutId="underline"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      )}
                    </motion.div>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.label && (
                        <motion.div
                          className="services-dropdown"
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                          <div className="dropdown-header">Our Services</div>
                          {link.dropdown.map((item, j) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05 }}
                            >
                              <Link to="/services" className="dropdown-item-custom">
                                <span className="item-icon">{item.icon}</span>
                                <span>{item.label}</span>
                                <span className="item-arrow">›</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                >
                  <Link to="/contact" className="cta-button">
                    <span>Get Started</span>
                    <svg className="cta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </motion.div>
              </div>

              {/* ── Mobile Toggle ── */}
              <Navbar.Toggle className="toggle-btn ms-auto d-lg-none" aria-controls="mobile-nav" />
            </div>

            {/* ── Mobile Menu ── */}
            <Navbar.Collapse id="mobile-nav" className="d-lg-none">
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    className="mobile-menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <Link
                          to={link.to}
                          className={`mobile-nav-link ${isActive(link.to) ? "active" : ""}`}
                          onClick={() => setExpanded(false)}
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <div className="mobile-divider" />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mobile-cta"
                    >
                      <Link to="/contact" className="cta-button" onClick={() => setExpanded(false)}>
                        <span>Get Started</span>
                        <svg className="cta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
}
