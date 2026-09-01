"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./PackagingShowcase.module.css";

interface PackagingProps {
  onOpenInquiry?: () => void;
}

export default function PackagingShowcase({ onOpenInquiry }: PackagingProps) {
  const boxes = [
    {
      title: "The Signature Green Box",
      tag: "LUXURY GIFTING",
      desc: "Our iconic matte forest green box adorned with metallic gold foil monogram and hand-stamped wax emblem. Holds 6 to 12 gourmet bakes.",
      image: "/images/farah-bakes/green-box-1.jpg",
      price: "From $35",
    },
    {
      title: "Celebration & Wedding Favors",
      tag: "EVENT SPECIAL",
      desc: "Bespoke individual favor boxes wrapped with silk ribbon and customized wax seals for high-end celebrations and royal weddings.",
      image: "/images/farah-bakes/green-box-2.jpg",
      price: "Custom Quote",
    },
    {
      title: "Corporate & Royal Hampers",
      tag: "VIP SELECTION",
      desc: "Tiered luxury packaging featuring an assortment of signature cakes, pecan cookies, and custom greeting note cards.",
      image: "/images/farah-bakes/packaging-stack.jpg",
      price: "From $85",
    },
  ];

  return (
    <section className={styles.section} id="packaging">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>ELEVATED UNBOXING EXPERIENCE</span>
          <h2 className={styles.title}>Bespoke Luxury Packaging</h2>
          <div className="gold-divider" />
        </div>

        <div className={styles.grid}>
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={box.image}
                  alt={box.title}
                  width={400}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.cardTag}>{box.tag}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{box.title}</h3>
                <p className={styles.cardDesc}>{box.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardPrice}>{box.price}</span>
                  <button className={styles.actionBtn} onClick={onOpenInquiry}>
                    Request Box &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
