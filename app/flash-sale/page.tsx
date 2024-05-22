import CountDown from "@/components/CountDown";
import ProductCard from "@/components/ProductCard";
import React from "react";

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
      <header className="mb-12">
        <div className="flex items-center gap-12 mb-5">
          <h3 className="text-3xl font-bold">Flash Sale</h3>
          <CountDown />
        </div>
        <p className="font-semibold text-lg">Showing 1–12 of 24 item(s)</p>
        <p className="text-base mb-5 mt-3">
          Welcome to our website! We are dedicated to providing you with the
          best products and services. Our team is always ready to assist you.
          Enjoy your shopping experience!
        </p>
      </header>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {flashSale.map((item: any) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </main>
    </>
  );
};

export default FlashSale;
