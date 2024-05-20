import { Button } from "@nextui-org/button";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import CountDown from "./CountDown";

const FlashSale = async () => {
  const res = await fetch("https://the-butchers-basket-backend.vercel.app/product", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const flashSale = data.filter((item: any) => item.isFlashSale === true);
  console.log(flashSale)

  return (
    <section className=" mx-auto mt-24 md:mt-12 lg:mt-0">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-bold">Flash Sale</h3>
          <CountDown />
        </div>
        <Link href="/flash-sale">
          <Button>View All</Button>
        </Link>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {data.slice(0, 4).map((item: any) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
