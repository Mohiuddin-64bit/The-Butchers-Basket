"use client";

import FilterProducts from "@/components/FilterProducts";
import MobileFilter from "@/components/MobileFilter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";
import React from "react";


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

const AllMeats = () => {


  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-12">
      <aside className="col-span-0 h-60 sm:col-span-5 md:col-span-4 lg:col-span-3 sm:grid hidden">
        <FilterProducts />
      </aside>
      <div className="col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-9">
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold">Our Collection of Meats</h3>
          <p className="mt-2 font-semibold">Showing 1–12 of 24 item(s)</p>
          <p className="mb-12 mt-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            quae?
          </p>
          <div className="mb-3 block sm:hidden">
            <MobileFilter />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-3">
            Showing 1–12 of 24 item(s)
          </p>
          <Progress
            size="sm"
            color="default"
            aria-label="Loading..."
            value={60}
            className="max-w-lg mx-auto mb-7"
          />
          <Button className="px-20 rounded-3xl">Load More</Button>
        </div>
      </div>
      
    </div>
  );
};

export default AllMeats;
