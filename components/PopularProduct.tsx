import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

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

const PopularProduct = async () => {
  // const handleNavigateToProductDetail = (index: Number) => {
  //   route.push(`/meats/${index}`);
  // };

  const res = await fetch("http://localhost:5000/product", {
    cache: "no-cache",
  });
  const data = await res.json();
  const popularItem = [...data].sort((a: any, b: any) => b.rating - a.rating);

  return (
    <section className="mx-auto mt-24 md:mt-12 lg:mt-0">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-3xl font-bold">Most Popular Products</h3>
        <Link href="/meats">
          <Button>View All</Button>
        </Link>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {popularItem.slice(0, 4).map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
