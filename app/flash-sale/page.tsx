
import ProductCard from "@/components/ProductCard";
import React from "react";


const FlashSale = async() => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next:{
      revalidate: 30,
    }
  });
  const data = await res.json();

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
        {data.map((item:any) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </main>
    </>
  );
};

export default FlashSale;
