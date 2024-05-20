"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";


const ProductCard = (props:any) => {
  const route = useRouter();



  const { imageLink, category, title, price, _id } = props.item;
  return (
    <div>
      <Card shadow="sm" isPressable onPress={() => route.push(`/meats/${_id}`)}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-[300px] object-cover h-[200px] md:h-[280px] lg:h-[340px]"
            src={imageLink}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <div className="flex flex-col">
            <p className="text-lg mt-2">{title}</p>
            <div className="flex gap-2">
              <del className="text-sm text-gray-500">$20</del>
              <p className="text-sm">${price}</p>
            </div>
          </div>
          <IoMdAddCircleOutline className="text-xl cursor-pointer" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
