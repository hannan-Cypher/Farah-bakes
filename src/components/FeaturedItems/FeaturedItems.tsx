"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./FeaturedItems.module.css";

const items = [
  { name: "Chocolate Chunk Cookie", price: "$3.75", image: "/images/chocolate-cookie.jpg", badge: "Our Pick" },
  { name: "Croissant au Beurre", price: "$4.50", image: "/images/croissant-beurre.jpg", badge: "Our Pick" },
  { name: "Cannelé", price: "$3.00", image: "/images/cannele.jpg", badge: "Our Pick" },
  { name: "Croissant au Beurre", price: "$4.50", image: "/images/croissant-beurre.jpg", badge: null },
  { name: "Baguette", price: "$4.50", image: "/images/baguette.jpg", badge: null },
  { name: "Kouign Amann", price: "$5.15", image: "/images/kouign-amann.jpg", badge: "Our Pick" },
  { name: "Cardamom Bun", price: "$4.00", image: "/images/cardamom-bun.jpg", badge: null },
  { name: "Almond Croissant", price: "$5.25", image: "/images/almond-croissant.jpg", badge: null },
];

export default function FeaturedItems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [dragX, setDragX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalWidth = items.length * 252; // card width + gap
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const maxDrag = -(totalWidth - viewportWidth + 40);
  const progressPercent = Math.min(
    100,
    Math.max(5, (Math.abs(dragX) / Math.abs(maxDrag)) * 100 + 5)
  );

  const currentItem = Math.min(
    items.length,
    Math.floor((Math.abs(dragX) / Math.abs(maxDrag || 1)) * items.length) + 1
  );

  return (
    <section className={styles.section} id="featured" ref={ref}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Featured Items
      </motion.h2>

      <div className={styles.carouselWrapper}>
        <motion.div
          ref={carouselRef}
          className={styles.carousel}
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          dragElastic={0.1}
          onDrag={(_, info) => setDragX(info.offset.x)}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={220}
                  height={220}
                  draggable={false}
                />
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.cardName}>{item.name}</p>
                <p className={styles.cardPrice}>{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.progress}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <span className={styles.progressText}>
          {String(currentItem).padStart(2, "0")}/{String(items.length).padStart(2, "0")}
        </span>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </motion.div>
    </section>
  );
}
