import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { title, subtitle } from "@/components/primitives";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/image";
import SwiperComponent from "./SwiperComponent";

const HeroSlider = async () => {
  const res = await fetch(`http://localhost:5000/product`, {});
  const data = await res.json();
  console.log(data);

  return (
    <section className="h-screen">
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>The Butcher&apos;s&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Basket&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Where Quality Meets Freshness - Delivering Heritage Breeds Straight
            to Your Kitchen
          </h2>
        </div>
      </div>
      <SwiperComponent data={data} />
    </section>
  );
};

export default HeroSlider;
