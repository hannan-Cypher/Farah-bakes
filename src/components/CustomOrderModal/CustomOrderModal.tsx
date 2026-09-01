"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CustomOrderModal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomOrderModal({ isOpen, onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [orderType, setOrderType] = useState("Custom Cake");
  const [boxSize, setBoxSize] = useState("Signature Box (8 Pcs)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className={styles.overlay} onClick={onClose}>
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.header}>
            <div>
              <h3 className={styles.title}>Farah Bakes Custom Order</h3>
              <p className={styles.subtitle}>Bespoke Confectionery & Luxury Gifting</p>
            </div>
            <button className={styles.closeBtn} onClick={onClose}>
              &times;
            </button>
          </div>

          <div className={styles.stepBar}>
            <div
              className={styles.stepProgress}
              style={{ width: submitted ? "100%" : `${(step / 3) * 100}%` }}
            />
          </div>

          <div className={styles.body}>
            {!submitted ? (
              <>
                {step === 1 && (
                  <div>
                    <h4 className={styles.stepTitle}>1. Select Order Category</h4>
                    <div className={styles.optionGrid}>
                      {[
                        { name: "Custom Cake", desc: "Layered Celebration Cake" },
                        { name: "Gourmet Cookie Box", desc: "Assorted Soft-Bake Cookies" },
                        { name: "Morning Ritual Hamper", desc: "Coffee & Pastry Pairing" },
                        { name: "Wedding / Corporate", desc: "Bulk Bespoke Favors" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className={`${styles.optionCard} ${
                            orderType === item.name ? styles.optionCardSelected : ""
                          }`}
                          onClick={() => setOrderType(item.name)}
                        >
                          <div className={styles.optionName}>{item.name}</div>
                          <div className={styles.optionDesc}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h4 className={styles.stepTitle}>2. Choose Packaging & Portion</h4>
                    <div className={styles.optionGrid}>
                      {[
                        { name: "Petite Box (4 Pcs)", desc: "Ideal for intimate gifts" },
                        { name: "Signature Box (8 Pcs)", desc: "Our iconic green gold-stamped box" },
                        { name: "Grand Box (16 Pcs)", desc: "Multi-tiered celebration hamper" },
                        { name: "Tiered Cake Pedestal", desc: "Custom cake centerpiece" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className={`${styles.optionCard} ${
                            boxSize === item.name ? styles.optionCardSelected : ""
                          }`}
                          onClick={() => setBoxSize(item.name)}
                        >
                          <div className={styles.optionName}>{item.name}</div>
                          <div className={styles.optionDesc}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h4 className={styles.stepTitle}>3. Contact & Special Requests</h4>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Your Name</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Lady Farah"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        type="email"
                        className={styles.input}
                        placeholder="farah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Flavor Preferences / Custom Message</label>
                      <textarea
                        className={styles.textarea}
                        rows={3}
                        placeholder="e.g. Walnut cake with gold leaf, event date Oct 12..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h4 className={styles.stepTitle}>Inquiry Received with Pleasure</h4>
                <p className={styles.optionDesc} style={{ fontSize: "0.95rem", marginTop: "8px" }}>
                  Thank you, {name || "valuable guest"}. Our master baker will review your order details for <strong>{orderType}</strong> ({boxSize}) and contact you within 2 hours.
                </p>
              </div>
            )}
          </div>

          <div className={styles.footer}>
            {!submitted ? (
              <>
                {step > 1 ? (
                  <button className="btn btn-outline-gold" onClick={() => setStep(step - 1)}>
                    &larr; Back
                  </button>
                ) : (
                  <span />
                )}
                <button className="btn btn-gold" onClick={handleNext}>
                  {step === 3 ? "Submit Inquiry" : "Next Step &rarr;"}
                </button>
              </>
            ) : (
              <button className="btn btn-gold" style={{ margin: "0 auto" }} onClick={handleReset}>
                Done
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
