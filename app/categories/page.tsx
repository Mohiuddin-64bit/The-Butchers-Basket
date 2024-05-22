import ProductCard from "@/components/ProductCard";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

const CategoriesPage = async () => {
  const res = await fetch(
    "https://the-butchers-basket-backend.vercel.app/product",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  const images = data.map((item: any) => item.imageLink);
  console.log(images)
  const categoryNames = data.map((item: any) => item.category);
  

  const filterCategoryName = categoryNames.filter((item: any, index: any) => {
    return categoryNames.indexOf(item) === index;
  });

  return (
    <>
      <header className="mb-12">
        <h3 className="text-3xl font-bold mb-5">All Category</h3>
        <p className="font-semibold text-lg">Showing 1–12 of 24 item(s)</p>
        <p className="text-base mb-5 mt-3">
          Welcome to our category page! Here, you can explore a wide range of
          products grouped by categories. Our dedicated team has carefully
          curated these categories to enhance your shopping experience. If you
          need any assistance, were always here to help. Enjoy exploring!
        </p>
      </header>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {filterCategoryName.map((item: any, index: any) => (
          <Card key={index} className="relative" shadow="lg" isPressable>
            <CardBody className="p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item}
                className="w-[300px] object-cover h-[200px] md:h-[280px] lg:h-[340px]"
                src={images.map((image: any) => image)[index]}
              />
              <div className="absolute backdrop-blur-md dark:bg-black/30  dark:text-white text-4xl font-semibold z-10 top-0 left-0 w-full h-full flex items-center justify-center p-20">
                <h4>{item}</h4>
              </div>
            </CardBody>
          </Card>
        ))}
      </main>
    </>
  );
};

export default CategoriesPage;
