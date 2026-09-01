"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./MenuFilter.module.css";

export interface ProductItem {
  id: string;
  name: string;
  category: "cakes" | "cookies" | "coffee" | "packaging";
  price: string;
  image: string;
  badge?: string;
  description: string;
  tags: string[];
}

export const MENU_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "Signature Tiered Celebration Cake",
    category: "cakes",
    price: "$65.00",
    image: "/images/final/IMG_1544_copy.jpg",
    badge: "Best Seller",
    description: "Handcrafted multi-tiered cake decorated with delicate buttercream frosting, organic vanilla sponge, and fresh floral accents.",
    tags: ["Custom Made", "Organic Butter", "Contains Dairy"],
  },
  {
    id: "prod-2",
    name: "Double Chocolate Chunk Cookie",
    category: "cookies",
    price: "$4.50",
    image: "/images/final/IMG_1481.jpg",
    badge: "Chef Pick",
    description: "Rich dark Belgian chocolate chunks folded into a slow-fermented cookie dough, sprinkled with sea salt flakes.",
    tags: ["Baked Fresh Daily", "Organic Cacao", "Eggless Option Available"],
  },
  {
    id: "prod-3",
    name: "Iced Creamy Coffee Latte",
    category: "coffee",
    price: "$5.50",
    image: "/images/final/IMG_1495_copy.jpg",
    badge: "Popular",
    description: "Single-origin espresso brewed over cold velvet oat milk and house-made vanilla bean syrup.",
    tags: ["Single Origin", "Oat Milk Available", "Iced"],
  },
  {
    id: "prod-4",
    name: "Farah Bakes Luxury Packaging Box",
    category: "packaging",
    price: "$12.00",
    image: "/images/final/IMG_1510_copy.jpg",
    badge: "Gift Packaging",
    description: "Custom gold-stamped luxury gift box in Brand Green (#1F3732) designed for celebrations and corporate gifting.",
    tags: ["Custom Stamped", "Recyclable Premium Card", "Ribbon Included"],
  },
  {
    id: "prod-5",
    name: "Artisanal Plated Berry Tart",
    category: "cakes",
    price: "$7.50",
    image: "/images/final/IMG_1560_copy.jpg",
    badge: "Seasonal",
    description: "Crisp golden tart shell filled with velvety vanilla bean pastry cream and topped with fresh garden berries.",
    tags: ["Fresh Fruit", "Handmade Shell"],
  },
  {
    id: "prod-6",
    name: "Warm Chocolate Soufflé Delight",
    category: "cakes",
    price: "$6.50",
    image: "/images/final/IMG_1618_copy.jpg",
    badge: "Fresh Baked",
    description: "Decadent molten chocolate center cake dusted with powdered sugar and served warm.",
    tags: ["Serve Warm", "Rich Belgian Cacao"],
  },
  {
    id: "prod-7",
    name: "Signature Floral Celebration Cake",
    category: "cakes",
    price: "$75.00",
    image: "/images/final/IMG_1633_copy.jpg",
    badge: "Chef Pick",
    description: "Stunning celebration cake with hand-piped buttercream flowers and subtle edible gold leaf detailing.",
    tags: ["Custom Size", "Wedding Favorite"],
  },
  {
    id: "prod-8",
    name: "Specialty Espresso Cold Brew",
    category: "coffee",
    price: "$5.25",
    image: "/images/final/IMG_1497_copy.jpg",
    badge: "Signature",
    description: "Smooth 18-hour cold brew coffee steeped with cardamoms and served over ice.",
    tags: ["18-hr Brew", "Low Acidity"],
  },
  {
    id: "prod-9",
    name: "Farah Bakes Deluxe Gift Tote Set",
    category: "packaging",
    price: "$15.00",
    image: "/images/final/IMG_1510.jpg",
    badge: "Gift Set",
    description: "Complete bakery presentation bag set featuring gold foil handles and embossed brand seal.",
    tags: ["Luxury Tote", "Gold Foil"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "cakes", label: "Custom Cakes" },
  { id: "cookies", label: "Cookies & Bakes" },
  { id: "coffee", label: "Coffee & Drinks" },
  { id: "packaging", label: "Luxury Packaging" },
];

interface MenuFilterProps {
  onSelectProduct: (product: ProductItem) => void;
}

export default function MenuFilter({ onSelectProduct }: MenuFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProducts = activeCategory === "all"
    ? MENU_PRODUCTS
    : MENU_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className={styles.section} id="menu" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>HANDCRAFTED DELICACIES</span>
          <h2 className={styles.title}>Featured Menu &amp; Specialties</h2>
          <p className={styles.description}>
            Explore our artisanal collection of custom cakes, freshly baked cookies, specialty cold brews, and luxury gift boxes.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <motion.div
          className={styles.tabContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeCategory === tab.id ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
              {activeCategory === tab.id && (
                <motion.div
                  className={styles.tabIndicator}
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectProduct(product)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {product.badge && <span className={styles.badge}>{product.badge}</span>}
                  <div className={styles.imageOverlay}>
                    <span className={styles.quickViewBtn}>Quick View</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <span className={styles.price}>{product.price}</span>
                  </div>
                  <p className={styles.shortDesc}>{product.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
