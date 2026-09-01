"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./InstagramFeed.module.css";

const images = [
  { src: "/images/chocolate-cookie.jpg", label: "" },
  { src: "/images/bakery-workspace.jpg", label: "" },
  { src: "/images/kouign-amann.jpg", label: "" },
  { src: "/images/founder.jpg", label: "" },
  { src: "/images/cardamom-bun.jpg", label: "4th of July Essentials" },
];

export default function InstagramFeed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Follow @Artisanal Bakery
      </motion.h2>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={styles.imageWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Image
              src={img.src}
              alt={`Instagram post ${i + 1}`}
              width={300}
              height={300}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.overlayIcon}>♥</span>
            </div>
            {img.label && (
              <span className={styles.overlayText}>{img.label}</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
