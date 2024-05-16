"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const cart = [
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
  { url: "/images/2.jpg" },
];

const PopularProduct = () => {
  return (
    <section className="mx-auto mt-24 md:mt-12 lg:mt-0">
      <div className="text-center py-12">
        <h3 className="text-3xl font-bold mb-5">Top Categories</h3>
        <p className="max-w-[90ch] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident
          impedit temporibus laboriosam ipsa hic saepe incidunt, enim maiores
          natus molestiae quisquam.
        </p>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {cart.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.url}
                className="w-full object-cover h-[340px]"
                src={item.url}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <div className="flex flex-col">
                <p className="text-lg mt-2">Vegetables</p>
                <div className="flex gap-2">
                  <del className="text-sm text-gray-500">$20</del>
                  <p className="text-sm">$20</p>
                </div>
              </div>
              <IoMdAddCircleOutline className="text-xl cursor-pointer" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
