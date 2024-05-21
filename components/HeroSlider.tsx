
import { title, subtitle } from "@/components/primitives";
import SwiperComponent from "./SwiperComponent";


const HeroSlider = async() => {

  const res = await fetch(
    "https://the-butchers-basket-backend.vercel.app/product",
  );
  const data = await res.json();

  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block text-center justify-center">
            <h1 className={title()}>The Butcher&apos;s&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>Basket&nbsp;</h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
              Where Quality Meets Freshness - Delivering Heritage Breeds
              Straight to Your Kitchen
            </h2>
          </div>
        </div>
        <SwiperComponent data={data} />
      </section>
    </>
  );
};

export default HeroSlider;
