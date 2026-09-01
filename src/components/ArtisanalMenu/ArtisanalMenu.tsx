"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./ArtisanalMenu.module.css";

const menuItems = [
  { name: "Croissant au Beurre", price: "$4.50", image: "/images/croissant-beurre.jpg" },
  { name: "Chocolate Chunk Cookie", price: "$3.75", image: "/images/chocolate-cookie.jpg" },
  { name: "Baguette", price: "$4.50", image: "/images/baguette.jpg" },
  { name: "Kouign Amann au Beurre", price: "$5.15", image: "/images/kouign-amann.jpg" },
  { name: "Cannelé", price: "$3.00", image: "/images/cannele.jpg" },
  { name: "Cardamom Bun", price: "$4.00", image: "/images/cardamom-bun.jpg" },
  { name: "Chocolate Croissant", price: "$5.00", image: "/images/chocolate-croissant.jpg" },
  { name: "Almond Croissant", price: "$5.25", image: "/images/almond-croissant.jpg" },
];

export default function ArtisanalMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id="menu" ref={ref}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        Artisanal Menu
      </motion.h2>

      <div className={styles.grid}>
        {menuItems.map((item, i) => (
          <motion.div
            key={item.name}
            className={styles.item}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.1 + i * 0.08,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemPrice}>{item.price}</span>
            </div>
            <div className={styles.itemImage}>
              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.btnWrapper}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.a
          href="#"
          className="btn btn-gold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Menu
        </motion.a>
      </motion.div>
    </section>
  );
}
