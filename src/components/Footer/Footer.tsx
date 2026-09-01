"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Footer.module.css";

const payments = ["Apple Pay", "GPay", "Visa", "MC", "Amex", "Disc", "JCB", "Shop", "PayPal"];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className={styles.footer} ref={ref}>
      {/* Curved Dark Top */}
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
            <h3>Get The Freshest Updates</h3>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="Your E-Mail" />
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

          {/* Inquiries */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Inquiries</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Order Now</a></li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Social Media</h4>
            <ul>
              <li>
                <a href="#" className={styles.socialLink}>
                  <span className={`${styles.socialIcon} ${styles.iconIg}`}>IG</span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink}>
                  <span className={`${styles.socialIcon} ${styles.iconFb}`}>FB</span>
                  Facebook
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
          <p>© 2022-24 Michette Llc All Rights Reserved</p>
          <div className={styles.legalLinks}>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookies</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
