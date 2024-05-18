import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const ProductCard = (props : any) => {
  const { item } = props;
  return (
    <div>
      <Card
        shadow="sm"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.title}
            className="w-[300px] object-cover h-[200px] md:h-[280px] lg:h-[340px]"
            src={item.img}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <div className="flex flex-col">
            <p className="text-lg mt-2">Vegetables</p>
            <div className="flex gap-2">
              <del className="text-sm text-gray-500">$20</del>
              <p className="text-sm">$20</p>
            </div>
          </div>
          <IoMdAddCircleOutline className="text-xl cursor-pointer" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
