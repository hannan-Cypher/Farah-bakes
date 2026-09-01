"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Values.module.css";

const values = [
  {
    icon: "🍞",
    title: "Sourdough Focus",
    desc: "We're obsessed by how levain and multi-day fermentation yield deeper flavors, more nutritious loaves.",
  },
  {
    icon: "🥐",
    title: "A Fresh Take",
    desc: "We're re-inventing classics — always experimenting with new and seasonal flavors.",
  },
  {
    icon: "👨‍🍳",
    title: "Artisanal Techniques",
    desc: "Our approach to breadmaking is rooted in French boulangerie techniques and savoir-faire.",
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
