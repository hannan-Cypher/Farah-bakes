"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./InstagramFeed.module.css";

const instagramImages = [
  { src: "/images/final/IMG_1481.jpg", label: "Double Chocolate Chunk Cookies" },
  { src: "/images/final/IMG_1522_copy.jpg", label: "Artisanal Pastry Platter" },
  { src: "/images/final/IMG_1545_copy.jpg", label: "Custom Floral Tiered Cake" },
  { src: "/images/final/IMG_1555_copy.jpg", label: "Freshly Baked Sweet Treats" },
  { src: "/images/final/IMG_1621_copy.jpg", label: "Signature Fruit Tart" },
  { src: "/images/final/IMG_1630_copy.jpg", label: "Celebration Cake Detail" },
];

export default function InstagramFeed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id="instagram" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>JOIN OUR COMMUNITY</span>
          <h2 className={styles.title}>Follow @FarahBakes on Instagram</h2>
        </motion.div>

        <div className={styles.grid}>
          {instagramImages.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageWrapper}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Image
                src={img.src}
                alt={img.label}
                width={320}
                height={320}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className={styles.imageOverlay}>
                <span className={styles.overlayIcon}>♥</span>
                <span className={styles.overlayText}>{img.label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

