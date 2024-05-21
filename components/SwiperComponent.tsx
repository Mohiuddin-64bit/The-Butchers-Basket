"use client";

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

const SwiperComponent = ({ data } : {data: React.ReactNode}) => {
  return (
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
        {data?.map((item, index) => (
          <SwiperSlide className="mb-12" key={index}>
            <div className="flex items-center justify-center">
              <Image
                isZoomed={true}
                alt="NextUI hero Image"
                className="w-[400px] object-center object-cover h-[340px]"
                src={item.imageLink}
              />
            </div>
            <p className="text-lg mt-2">{item.title}</p>
            <div className=" flex items-center justify-between">
              <p className="text-sm">${item.price}</p>
              <IoMdAddCircleOutline className="text-xl cursor-pointer" />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
