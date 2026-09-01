"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface HeroProps {
  onOpenInquiry?: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative gold arc */}
      <div className={styles.goldArc} />

      <div className={styles.heroInner}>
        {/* Left: Text */}
        <div className={styles.heroText}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            Sourdough, Pastries<br />And Good Vibes
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            Farah Bakes is an artisanal French bakery. We craft luxury sourdoughs, bespoke cakes, and gourmet pastries with pure organic butter and centuries-old techniques.
          </motion.p>

          <motion.div
            className={styles.heroBtns}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <motion.a
              href="#menu"
              className="btn btn-outline-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Discover More
            </motion.a>
            <motion.button
              onClick={onOpenInquiry}
              className="btn btn-gold"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Circular image */}
        <div className={styles.heroImageSide}>
          <motion.div
            className={styles.circleFrame}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <Image
              src="/images/farah-bakes/img_1590.jpg"
              alt="Artisanal baked goods by Farah Bakes"
              fill
              sizes="(max-width: 900px) 280px, 480px"
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Floating croissant */}
      <motion.div
        className={styles.floatingCroissant}
        initial={{ opacity: 0, x: -40, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 1.1, delay: 0.6, ease }}
      >
        <Image
          src="/images/croissant-beurre.jpg"
          alt="Croissant"
          width={220}
          height={150}
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      {/* Organic wave at bottom transitioning to cream */}
      <div className={styles.waveBottom}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,50 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}
