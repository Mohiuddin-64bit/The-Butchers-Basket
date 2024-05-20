import { MdDeliveryDining } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("https://the-butchers-basket-backend.vercel.app/product", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data.slice(0, 5).map((item: any) => ({
    meatsId: item._id ,
  }));
};

const SingleProduct = async ({ params }: any) => {
  const res = await fetch(`https://the-butchers-basket-backend.vercel.app/product/${params.meatsId}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  console.log(data);

  const { imageLink, rating, category, title, price, _id, description } = data;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="grid grid-cols-12 justify-items-center ">
          <div className="col-span-12 md:col-span-2 lg:col-span-4 flex mt-4 md:mt-0 mb-4 md:mb-0 md:flex-col gap-x-9 gap-y-3 order-last sm:order-first">
            <Image
              width={144}
              height={128}
              className="h-32 w-36 object-cover"
              alt="NextUI hero Image with delay"
              src="/images/1.jpg"
            />
            <Image
              width={144}
              height={128}
              className="h-32 w-36 object-cover"
              alt="NextUI hero Image with delay"
              src="/images/2.jpg"
            />
            <Image
              width={144}
              height={128}
              className="h-32 w-36 object-cover"
              alt="NextUI hero Image with delay"
              src="/images/1.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <Image
              width={500}
              height={500}
              isZoomed
              className="h-[420px] w-full object-cover"
              alt="NextUI hero Image with delay"
              src={imageLink}
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-2xl mb-7">${price}</p>
          <p className="text-lg mb-7">
            Category: <span className="font-semibold">{category}</span>
          </p>
          <div className="flex items-center gap-3 mb-7">
            <span>Rating:</span>
            <div className="flex gap-1">
              <span>{rating}</span>
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <ul className="list-disc ml-5 mb-4">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>

          <p className="flex items-center gap-3">
            <MdDeliveryDining className="text-xl" />
            Free worldwide shipping on all orders over $100
          </p>
          <p className="flex items-center gap-3">
            <TbTruckReturn className="text-xl" />
            Delivers in: 3-7 Working Days Shipping & Return
          </p>
        </div>
      </div>
      <div className="mt-24">
        <h3 className="mb-12 text-3xl font-bold">Description</h3>
        <p>
         {description}
        </p>
        <ul className="list-disc ml-5 mt-4">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
    </>
  );
};

export default SingleProduct;
