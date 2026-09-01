"use client";

import { motion } from "framer-motion";
import styles from "./Values.module.css";

const values = [
  {
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
        {/* Baker running with bread - hand-drawn style */}
        <circle cx="60" cy="30" r="12" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
        <path d="M50 45 L50 75 L42 95" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M50 55 L70 55 L75 45" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M50 75 L63 95" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Bread loaf */}
        <ellipse cx="85" cy="42" rx="18" ry="10" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
        <path d="M70 42 Q85 30 100 42" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <path d="M75 44 L95 44" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 3"/>
        {/* Motion lines */}
        <path d="M30 55 L20 55" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 62 L22 65" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M33 48 L23 45" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sourdough Focus",
    desc: "We're obsessed by how levain and multi-day fermentation yield deeper flavors, more nutritious loaves.",
  },
  {
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
        {/* Baker juggling bread - hand-drawn style */}
        <circle cx="60" cy="28" r="12" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
        <path d="M55 42 L52 72" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M65 42 L68 72" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M52 72 L44 90" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M68 72 L76 90" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Arms */}
        <path d="M55 50 L35 45" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M65 50 L85 38" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Bread items flying */}
        <ellipse cx="28" cy="40" rx="10" ry="6" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <ellipse cx="88" cy="30" rx="12" ry="8" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <circle cx="60" cy="10" r="7" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        {/* Stars */}
        <text x="15" y="25" fontSize="10" fill="#1a1a1a">★</text>
        <text x="95" y="55" fontSize="10" fill="#1a1a1a">★</text>
      </svg>
    ),
    title: "A fresh take",
    desc: "We're re-inventing classics — always experimenting with new and seasonal flavors.",
  },
  {
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
        {/* Baker at oven - hand-drawn style */}
        <circle cx="35" cy="30" r="12" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
        <path d="M30 44 L28 74" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 44 L42 65" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M28 74 L24 92" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M42 65 L55 55" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Oven/laptop */}
        <rect x="55" y="45" width="50" height="40" rx="4" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
        <rect x="60" y="50" width="40" height="28" rx="2" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        {/* Steam lines */}
        <path d="M70 45 Q72 38 70 31" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M80 45 Q82 36 80 29" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M90 45 Q92 38 90 31" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    title: "Artisanal Techniques",
    desc: "Our approach to breadmaking is rooted in French boulangerie techniques and savoir-faire.",
  },
];

export default function Values() {
  return (
    <section className={styles.section} id="values">
      <div className={styles.inner}>
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <div className={styles.icon}>{v.icon}</div>
            <h3 className={styles.cardTitle}>{v.title}</h3>
            <p className={styles.cardDesc}>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
