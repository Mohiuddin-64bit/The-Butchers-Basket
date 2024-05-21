import FlashSale from "@/components/FlashSale";
import HeroSlider from "@/components/HeroSlider";
import PopularProduct from "@/components/PopularProduct";
import Footer from "@/components/Shared/Footer";
import { Navbar } from "@/components/Shared/navbar";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl flex-grow px-6">
        <HeroSlider />
        <FlashSale />
        <TopCategories />
        <PopularProduct />
        <Footer />
      </div>
    </>
  );
}
