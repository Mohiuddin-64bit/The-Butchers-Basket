"use client"

import { Checkbox } from "@nextui-org/checkbox";
import React from "react";

const FilterProducts = () => {
  return (
    <>
      <div className="border dark:border-gray-600 px-4 sm:px-8 lg:px-12 py-5">
        <h3 className="text-2xl font-bold">Price Range</h3>
        <ul className="mt-4">
          {[
            "$0 - $20",
            "$20 - $40",
            "$40 - $60",
            "$60 - $80",
            "$80 - $100",
          ].map((range, index) => (
            <li key={index} className="text-sm pb-3">
              <Checkbox>{range}</Checkbox>
              {/* <RadioGroup>
                  <Radio value={range}>{range}</Radio>
                </RadioGroup> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="border dark:border-gray-600 px-4 sm:px-8 lg:px-12 py-5 my-5">
        <h3 className="text-2xl font-bold">Categories</h3>
        <ul className="mt-4">
          {["Buffalo", "Chicken", "Beef", "Goat", "Lamb"].map(
            (category, index) => (
              <li key={index} className="text-sm pb-3">
                <Checkbox>{category}</Checkbox>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="border dark:border-gray-600 px-4 sm:px-8 lg:px-12 py-5">
        <h3 className="text-2xl font-bold">Ratings</h3>
        <ul className="mt-4">
          {[
            "4 stars & above",
            "3 stars & above",
            "2 stars & above",
            "1 star & above",
          ].map((rating, index) => (
            <li key={index} className="text-sm pb-3">
              <Checkbox>{rating}</Checkbox>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterProducts;
