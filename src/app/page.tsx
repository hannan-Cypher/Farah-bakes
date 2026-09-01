"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedItems from "@/components/FeaturedItems/FeaturedItems";
import ArtisanalMenu from "@/components/ArtisanalMenu/ArtisanalMenu";
import HowItStarted from "@/components/HowItStarted/HowItStarted";
import Values from "@/components/Values/Values";
import Promotions from "@/components/Promotions/Promotions";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";
import Footer from "@/components/Footer/Footer";
import CustomOrderModal from "@/components/CustomOrderModal/CustomOrderModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  return (
    <main>
      {/* 1. Navigation */}
      <Navbar onOpenInquiry={openInquiry} />

      {/* 2. Hero — dark green, circular image, wave bottom */}
      <Hero onOpenInquiry={openInquiry} />

      {/* 3. Featured Items — horizontal scroll cards */}
      <FeaturedItems onOpenInquiry={openInquiry} />

      {/* 4. Artisanal Menu — dark section with diagonal banner + 2-col list */}
      <ArtisanalMenu onOpenInquiry={openInquiry} />

      {/* 5. How It Started — 3-col story section */}
      <HowItStarted onOpenInquiry={openInquiry} />

      {/* 6. Values — 3 icon columns */}
      <Values />

      {/* 7. Promotions — 2 side-by-side sale cards */}
      <Promotions onOpenInquiry={openInquiry} />

      {/* 8. Instagram Feed — 5-image grid */}
      <InstagramFeed />

      {/* 9. Footer — dark, wave, newsletter, links */}
      <Footer onOpenInquiry={openInquiry} />

      {/* Order Modal */}
      <CustomOrderModal isOpen={isInquiryOpen} onClose={closeInquiry} />
    </main>
  );
}
