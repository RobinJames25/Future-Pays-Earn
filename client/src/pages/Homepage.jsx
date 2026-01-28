import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homepage.css'; 

// --- STATIC DATA (Moved outside component for performance) ---
const PACKAGES = [
  { title: "Starter", price: "KES 500", returns: "KES 1,100", features: ["7 days cycle", "Instant activation", "M‑PESA payment"] },
  { title: "Silver", price: "KES 1,000", returns: "KES 2,400", features: ["Higher priority", "7 days cycle", "M‑PESA payment"], popular: true },
  { title: "Gold", price: "KES 5,000", returns: "KES 12,000", features: ["VIP support", "Fast approval", "M‑PESA payment"] },
];

const FAQS = [
  { q: "How do I invest?", a: "Choose a package, enter your phone number, and complete payment via M‑PESA Till 3675058." },
  { q: "When do I get paid?", a: "Returns are processed after the stated investment cycle, usually within 7 days." },
  { q: "Is my money safe?", a: "Payments are handled securely through M‑PESA with clear transaction records." },
];

const TESTIMONIALS = [
  { text: "“I started with 500 and received my returns exactly on time. Very smooth process.”", author: "Kevin, Nairobi" },
  { text: "“The platform is clean and payments via M‑PESA are instant. I trust it.”", author: "Aisha, Mombasa" },
  { text: "“Fast support and clear packages. I upgraded after my first cycle.”", author: "Brian, Kisumu" },
];

const Homepage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Refs for animation targets
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // Helper to collect refs
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Smooth Scroll Handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // --- 1. INTERSECTION OBSERVER (Better than window.scroll) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of element is visible
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      
      {/* NAVBAR */}
      <header className="header">
        <div className="logo">Future Pay Earns</div>
        <nav>
          <button onClick={() => scrollToSection('packages')} className="nav-btn">Packages</button>
          <button onClick={() => scrollToSection('faq')} className="nav-btn">FAQ</button>
          <Link to="/login" className="login-link">Login</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" ref={addToRefs}>
        <div className="badge">Secure • Fast • Transparent</div>
        <h1>Grow Your Money with <span>Confidence</span></h1>
        <p>Start investing from as low as <b>KES 500</b> and receive higher returns within 7 days. Payments are securely processed via M‑PESA Till <b>3675058</b>.</p>
        <div className="cta">
          <button className="btn primary" onClick={() => scrollToSection('packages')}>Start Investing</button>
          <button className="btn alt" onClick={() => scrollToSection('packages')}>View Packages</button>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" ref={addToRefs}>
        <div className="stat"><h3>7 Days</h3><p>Average Cycle</p></div>
        <div className="stat"><h3>24/7</h3><p>Support Access</p></div>
        <div className="stat"><h3>M‑PESA</h3><p>Secure Payments</p></div>
        <div className="stat"><h3>Fast</h3><p>Processing</p></div>
      </section>

      {/* PACKAGES */}
      <section className="packages" id="packages" ref={addToRefs}>
        <h2>Investment Packages</h2>
        <p className="sub">Choose a package that fits your goals</p>
        <div className="package-grid">
          {PACKAGES.map((pkg, index) => (
            <div key={index} className={`card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="tag">POPULAR</div>}
              <h3>{pkg.title}</h3>
              <div className="price">{pkg.price}</div>
              <div className="return">Get {pkg.returns}</div>
              <ul className="features">
                {pkg.features.map((feat, i) => <li key={i}>{feat}</li>)}
              </ul>
              <button className="btn-invest">Invest Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" ref={addToRefs}>
        <h2>What Our Clients Say</h2>
        <div className="test-grid">
          {TESTIMONIALS.map((test, index) => (
            <div key={index} className="quote">
              <p>{test.text}</p>
              <span>— {test.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq" ref={addToRefs}>
        <h2>Frequently Asked Questions</h2>
        {FAQS.map((item, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <button className="faq-q" onClick={() => toggleFaq(index)}>
                {item.q} <span>{activeFaq === index ? '−' : '+'}</span>
              </button>
              <div className="faq-a" style={{ maxHeight: activeFaq === index ? '200px' : '0' }}>
                <p>{item.a}</p>
              </div>
            </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Future Pay Earns · <Link to="/terms">Terms & Disclaimer</Link> Apply</p>
      </footer>
    </div>
  );
};

export default Homepage;