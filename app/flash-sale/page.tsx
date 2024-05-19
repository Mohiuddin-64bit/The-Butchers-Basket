"use client";

import ProductCard from "@/components/ProductCard";
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
    title: "Banana",
    img: "/images/2.jpg",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "/images/4.jpg",
    price: "$12.20",
  },
  {
    title: "Watermelon",
    img: "/images/4.jpg",
    price: "$12.20",
  },
  {
    title: "Watermelon",
    img: "/images/4.jpg",
    price: "$12.20",
  },
];

const FlashSale = () => {
  return (
    <>
      <header className="mb-12">
        <h3 className="text-3xl font-bold mb-5">Flash Sale</h3>
        <p className="font-semibold text-lg">Showing 1–12 of 24 item(s)</p>
        <p className="text-base mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          fringilla felis, nec tincidunt mi ultricies nec. Nam in felis quis
          nisl tincidunt aliquet
        </p>
      </header>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {list.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </main>
    </>
  );
};

export default FlashSale;
