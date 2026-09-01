"use client";

import Image from "next/image";
import styles from "./InstagramFeed.module.css";

const posts = [
  { image: "/images/farah-bakes/img_1630.jpg", caption: "Morning Buns" },
  { image: "/images/farah-bakes/img_1621.jpg", caption: "Artisan Cookies" },
  { image: "/images/farah-bakes/img_1618.jpg", caption: "Fresh from the Oven", always: true },
  { image: "/images/farah-bakes/img_1574.jpg", caption: "4th of July Essentials" },
  { image: "/images/farah-bakes/img_1560.jpg", caption: "Seasonal Specials" },
];

export default function InstagramFeed() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.header}>
        <h2 className={styles.title}>Follow @FarahBakes</h2>
      </div>

      <div className={styles.grid}>
        {posts.map((post, i) => (
          <a
            key={i}
            className={styles.cell}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={post.caption}
          >
            <Image
              src={post.image}
              alt={post.caption}
              fill
              sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 20vw"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay}>
              <span className={`${styles.caption} ${post.always ? styles.captionAlways : ""}`}>
                {post.caption}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
