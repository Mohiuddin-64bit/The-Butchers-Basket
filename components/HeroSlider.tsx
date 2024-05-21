"use client";
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

const images = [
  {
    url: "https://images.unsplash.com/photo-1538159021332-8f28e9eca2fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1553536645-f83758b55d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1633908481624-0855811183a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1649752876592-abf97e813023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
];

const HeroSlider = () => {
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
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper mt-12"
        >
          <div className="flex">
            <>
              {images.map((image, index) => (
                <SwiperSlide className="mb-12" key={index}>
                  <div className="flex items-center justify-center">
                    <Image
                      isZoomed={true}
                      alt="NextUI hero Image"
                      className="w-[400px] object-center object-cover h-[340px]"
                      src={image.url}
                    />
                  </div>
                  <p className="text-lg mt-2">Double Bed</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      <del className="text-sm text-gray-500">$20</del>
                      <p className="text-sm">$20</p>
                    </div>
                    <IoMdAddCircleOutline className="text-xl cursor-pointer" />
                  </div>
                </SwiperSlide>
              ))}
            </>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default HeroSlider;
