"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./Promotions.module.css";

export default function Promotions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.grid}>
        {/* Left Card - Big Sale */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            rotateY: 3,
            rotateX: -2,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          style={{ position: "relative" }}
        >
          <div className={styles.cardImage}>
            <Image
              src="/images/baguette.jpg"
              alt="Bakery Big Sale"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.cardOverlay}>
            <span className={styles.cardLabel}>Bakery</span>
            <h3 className={styles.cardTitle}>Big Sale</h3>
            <span className={`${styles.cardBadge} ${styles.badgeGold}`}>
              25% OFF
            </span>
            <span className={styles.cardSubtext}>Limited Time Offer</span>
          </div>

          {/* Middle floating badge */}
          <motion.div
            className={styles.middleBadge}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className={styles.middleBadgeText}>UP TO</span>
            <span className={styles.middleBadgeValue}>30%</span>
          </motion.div>
        </motion.div>

        {/* Right Card - Winter Sale */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            rotateY: -3,
            rotateX: -2,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <div className={styles.cardImage}>
            <Image
              src="/images/almond-croissant.jpg"
              alt="Winter Sale"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.cardOverlay}>
            <span className={styles.cardLabel}>Winter Sale</span>
            <h3 className={styles.cardTitle}>50% Off</h3>
            <motion.span
              className={`${styles.cardBadge} ${styles.badgeOutline}`}
              whileHover={{ scale: 1.1 }}
            >
              Order Now
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
