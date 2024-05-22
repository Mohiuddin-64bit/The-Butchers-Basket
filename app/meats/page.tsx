import FilterProducts from "@/components/FilterProducts";
import MobileFilter from "@/components/MobileFilter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";
import React from "react";

const AllMeats = async ({ searchParams }: { searchParams: string }) => {
  const params = new URLSearchParams(searchParams);

  const res = await fetch(
    `https://the-butchers-basket-backend.vercel.app/product?${params}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();

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
            Discover a wide range of products tailored to your needs. Our
            commitment to quality and customer satisfaction makes us a trusted
            choice for shoppers.
          </p>
          <div className="mb-3 block sm:hidden">
            <MobileFilter />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item: any) => (
            <ProductCard key={item._id} item={item} />
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
