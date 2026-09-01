"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FarahLogo from "./FarahLogo";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#" className={styles.logo}>
          <FarahLogo variant="secondary" height={32} goldColor="#D2AE6D" />
        </a>

        <div className={styles.navLinks}>
          <a href="#menu" className={styles.navLink}>
            Artisanal Menu
          </a>
          <a href="#rituals" className={styles.navLink}>
            Morning Rituals
          </a>
          <a href="#packaging" className={styles.navLink}>
            Luxury Packaging
          </a>
          <a href="#story" className={styles.navLink}>
            Our Heritage
          </a>
          <a href="#gallery" className={styles.navLink}>
            Gallery
          </a>
          <motion.button
            className={styles.orderBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenInquiry}
          >
            Custom Order
          </motion.button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FarahLogo variant="symbol" height={90} goldColor="#D2AE6D" />
            <motion.a
              href="#menu"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Artisanal Menu
            </motion.a>
            <motion.a
              href="#rituals"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Morning Rituals
            </motion.a>
            <motion.a
              href="#packaging"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Luxury Packaging
            </motion.a>
            <motion.a
              href="#story"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Our Heritage
            </motion.a>
            <motion.a
              href="#gallery"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Gallery
            </motion.a>
            <motion.button
              className={styles.mobileOrderBtn}
              onClick={() => {
                setMobileOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Custom Order Request
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
