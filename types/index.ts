import { title } from './../components/primitives';
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


// Props for individual product (You might need to modify this based on actual product structure)
export interface Product {
  _id: string;
  name: string;
  price: number;
  title: string;
  category: string;
  imageLink: string;
  rating: number;
}

