"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./BakeryBanner.module.css";

export default function BakeryBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className={styles.section} ref={ref}>
      <motion.div className={styles.bgImage} style={{ y: bgY }}>
        <Image
          src="/images/bakery-banner.jpg"
          alt="Basket of freshly baked pastries"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      <div className={styles.overlay} />

      <div className={styles.circles}>
        <motion.div
          className={`${styles.circle} ${styles.circleLeft}`}
          initial={{ opacity: 0, x: -80, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/cannele.jpg"
            alt="Cannelé pastry"
            width={200}
            height={200}
          />
        </motion.div>

        <motion.div
          className={`${styles.circle} ${styles.circleRight}`}
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/cardamom-bun.jpg"
            alt="Cardamom bun"
            width={180}
            height={180}
          />
        </motion.div>
      </div>
    </section>
  );
}
