"use client";

import { useState } from "react";
import FarahLogo from "../Navbar/FarahLogo";
import styles from "./Footer.module.css";

interface FooterProps {
  onOpenInquiry?: () => void;
}

const payments = ["Apple Pay", "G Pay", "Visa", "MC", "Amex", "Discover", "JCB", "PayPal"];

export default function Footer({ onOpenInquiry }: FooterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${name}! You're subscribed.`);
    setName(""); setEmail("");
  };

  return (
    <footer className={styles.footer} id="contact">
      {/* White wave at top */}
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>

      {/* FB Emblem */}
      <div className={styles.emblemWrap}>
        <div className={styles.emblemCircle}>
          <FarahLogo variant="symbol" height={88} goldColor="#D2AE6D" />
        </div>
      </div>

      {/* Main footer grid */}
      <div className={styles.footerBody}>
        {/* Newsletter */}
        <div className={styles.newsletterCol}>
          <h3>Get The Freshest Updates</h3>
          <form onSubmit={handleSubscribe}>
            <div className={styles.formFields}>
              <input
                className={styles.input}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className={styles.input}
                type="email"
                placeholder="Your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
          </form>
        </div>

        {/* Inquiries */}
        <div className={styles.linkCol}>
          <h4>Inquiries</h4>
          <ul>
            <li><a href="mailto:hello@farahbakes.com">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#" onClick={onOpenInquiry}>Gift Cards</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className={styles.linkCol}>
          <h4>About Us</h4>
          <ul>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#" onClick={onOpenInquiry}>Order Now</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.linkCol}>
          <h4>Social Media</h4>
          <div className={styles.socialRow}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span className={`${styles.socialIcon} ${styles.ig}`}>IG</span>
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span className={`${styles.socialIcon} ${styles.fb}`}>f</span>
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Payment icons */}
      <div className={styles.paymentRow}>
        {payments.map((p) => (
          <span key={p} className={styles.paymentBadge}>{p}</span>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <span>© 2022–24 Farah Bakes. All Rights Reserved</span>
        <div className={styles.legalLinks}>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Cookies</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
