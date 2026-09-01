"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./HowItStarted.module.css";

interface HowItStartedProps {
  onOpenInquiry?: () => void;
}

export default function HowItStarted({ onOpenInquiry }: HowItStartedProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="story" ref={ref}>
      <div className={styles.content}>
        {/* Left Image - Artisanal Kitchen & Prep */}
        <motion.div
          className={styles.leftImage}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/final/IMG_1587_copy.jpg"
            alt="Artisanal kitchen baking knife and prep surface"
            fill
            sizes="(max-width: 968px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.goldAccent} ${styles.accentTopRight}`} />
        </motion.div>

        {/* Center Content */}
        <div className={styles.centerContent}>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR HERITAGE &amp; PASSION
          </motion.p>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The Farah Bakes Story
          </motion.h2>

          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            FB
          </motion.div>

          <motion.p
            className={styles.story}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Farah Bakes was born from a deep devotion to classical pastry craft, comfort, and uncompromising luxury. We combine slow-fermented organic sourdoughs with intricately decorated celebration cakes that bring people together.
          </motion.p>

          <motion.p
            className={styles.story}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Every single batch is baked fresh each morning in our Brand Green kitchen using pure organic butter, Madagascar vanilla, and single-origin chocolate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={onOpenInquiry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss a Custom Cake
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image - Wooden Baking Surface */}
        <motion.div
          className={styles.rightImage}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/final/IMG_1590_copy.jpg"
            alt="Handcrafted baking process on wooden bench"
            fill
            sizes="(max-width: 968px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.goldAccent} ${styles.accentBottomLeft}`} />
        </motion.div>
      </div>
    </section>
  );
}

