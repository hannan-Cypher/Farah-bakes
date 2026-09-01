"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.8,
      ease: easeOut,
    },
  }),
};

interface HeroProps {
  onOpenInquiry?: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      {/* Organic background shapes */}
      <motion.div
        className={`${styles.organicShape} ${styles.shape1}`}
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.organicShape} ${styles.shape2}`}
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.organicShape} ${styles.shape3}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <motion.div
            className={styles.heroBadge}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            FARAH BAKES • EST. 2024
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Comfort, Freshness
            <br />
            <span className={styles.goldText}>&amp; Luxury Elegance</span>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Farah Bakes crafts handcrafted custom cakes, gourmet pastries, sourdough, and sweet delicacies using 100% organic ingredients and timeless artisan techniques.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.a
              href="#menu"
              className="btn btn-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.a>
            <motion.button
              className="btn btn-outline"
              onClick={onOpenInquiry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Custom Cake Request
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.circleFrame}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.goldRing} />
            <Image
              src="/images/final/IMG_1516_copy.jpg"
              alt="Farah Bakes signature tiered cake on artisanal stand"
              width={460}
              height={460}
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <div className={styles.floatingBadge}>
            <span className={styles.badgeNumber}>100%</span>
            <span className={styles.badgeText}>Handcrafted</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.goldLine} />
    </section>
  );
}

