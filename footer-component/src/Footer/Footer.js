import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>
      <section className="footer-info">
        <section className="footer-content" style={{ marginRight: '0' }}>
          <div ><span>indIChef <sup>&reg;</sup> a Hospitality Business</span></div>
          <div style={{ marginTop: '8px' }}><span><a href="/" target="_blank" rel="noopener noreferrer">Returns Policy</a></span></div>
          <div><span><a href="/" target="_blank" rel="noopener noreferrer">Food Delivery</a></span></div>
        </section>
        <section className="footer-content">
          <div ><span>shop@indichef.com</span></div>
          <div style={{ marginTop: '8px' }}><span><a href="/" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions </a></span></div>
          <div><span>Copyright <sup>&copy;</sup></span></div>
        </section>
        <section className="footer-content">
          <div ><span>+9199999-9999</span></div>
          <div style={{ marginTop: '8px' }}><span><a href="/" target="_blank" rel="noopener noreferrer">Our Story</a></span></div>
          <div><span><a href="/" target="_blank" rel="noopener noreferrer">Contact Us</a></span></div>
        </section>
      </section>
      <hr />
    </div>
  )
}
