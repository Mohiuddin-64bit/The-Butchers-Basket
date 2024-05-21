import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


// export interface TProductsTypes {
//   key: string;
//   item: TProductsTypes;
//   _id: string;
//   imageLink: string;
//   category: string;
//   title: string;
//   quantity: number;
//   description: string;
//   rating: number;
  
// }


// Interfaces for the filter categories and their selections
export interface Filters {
  category: string[];
  priceRange: string[];
  rating: string[];
}

// Props for FilterProducts component
export interface FilterProductsProps {
  onFilterChange: (filterType: keyof Filters, value: string, checked: boolean) => void;
}

// Props for individual product (You might need to modify this based on actual product structure)
export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
}

// Props for ProductCard component (Assuming you have one)
export interface ProductCardProps {
  item: Product;
}
