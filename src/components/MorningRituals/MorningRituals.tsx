"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./MorningRituals.module.css";

export default function MorningRituals() {
  return (
    <section className={styles.section} id="rituals">
      <div className={styles.container}>
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imgFrame}>
            <Image
              src="/images/farah-bakes/morning-rituals.jpg"
              alt="Coffee cup with handcrafted pecan cookie resting on rim"
              width={500}
              height={600}
              style={{ objectFit: "cover" }}
            />
          </div>

          <motion.div
            className={styles.quoteCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className={styles.quoteText}>
              &ldquo;The perfect morning starts with rich espresso and a warm, golden butter cookie.&rdquo;
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>SENSORY EXPERIENCE</span>
          <h2 className={styles.title}>
            The Farah Bakes <br />
            <span className={styles.titleSpan}>Morning Ritual</span>
          </h2>
          <p className={styles.description}>
            We believe moments of luxury should be part of your daily rhythm. Our signature pecan & brown butter cookies are specifically sized and baked to rest gracefully over your morning coffee cup, allowing the steam to gently warm the soft center before your first bite.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <div>
                <div className={styles.featureTitle}>Brown Butter Pecan Recipe</div>
                <div className={styles.featureDesc}>
                  Slow-browned French butter infused with toasted Georgia pecans.
                </div>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <div>
                <div className={styles.featureTitle}>Artisanal Espresso Pairing</div>
                <div className={styles.featureDesc}>
                  Crafted to complement single-origin roast coffees and velvet lattes.
                </div>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <div>
                <div className={styles.featureTitle}>Baked Fresh Every Sunrise</div>
                <div className={styles.featureDesc}>
                  Pulled straight from our ovens early every morning.
                </div>
              </div>
            </div>
          </div>

          <div>
            <a href="#menu" className="btn btn-gold">
              Discover Morning Pairings
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
