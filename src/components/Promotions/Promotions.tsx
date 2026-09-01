"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Promotions.module.css";

interface PromotionsProps {
  onOpenInquiry?: () => void;
}

export default function Promotions({ onOpenInquiry }: PromotionsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Card 1 — Big Sale */}
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          onClick={onOpenInquiry}
        >
          <Image
            src="/images/baguette.jpg"
            alt="Bakery Big Sale"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className={styles.cardImg}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay} />
          <div className={styles.cardContent}>
            <span className={styles.eyebrow}>Bakery</span>
            <h3 className={styles.headline}>Big Sale</h3>
            <span className={styles.offerBadge}>25% OFF</span>
            <p className={styles.subtext}>Limited Time Offer</p>
          </div>
        </motion.div>

        {/* Center badge */}
        <div className={styles.centerBadge}>
          UP TO<br />30%
        </div>

        {/* Card 2 — Winter Sale */}
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          onClick={onOpenInquiry}
        >
          <Image
            src="/images/farah-bakes/img_1555.jpg"
            alt="Winter Sale 50% Off"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className={styles.cardImg}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay} />
          <div className={styles.cardContent}>
            <span className={styles.eyebrow}>Winter Sale</span>
            <h3 className={styles.headline}>50% Off</h3>
            <button className={styles.orderNowBtn} onClick={onOpenInquiry}>
              Order Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
