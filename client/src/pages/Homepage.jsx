import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homepage.css';

const Homepage = () => {
const [activeFaq, setActiveFaq] = useState(null);

// Toggle FAQ accordion
const toggleFaq = (index) => {
setActiveFaq(activeFaq === index ? null : index);
};

useEffect(() => {
// --- 1. SCROLL REVEAL ANIMATION ---
const reveals = document.querySelectorAll('section, .card, .stat');
const revealOnScroll = () => {
const windowHeight = window.innerHeight;
const elementVisible = 80;
reveals.forEach((el) => {
const elementTop = el.getBoundingClientRect().top;
if (elementTop < windowHeight - elementVisible) {
el.classList.add('active'); // Adds the CSS class to make it visible
}
});
};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll(); // Trigger once on mount to show top elements



// --- 2. COUNT UP ANIMATION ---

const counters = document.querySelectorAll('.stat h3');

const animateCounters = () => {

counters.forEach(counter => {

const text = counter.innerText;

// Skip non-numeric stats or already animated ones

if (text.includes('Days') || text.includes('Fast') || text.includes('+')) return;


// Determine target number

let target = text.includes('M‑PESA') ? 1 : 24;

let count = 0;

const inc = target / 30; // Animation speed



const update = () => {

count += inc;

if (count < target) {

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

} else {

counter.innerText = target + (target === 1 ? '' : '+');

}

};

update();

});

};



// Trigger stats animation

animateCounters();



return () => window.removeEventListener('scroll', revealOnScroll);

}, []);



// Data Objects

const packages = [

{ title: "Starter", price: "KES 500", returns: "KES 1,100", features: ["7 days cycle", "Instant activation", "M‑PESA payment"] },

{ title: "Silver", price: "KES 1,000", returns: "KES 2,400", features: ["Higher priority", "7 days cycle", "M‑PESA payment"], popular: true },

{ title: "Gold", price: "KES 5,000", returns: "KES 12,000", features: ["VIP support", "Fast approval", "M‑PESA payment"] },

];



const faqs = [

{ q: "How do I invest?", a: "Choose a package, enter your phone number, and complete payment via M‑PESA Till 3675058." },

{ q: "When do I get paid?", a: "Returns are processed after the stated investment cycle, usually within 7 days." },

{ q: "Is my money safe?", a: "Payments are handled securely through M‑PESA with clear transaction records." },

];



const testimonials = [

{ text: "“I started with 500 and received my returns exactly on time. Very smooth process.”", author: "Kevin, Nairobi" },

{ text: "“The platform is clean and payments via M‑PESA are instant. I trust it.”", author: "Aisha, Mombasa" },

{ text: "“Fast support and clear packages. I upgraded after my first cycle.”", author: "Brian, Kisumu" },

];



return (

<div className="home-container">


{/* NAVBAR */}

<header className="header">

<div className="logo">Future Pay Earns</div>

<nav>

<a href="#packages">Packages</a>

<a href="#faq">FAQ</a>

<Link to="/login" className="login-link">Login</Link>

</nav>

</header>



{/* HERO */}

<section className="hero">

<div className="badge">Secure • Fast • Transparent</div>

<h1>Grow Your Money with <span>Confidence</span></h1>

<p>Start investing from as low as <b>KES 500</b> and receive higher returns within 7 days. Payments are securely processed via M‑PESA Till <b>3675058</b>.</p>

<div className="cta">

<button className="btn primary">Start Investing</button>

<button className="btn alt">View Packages</button>

</div>

</section>



{/* STATS */}

<section className="stats">

<div className="stat"><h3>7 Days</h3><p>Average Cycle</p></div>

<div className="stat"><h3>24/7</h3><p>Support Access</p></div>

<div className="stat"><h3>M‑PESA</h3><p>Secure Payments</p></div>

<div className="stat"><h3>Fast</h3><p>Processing</p></div>

</section>



{/* PACKAGES */}

<section className="packages" id="packages">

<h2>Investment Packages</h2>

<p className="sub">Choose a package that fits your goals</p>

<div className="package-grid">

{packages.map((pkg, index) => (

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

<section className="testimonials">

<h2>What Our Clients Say</h2>

<div className="test-grid">

{testimonials.map((test, index) => (

<div key={index} className="quote">

<p>{test.text}</p>

<span>— {test.author}</span>

</div>

))}

</div>

</section>



{/* FAQ */}

<section className="faq" id="faq">

<h2>Frequently Asked Questions</h2>

{faqs.map((item, index) => (

<div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>

<div className="faq-q" onClick={() => toggleFaq(index)}>

{item.q} <span>{activeFaq === index ? '−' : '+'}</span>

</div>

<div className="faq-a">{item.a}</div>

</div>

))}

</section>



{/* FOOTER */}

<footer>

© 2026 Future Pay Earns · Terms & Disclaimer Apply

</footer>

</div>

);

};



export default Homepage;