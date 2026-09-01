"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./PackagingShowcase.module.css";

interface PackagingShowcaseProps {
  onOpenInquiry?: () => void;
}

export default function PackagingShowcase({ onOpenInquiry }: PackagingShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="packaging" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Text Column */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.badge}>LUXURY GIFTING &amp; CATERING</span>
            <h2 className={styles.title}>Gold-Stamped Packaging &amp; Custom Favor Boxes</h2>
            <p className={styles.paragraph}>
              Every Farah Bakes creation is delivered in our signature Brand Green (<code className={styles.codeColor}>#1F3732</code>) and Gold-embossed packaging. Designed to elevate weddings, corporate celebrations, and memorable gifts.
            </p>

            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.goldCheck}>✓</span> Custom Gold Foil Monogramming Available
              </li>
              <li className={styles.featureItem}>
                <span className={styles.goldCheck}>✓</span> Temperature-Controlled Insulated Gift Boxes
              </li>
              <li className={styles.featureItem}>
                <span className={styles.goldCheck}>✓</span> Corporate Favors &amp; Multi-Recipient Delivery
              </li>
            </ul>

            <motion.button
              className="btn btn-gold"
              onClick={onOpenInquiry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Corporate / Event Packaging
            </motion.button>
          </motion.div>

          {/* Image Showcase Grid */}
          <motion.div
            className={styles.visualGroup}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`${styles.imageWrapper} ${styles.mainImg}`}>
              <Image
                src="/images/final/IMG_1510_copy.jpg"
                alt="Farah Bakes luxury gold-stamped packaging box"
                fill
                sizes="(max-width: 968px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imgLabel}>Signature Gift Box</div>
            </div>

            <div className={`${styles.imageWrapper} ${styles.subImg}`}>
              <Image
                src="/images/final/IMG_1510.jpg"
                alt="Farah Bakes deluxe gift tote presentation"
                fill
                sizes="(max-width: 968px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imgLabel}>Luxury Tote Bag</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
