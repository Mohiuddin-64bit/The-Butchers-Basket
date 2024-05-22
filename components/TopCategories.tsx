"use client";

import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

import React from "react";

const TopCategories = () => {
  return (
    <section className="mt-32 mx-auto mb-36">
      <div className="text-center py-12">
        <h3 className="text-3xl font-bold mb-5">Top Categories</h3>
        <p className="max-w-[90ch] mx-auto">
          Explore our top categories and discover a wide range of products.
          Whether youre looking for electronics, fashion, home goods, or more,
          weve got you covered. Enjoy shopping with us!
        </p>
      </div>
      <div className="gap-5 grid grid-cols-12  grid-rows-2">
        <Card className="col-span-12 sm:col-span-4 row-span-2">
          <Link href={`/meats?category=Buffalo`}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="backdrop-blur-sm bg-black/30 rounded-lg">
                <h4 className="text-white  font-medium text-large px-3 py-2">
                  Buffalo
                </h4>
              </div>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-[300px] sm:h-[720px] object-cover"
              src="https://images.unsplash.com/photo-1613454320437-0c228c8b1723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVlZnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </Link>
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[350px]">
          <Link href={`/meats?category=Lamb`}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="backdrop-blur-sm bg-black/30 rounded-lg">
                <h4 className="text-white  font-medium text-large px-3 py-2">
                  Lamb
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1666620504958-4056c0def05b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFtYiUyMG1lYXR8ZW58MHx8MHx8fDA%3D"
            />
          </Link>
        </Card>
        <Card className="col-span-12 sm:col-span-4 row-span-2 ">
          <Link href={`/meats?category=Poultry`}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="backdrop-blur-sm bg-black/30 rounded-lg">
                <h4 className="text-white  font-medium text-large px-3 py-2">
                  Poultry
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full  h-[300px] sm:h-[720px] object-cover"
              src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpY2tlbiUyMG1lYXR8ZW58MHx8MHx8fDA%3D"
            />
          </Link>
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[350px]">
          <Link href={`/meats?category=Beef`}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="backdrop-blur-sm bg-black/30 rounded-lg">
                <h4 className="text-white  font-medium text-large px-3 py-2">
                  Beef
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1551028150-64b9f398f678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JvdW5kJTIwTWVhdHxlbnwwfHwwfHx8MA%3D%3D"
            />
          </Link>
        </Card>
      </div>
      <div className="text-center">
        <Button className="mt-10">View All</Button>
      </div>
    </section>
  );
};

export default TopCategories;
