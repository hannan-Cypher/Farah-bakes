"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./HowItStarted.module.css";

export default function HowItStarted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="story" ref={ref}>
      <div className={styles.content}>
        {/* Left Image - Founder */}
        <motion.div
          className={styles.leftImage}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/founder.jpg"
            alt="Michette bakery founder"
            fill
            sizes="(max-width: 968px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.goldAccent} ${styles.accentTopRight}`} />
        </motion.div>

        {/* Center Content */}
        <div className={styles.centerContent}>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Who we are
          </motion.p>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            How it started
          </motion.h2>

          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            FB
          </motion.div>

          <motion.p
            className={styles.story}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            While Michette officially launched in 2022, the journey started back
            in 2018 when Thomas, who&apos;d been a lawyer in New York for five
            years, went back for an internship at his hometown boulangerie in
            France and fell in love with baking.
          </motion.p>

          <motion.p
            className={styles.story}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            He swapped the business suits for baking sheets and set out on a
            mission to make the everyday staple a daily delight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.a
              href="#"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image - Bakery */}
        <motion.div
          className={styles.rightImage}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/bakery-workspace.jpg"
            alt="Artisanal bakery workspace"
            fill
            sizes="(max-width: 968px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.goldAccent} ${styles.accentBottomLeft}`} />
        </motion.div>
      </div>
    </section>
  );
}
