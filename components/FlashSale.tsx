"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const list = [
  {
    title: "Orange",
    img: "https://images.unsplash.com/photo-1680561218941-a14f10300c42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "/images/2.jpg",
    price: "$3.00",
  },
  {
    title: "Raspberry",
    img: "/images/4.jpg",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "/images/2.jpg",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "/images/4.jpg",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "https://images.unsplash.com/photo-1643473232037-08736b56178d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "/images/2.jpg",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "/images/4.jpg",
    price: "$12.20",
  },
];

const FlashSale = () => {
  return (
    <section className="container mt-24 md:mt-12 lg:mt-0">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-3xl font-bold">Flash Sale</h3>
        <Button>View All</Button>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.slice(0, 4).map((item, index) => (
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
                alt={item.title}
                className="w-full object-cover h-[340px]"
                src={item.img}
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

export default FlashSale;
