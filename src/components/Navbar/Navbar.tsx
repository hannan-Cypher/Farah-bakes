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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#" className={styles.logo}>
          <div className={styles.logoCircle}>
            <FarahLogo variant="symbol" height={40} goldColor="#D2AE6D" />
          </div>
        </a>

        <div className={styles.navRight}>
          <div className={styles.navLinks}>
            <a href="#menu" className={styles.navLink}>Menu</a>
            <a href="#story" className={styles.navLink}>Our Story</a>
          </div>
          <motion.button
            className={styles.orderBtn}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenInquiry}
          >
            Order Now
          </motion.button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FarahLogo variant="symbol" height={80} goldColor="#D2AE6D" />
            {["#menu:Menu", "#story:Our Story"].map((item, i) => {
              const [href, label] = item.split(":");
              return (
                <motion.a
                  key={href}
                  href={href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  {label}
                </motion.a>
              );
            })}
            <motion.button
              className={styles.mobileOrderBtn}
              onClick={() => { setMobileOpen(false); onOpenInquiry?.(); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
