import { Button } from "@nextui-org/button";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import CountDown from "./CountDown";

const FlashSale = async () => {
  const res = await fetch(
    "https://the-butchers-basket-backend.vercel.app/product",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  const flashSale = data.filter((item: any) => item.isFlashSale === true);

  return (
    <>
      <section className=" mx-auto mt-24 md:mt-12 lg:mt-0">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-bold">Flash Sale</h3>
            <CountDown />
          </div>
          <Link className="hidden sm:flex" href="/flash-sale">
            <Button>View All</Button>
          </Link>
        </div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          <>
            {flashSale.slice(0, 4).map((item: any) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </>
        </div>
        <div className="text-center sm:hidden mt-12">
          <Link className="" href="/flash-sale">
            <Button>View All</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FlashSale;
