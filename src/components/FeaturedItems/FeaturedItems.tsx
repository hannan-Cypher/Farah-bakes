"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./FeaturedItems.module.css";

const items = [
  { id: "1", name: "Chocolate Chunk Cookie", price: "$3.75", image: "/images/farah-bakes/cookie-close-up.jpg" },
  { id: "2", name: "Guava Rol", price: "$4.50", image: "/images/farah-bakes/img_1555.jpg" },
  { id: "3", name: "Cannelé", price: "$3.00", image: "/images/farah-bakes/img_1543.jpg" },
  { id: "4", name: "Croissant au Beurre", price: "$4.50", image: "/images/farah-bakes/img_1510.jpg" },
  { id: "5", name: "Baguette", price: "$4.50", image: "/images/farah-bakes/img_1497.jpg" },
  { id: "6", name: "Cardamom Bun", price: "$4.00", image: "/images/farah-bakes/img_1547.jpg" },
  { id: "7", name: "Almond Croissant", price: "$5.25", image: "/images/farah-bakes/img_1568.jpg" },
  { id: "8", name: "Kouign Amann", price: "$5.15", image: "/images/farah-bakes/img_1548.jpg" },
  { id: "9", name: "Chocolate Croissant", price: "$5.00", image: "/images/farah-bakes/img_1522.jpg" },
  { id: "10", name: "Morning Buns", price: "$4.25", image: "/images/farah-bakes/img_1560.jpg" },
];

const VISIBLE = 5;
const TOTAL = 20;

interface FeaturedProps {
  onOpenInquiry?: () => void;
}

export default function FeaturedItems({ onOpenInquiry }: FeaturedProps) {
  const [current, setCurrent] = useState(5);
  const trackRef = useRef<HTMLDivElement>(null);

  const progressPercent = (current / TOTAL) * 100;

  return (
    <section className={styles.section} id="menu">
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Items</h2>
      </div>

      {/* Horizontal scroll */}
      <div className={styles.scrollTrack} ref={trackRef}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={onOpenInquiry}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="220px"
                style={{ objectFit: "cover" }}
              />
              <span className={styles.stockBadge}>Out of<br />stock</span>
            </div>
            <p className={styles.cardName}>{item.name}</p>
            <p className={styles.cardPrice}>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span className={styles.pageCount}>{String(current).padStart(2, "0")}/{TOTAL}</span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
}
