"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Values.module.css";

const values = [
  {
    icon: "🎂",
    title: "Custom Artistry",
    desc: "Every custom cake is meticulously designed to reflect your celebration's unique theme and taste.",
  },
  {
    icon: "🌾",
    title: "100% Organic",
    desc: "We select pure organic flour, French butter, and single-origin cacao for unforgettable flavor.",
  },
  {
    icon: "👨‍🍳",
    title: "Artisanal Craft",
    desc: "Slow fermentation, hand-piped frosting, and traditional French techniques in every bite.",
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.grid}>
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className={styles.iconWrapper}
              whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
            >
              <span className={styles.icon}>{v.icon}</span>
            </motion.div>
            <h3 className={styles.cardTitle}>{v.title}</h3>
            <p className={styles.cardDesc}>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
