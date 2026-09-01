"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./ArtisanalMenu.module.css";

interface MenuItem {
  name: string;
  price: string;
  image: string;
}

const leftColItems: MenuItem[] = [
  {
    name: "Croissant au Beurre",
    price: "$4.50",
    image: "/images/farah-bakes/img_1510.jpg",
  },
  {
    name: "Baguette",
    price: "$4.50",
    image: "/images/farah-bakes/img_1497.jpg",
  },
  {
    name: "Cannelé",
    price: "$3.00",
    image: "/images/farah-bakes/img_1543.jpg",
  },
  {
    name: "Chocolate Croissant",
    price: "$5.00",
    image: "/images/farah-bakes/img_1522.jpg",
  },
];

const rightColItems: MenuItem[] = [
  {
    name: "Chocolate Chunk Cookie",
    price: "$3.75",
    image: "/images/farah-bakes/cookie-close-up.jpg",
  },
  {
    name: "Kouign Amann au Beurre",
    price: "$5.15",
    image: "/images/farah-bakes/img_1548.jpg",
  },
  {
    name: "Cardamom Bun",
    price: "$4.00",
    image: "/images/farah-bakes/img_1547.jpg",
  },
  {
    name: "Almond Croissant",
    price: "$5.25",
    image: "/images/farah-bakes/img_1568.jpg",
  },
];

interface ArtisanalMenuProps {
  onOpenInquiry?: () => void;
}

export default function ArtisanalMenu({ onOpenInquiry }: ArtisanalMenuProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end organic feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax offsets for different depth layers
  const bgX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const bgY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const spoonX = useTransform(smoothX, [-1, 1], [-22, 22]);
  const spoonY = useTransform(smoothY, [-1, 1], [-16, 16]);
  const spoonRotate = useTransform(smoothX, [-1, 1], [-6, 6]);
  const badgeX = useTransform(smoothX, [-1, 1], [-26, 26]);
  const badgeY = useTransform(smoothY, [-1, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Subtle floating ambient gold particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate warm golden flour/dust particles
    const particleCount = 26;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.4 - 0.15,
      opacity: Math.random() * 0.45 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.025;

        // Wrap around edges
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(218, 178, 118, ${Math.max(0.05, currentOpacity)})`;
        ctx.shadowColor = "rgba(220, 180, 110, 0.35)";
        ctx.shadowBlur = 4;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="artisanal-menu"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Full section background: Fresh Muffins in Basket */}
      <motion.div
        className={styles.bgImageWrap}
        style={{
          x: bgX,
          y: bgY,
          scale: isHovered ? 1.03 : 1.01,
          transition: "scale 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          src="/images/farah-bakes/img_1590.jpg"
          alt="Fresh artisanal muffins in basket"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
      </motion.div>

      {/* 2. Top-Right Organic Cream Framing Wave */}
      <div className={styles.topRightWaveWrap}>
        <svg
          className={styles.topRightSvg}
          viewBox="0 0 500 220"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 500 0 C 350 0 200 40 80 120 C 20 160 0 210 0 220 L 500 220 Z"
            fill="var(--bg-warm)"
          />
        </svg>
      </div>

      {/* 3. Top-Left Organic Cream Wave & Elegant Gold Swirl */}
      <div className={styles.topLeftWaveWrap}>
        <svg
          className={styles.topLeftSvg}
          viewBox="0 0 600 240"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cream swoosh background */}
          <path
            d="M 0 0 L 520 0 C 450 70 330 110 180 130 C 80 145 0 220 0 220 Z"
            fill="var(--bg-warm)"
          />
          {/* Delicate Gold Decorative Arc */}
          <path
            d="M 0 100 C 140 100 290 140 430 200 C 490 225 560 240 600 240"
            stroke="#D4A86A"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* 4. Top-Left Floating Wooden Spoon with Sugar */}
      <motion.div
        className={styles.spoonWrap}
        style={{
          x: spoonX,
          y: spoonY,
          rotate: spoonRotate,
        }}
        initial={{ opacity: 0, x: -80, y: -40, rotate: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.spoonInner}>
          <Image
            src="/images/farah-bakes/wooden-sugar-spoon.png"
            alt="Wooden spoon with sugar"
            width={240}
            height={240}
            className={styles.spoonImg}
            priority
          />
        </div>
      </motion.div>

      {/* 5. Top-Left Circular Cannelé Inset Badge with Gold Ring */}
      <motion.div
        className={styles.badgeWrap}
        style={{
          x: badgeX,
          y: badgeY,
        }}
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.badgeRing}>
          <div className={styles.badgeImgContainer}>
            <Image
              src="/images/farah-bakes/img_1543.jpg"
              alt="Artisanal cannelé close up"
              fill
              sizes="(max-width: 768px) 140px, 200px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* 6. Ambient Canvas for Golden Flour/Dust Micro-Particles */}
      <canvas ref={canvasRef} className={styles.particlesCanvas} />

      {/* 7. Dark Semi-Transparent Curved Overlay & Menu Container */}
      <div className={styles.overlaySection}>
        {/* SVG Top Wave of Dark Overlay */}
        <div className={styles.curveHeader}>
          <svg
            className={styles.curveSvg}
            viewBox="0 0 1440 200"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top golden highlight line along the wave */}
            <path
              d="M 0,90 C 200,110 320,145 500,135 C 750,120 980,50 1180,35 C 1300,26 1390,55 1440,85"
              stroke="rgba(212, 168, 106, 0.45)"
              strokeWidth="2"
              fill="none"
            />
            {/* Semi-transparent dark overlay fill matching Figma wave contour */}
            <path
              d="M 0,90 C 200,110 320,145 500,135 C 750,120 980,50 1180,35 C 1300,26 1390,55 1440,85 L 1440,200 L 0,200 Z"
              fill="rgba(22, 19, 17, 0.87)"
            />
          </svg>
        </div>

        {/* Menu Body with backdrop blur & slight transparency */}
        <div className={styles.menuBody}>
          <div className={styles.container}>
            {/* Heading */}
            <motion.h2
              className={styles.menuTitle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Artisanal Menu
            </motion.h2>

            {/* 2-Column Menu Grid */}
            <div className={styles.columnsWrapper}>
              {/* Left Column */}
              <div className={styles.column}>
                {leftColItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    className={styles.menuRow}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <div className={styles.itemText}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <motion.div
                      className={styles.thumbWrap}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className={styles.itemThumb}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className={styles.column}>
                {rightColItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    className={styles.menuRow}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + idx * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <div className={styles.itemText}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <motion.div
                      className={styles.thumbWrap}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className={styles.itemThumb}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* "VIEW ALL MENU" Button */}
            <motion.div
              className={styles.buttonContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className={styles.viewAllBtn}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 6px 24px rgba(196, 154, 91, 0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInquiry}
              >
                VIEW ALL MENU
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
