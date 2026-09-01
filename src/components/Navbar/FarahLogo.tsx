"use client";

import React from "react";

interface LogoProps {
  variant?: "primary" | "secondary" | "symbol";
  className?: string;
  height?: number | string;
  width?: number | string;
  goldColor?: string;
  greenColor?: string;
  showBackground?: boolean;
}

export default function FarahLogo({
  variant = "secondary",
  className = "",
  height,
  width,
  goldColor = "#D2AE6D",
  greenColor = "#1F3732",
  showBackground = false,
}: LogoProps) {
  if (variant === "symbol" || variant === "primary") {
    // Primary Emblem Logo with Crown, FB monogram box, Cupcake, Wreath
    return (
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{
          height: height || (variant === "primary" ? 140 : 50),
          width: width || "auto",
          maxWidth: "100%",
        }}
      >
        {showBackground && (
          <rect width="400" height="400" rx="8" fill={greenColor} />
        )}

        {/* Monogram Box F | B */}
        <g stroke={goldColor} strokeWidth="3" fill="none">
          <rect x="140" y="30" width="120" height="45" rx="2" />
          <line x1="200" y1="30" x2="200" y2="75" />
        </g>
        <text
          x="170"
          y="62"
          fill={goldColor}
          fontSize="28"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          F
        </text>
        <text
          x="230"
          y="62"
          fill={goldColor}
          fontSize="28"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          B
        </text>

        {/* Crown */}
        <path
          d="M 180 100 L 200 85 L 220 100 L 235 90 L 228 115 L 172 115 L 165 90 Z"
          fill={goldColor}
        />
        <circle cx="180" cy="98" r="4" fill={goldColor} />
        <circle cx="200" cy="82" r="5" fill={goldColor} />
        <circle cx="220" cy="98" r="4" fill={goldColor} />

        {/* Cupcake Top Dome */}
        <path
          d="M 150 155 C 150 120, 250 120, 250 155 C 265 155, 260 185, 245 190 C 235 195, 165 195, 155 190 C 140 185, 135 155, 150 155 Z"
          fill={goldColor}
        />

        {/* Cupcake Wrapper Base */}
        <path
          d="M 160 195 L 172 255 C 174 265, 226 265, 228 255 L 240 195 Z"
          fill={goldColor}
        />
        {/* Cupcake Wrapper Vertical Lines */}
        <g stroke={showBackground ? greenColor : "#1F3732"} strokeWidth="4" strokeLinecap="round">
          <line x1="176" y1="202" x2="183" y2="248" />
          <line x1="192" y1="202" x2="194" y2="252" />
          <line x1="208" y1="202" x2="206" y2="252" />
          <line x1="224" y1="202" x2="217" y2="248" />
        </g>

        {/* Laurel Wreath */}
        <g stroke={goldColor} strokeWidth="2.5" fill={goldColor}>
          {/* Left Wreath Branch */}
          <path
            d="M 190 340 C 100 330, 60 230, 75 120"
            fill="none"
            stroke={goldColor}
            strokeWidth="3"
          />
          {/* Left Leaves */}
          <path d="M 180 338 C 170 330, 165 315, 175 310 C 185 315, 182 330, 180 338 Z" />
          <path d="M 155 330 C 142 320, 140 305, 150 300 C 160 305, 158 322, 155 330 Z" />
          <path d="M 130 310 C 118 298, 115 282, 126 278 C 135 285, 134 300, 130 310 Z" />
          <path d="M 105 285 C 92 270, 92 252, 103 250 C 112 256, 110 272, 105 285 Z" />
          <path d="M 88 250 C 76 235, 78 218, 89 218 C 96 224, 93 240, 88 250 Z" />
          <path d="M 77 210 C 66 195, 70 178, 81 180 C 87 186, 83 202, 77 210 Z" />
          <path d="M 72 170 C 62 154, 69 138, 79 142 C 84 148, 79 163, 72 170 Z" />
          <path d="M 74 130 C 68 112, 78 98, 87 104 C 89 112, 82 125, 74 130 Z" />

          {/* Right Wreath Branch */}
          <path
            d="M 210 340 C 300 330, 340 230, 325 120"
            fill="none"
            stroke={goldColor}
            strokeWidth="3"
          />
          {/* Right Leaves */}
          <path d="M 220 338 C 230 330, 235 315, 225 310 C 215 315, 218 330, 220 338 Z" />
          <path d="M 245 330 C 258 320, 260 305, 250 300 C 240 305, 242 322, 245 330 Z" />
          <path d="M 270 310 C 282 298, 285 282, 274 278 C 265 285, 266 300, 270 310 Z" />
          <path d="M 295 285 C 308 270, 308 252, 297 250 C 288 256, 290 272, 295 285 Z" />
          <path d="M 312 250 C 324 235, 322 218, 311 218 C 304 224, 307 240, 312 250 Z" />
          <path d="M 323 210 C 334 195, 330 178, 319 180 C 313 186, 317 202, 323 210 Z" />
          <path d="M 328 170 C 338 154, 331 138, 321 142 C 316 148, 321 163, 328 170 Z" />
          <path d="M 326 130 C 332 112, 322 98, 313 104 C 311 112, 318 125, 326 130 Z" />
        </g>
      </svg>
    );
  }

  // Secondary Wordmark: "Farah Bakes" elegant typography with integrated chef hat on B & cupcake on a
  return (
    <div
      className={`farah-brand-wordmark ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
        color: goldColor,
        fontSize: height ? (typeof height === "number" ? `${height}px` : height) : "1.8rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
        userSelect: "none",
        lineHeight: 1,
      }}
    >
      <span style={{ position: "relative", display: "inline-block" }}>
        Farah
      </span>
      <span style={{ position: "relative", display: "inline-block", color: goldColor }}>
        Bakes
      </span>
    </div>
  );
}
