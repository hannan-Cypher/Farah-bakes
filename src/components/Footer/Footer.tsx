"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Footer.module.css";

const payments = ["Apple Pay", "GPay", "Visa", "MC", "Amex", "Discover", "PayPal"];

interface FooterProps {
  onOpenInquiry?: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className={styles.footer} ref={ref}>
      {/* Curved Top Logo Badge */}
      <div className={styles.curvedTop}>
        <motion.div
          className={styles.logoCenter}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.logoBadge}>FB</div>
        </motion.div>
      </div>

      <div className={styles.darkSection}>
        <div className={styles.content}>
          {/* Newsletter */}
          <motion.div
            className={styles.newsletter}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Subscribe to Farah Bakes VIP</h3>
            <p className={styles.newsletterSub}>Be the first to hear about seasonal cake drops &amp; exclusive tasting popups.</p>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <motion.button
              className={styles.subscribeBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Farah Bakes</h4>
            <ul>
              <li><a href="#menu">Featured Menu</a></li>
              <li><a href="#packaging">Luxury Packaging</a></li>
              <li><a href="#story">Our Heritage</a></li>
              <li><button onClick={onOpenInquiry} className={styles.linkBtn}>Custom Order Request</button></li>
            </ul>
          </motion.div>

          {/* Bakery Hours */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Baking Hours</h4>
            <ul className={styles.hoursList}>
              <li><span>Tue - Fri:</span> 7:30 AM - 6:00 PM</li>
              <li><span>Sat - Sun:</span> 8:00 AM - 5:00 PM</li>
              <li><span>Monday:</span> Closed for Baking</li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Social &amp; Inquiries</h4>
            <ul>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <span className={`${styles.socialIcon} ${styles.iconIg}`}>IG</span>
                  @FarahBakes
                </a>
              </li>
              <li>
                <a href="mailto:hello@farahbakes.com" className={styles.socialLink}>
                  <span className={`${styles.socialIcon} ${styles.iconFb}`}>@</span>
                  hello@farahbakes.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Icons */}
        <motion.div
          className={styles.payments}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {payments.map((p) => (
            <div key={p} className={styles.paymentIcon}>
              {p}
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>© 2024 Farah Bakes LLC. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

