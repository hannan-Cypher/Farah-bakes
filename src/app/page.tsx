"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import MenuFilter, { ProductItem } from "@/components/MenuFilter/MenuFilter";
import PackagingShowcase from "@/components/PackagingShowcase/PackagingShowcase";
import HowItStarted from "@/components/HowItStarted/HowItStarted";
import Values from "@/components/Values/Values";
import BakeryBanner from "@/components/BakeryBanner/BakeryBanner";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";
import Footer from "@/components/Footer/Footer";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import OrderInquiryModal from "@/components/OrderInquiryModal/OrderInquiryModal";

export default function Home() {
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<ProductItem | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState<ProductItem | null>(null);

  const handleOpenInquiry = (product?: ProductItem | null) => {
    setSelectedInquiryProduct(product || null);
    setIsInquiryOpen(true);
  };

  return (
    <main>
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />
      <Hero onOpenInquiry={() => handleOpenInquiry()} />
      <MenuFilter onSelectProduct={(product) => setSelectedQuickViewProduct(product)} />
      <PackagingShowcase onOpenInquiry={() => handleOpenInquiry()} />
      <HowItStarted onOpenInquiry={() => handleOpenInquiry()} />
      <Values />
      <BakeryBanner />
      <InstagramFeed />
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        onOrderProduct={(prod) => handleOpenInquiry(prod)}
      />

      {/* Slide-over Custom Order Inquiry Drawer */}
      <OrderInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedProduct={selectedInquiryProduct}
      />
    </main>
  );
}

