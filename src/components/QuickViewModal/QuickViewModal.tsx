"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductItem } from "../MenuFilter/MenuFilter";
import styles from "./QuickViewModal.module.css";

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOrderProduct: (product: ProductItem) => void;
}

export default function QuickViewModal({ product, onClose, onOrderProduct }: QuickViewModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className={styles.backdrop} onClick={onClose}>
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            &times;
          </button>

          <div className={styles.grid}>
            <div className={styles.imageCol}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "cover" }}
              />
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
            </div>

            <div className={styles.infoCol}>
              <span className={styles.categoryLabel}>{product.category.toUpperCase()}</span>
              <h2 className={styles.title}>{product.name}</h2>
              <div className={styles.price}>{product.price}</div>
              <p className={styles.description}>{product.description}</p>

              <div className={styles.tagSection}>
                <span className={styles.tagTitle}>Highlights &amp; Ingredients</span>
                <div className={styles.tags}>
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagPill}>
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.actionRow}>
                <button
                  className="btn btn-gold"
                  onClick={() => {
                    onClose();
                    onOrderProduct(product);
                  }}
                >
                  Request Order / Inquiry
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
