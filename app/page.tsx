import FlashSale from "@/components/FlashSale";
import HeroSlider from "@/components/HeroSlider";
import Partners from "@/components/Partners";
import PopularProduct from "@/components/PopularProduct";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <>
        <HeroSlider />
        <FlashSale />
        <TopCategories />
        <PopularProduct />
        {/* <Partners /> */}
    </>
  );
}
