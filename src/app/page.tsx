import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedItems from "@/components/FeaturedItems/FeaturedItems";
import HowItStarted from "@/components/HowItStarted/HowItStarted";
import Values from "@/components/Values/Values";
import BakeryBanner from "@/components/BakeryBanner/BakeryBanner";
import ArtisanalMenu from "@/components/ArtisanalMenu/ArtisanalMenu";
import Promotions from "@/components/Promotions/Promotions";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedItems />
      <HowItStarted />
      <Values />
      <BakeryBanner />
      <ArtisanalMenu />
      <Promotions />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
