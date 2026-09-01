"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "../MenuFilter/MenuFilter";
import styles from "./OrderInquiryModal.module.css";

interface OrderInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: ProductItem | null;
}

export default function OrderInquiryModal({
  isOpen,
  onClose,
  selectedProduct,
}: OrderInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    servings: "20-30 guests",
    dietary: "",
    notes: selectedProduct ? `Interested in ordering: ${selectedProduct.name}` : "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className={styles.backdrop} onClick={onClose}>
        <motion.div
          className={styles.drawer}
          onClick={(e) => e.stopPropagation()}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close drawer">
            &times;
          </button>

          <div className={styles.content}>
            <span className={styles.badge}>FARAH BAKES INQUIRY</span>
            <h2 className={styles.title}>Custom Cake &amp; Order Request</h2>
            <p className={styles.subtitle}>
              Fill in your details below and our lead pastry team will get back to you within 24 hours to confirm your custom order.
            </p>

            {submitted ? (
              <motion.div
                className={styles.successBox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Thank You!</h3>
                <p>
                  Your inquiry for <strong>{formData.name || "your order"}</strong> has been received by Farah Bakes. We will review your request for {formData.date || "your date"} and reach out via email/phone shortly!
                </p>
                <button className="btn btn-gold" onClick={handleReset}>
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {selectedProduct && (
                  <div className={styles.productBanner}>
                    <span>Selected Product:</span>
                    <strong>{selectedProduct.name} ({selectedProduct.price})</strong>
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Estimated Servings</label>
                    <select
                      value={formData.servings}
                      onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                    >
                      <option value="10-15 guests">10 - 15 Guests</option>
                      <option value="20-30 guests">20 - 30 Guests</option>
                      <option value="40-60 guests">40 - 60 Guests</option>
                      <option value="75+ guests (Wedding / Corporate)">75+ Guests (Wedding)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Dietary Preferences / Restrictions</label>
                  <input
                    type="text"
                    placeholder="e.g. Nut-free, Eggless, Gluten-conscious"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Order Notes / Flavor &amp; Theme Details</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your event theme, color preferences, or cake flavors..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: "100%", marginTop: "12px" }}>
                  Submit Order Inquiry
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
