"use client";

import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import React from "react";

const TopCategories = () => {
  return (
    <section className="mt-32 mx-auto mb-36">
      <div className="text-center py-12">
        <h3 className="text-3xl font-bold mb-5">Top Categories</h3>
        <p className="max-w-[90ch] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident
          impedit temporibus laboriosam ipsa hic saepe incidunt, enim maiores
          natus molestiae quisquam.
        </p>
      </div>
      <div className="gap-5 grid grid-cols-12  grid-rows-2">
        <Card className="col-span-12 sm:col-span-4 row-span-2">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/1.jpg"
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              New arrivals
            </p>
            <h4 className="text-white font-medium text-large">
              Discover the latest
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/2.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 row-span-2">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/2.jpg"
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/4.jpg"
          />
        </Card>
      </div>
      <div className="text-center">
        <Button className="mt-10">View All</Button>
      </div>
    </section>
  );
};

export default TopCategories;
