"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FarahLogo from "../Navbar/FarahLogo";
import styles from "./HowItStarted.module.css";

interface HowItStartedProps {
  onOpenInquiry?: () => void;
}

export default function HowItStarted({ onOpenInquiry }: HowItStartedProps) {
  return (
    <section className={styles.section} id="story">
      <div className={styles.goldArc} />

      <div className={styles.inner}>
        {/* Left: Founder photo */}
        <motion.div
          className={styles.founderPhoto}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/founder.jpg"
            alt="Farah, founder of Farah Bakes"
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </motion.div>

        {/* Center: Text */}
        <motion.div
          className={styles.centerText}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className={styles.whoWeAre}>Who we are</p>
          <h2 className={styles.title}>How it started</h2>
          <p className={styles.body}>
            While Farah Bakes officially launched in 2022, the journey started much earlier when Farah, a passionate home baker, fell deeply in love with French artisanal baking techniques.
          </p>
          <p className={styles.body}>
            She swapped her career for baking sheets and set out on a mission to make the everyday staple a daily delight.
          </p>
          <div className={styles.learnBtn}>
            <motion.button
              className="btn btn-gold"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenInquiry}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Food photo + FB emblem */}
        <motion.div
          className={styles.rightPhoto}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className={styles.foodPhoto}>
            <Image
              src="/images/farah-bakes/img_1618.jpg"
              alt="Artisanal bread on wooden board"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.emblem}>
            <FarahLogo variant="symbol" height={52} goldColor="#D2AE6D" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
