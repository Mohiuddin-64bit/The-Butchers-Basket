import { MdDeliveryDining } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import React from "react";

const SingleProduct = ({ params }: any) => {
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
              src="/images/1.jpg"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-3xl font-semibold">Double bed and side tables</h3>
          <p className="text-2xl mb-7">$45.33</p>
          <p className="text-lg mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit, nunc euismod efficitur ultricies, purus felis varius
            libero, vel ultricies nunc nisl vitae nunc. Donec sed semper tellus.
            Donec in libero nec libero eleifend aliquam. Nullam suscipit, nunc
            euismod efficitur ultricies, purus felis varius libero, vel
            ultricies nunc nisl vitae nunc. Donec sed semper tellus. Donec in
            libero nec libero eleifend aliquam.
          </p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit, nunc euismod efficitur ultricies, purus felis varius libero,
          vel ultricies nunc nisl vitae nunc. Donec sed semper tellus. Donec in
          libero nec libero eleifend aliquam. Nullam suscipit, nunc euismod
          efficitur ultricies, purus felis varius libero, vel ultricies nunc
          nisl vitae nunc. Donec sed semper tellus. Donec in libero nec libero
          eleifend aliquam.purus felis varius libero, vel ultricies nunc
          nisl vitae nunc. Donec sed semper tellus. Donec in libero nec libero
          eleifend aliquam.purus felis varius libero, vel ultricies nunc
          nisl vitae nunc. Donec sed semper tellus. Donec in libero nec libero
          eleifend aliquam.
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
