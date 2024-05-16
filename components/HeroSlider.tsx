"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdAddCircleOutline } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/image";

const images = [
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
  },
];

const HeroSlider = () => {
  return (
    <>
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <div className="flex">
          {images.map((image, index) => (
            <SwiperSlide className="mb-12" key={index}>
              <div className="flex items-center justify-center">
                <Image
                  isZoomed={true}
                  alt="NextUI hero Image"
                  className=""
                  // fallbackSrc="https://via.placeholder.com/300x200"
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
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
