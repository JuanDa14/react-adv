import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductBottons } from "./ProductBottons";
import { ProductCardHOCPros } from "../interface/interfaces";

export * from "./ProductImage";
export * from "./ProductTitle";
export * from "./ProductBottons";

export const ProductCard: ProductCardHOCPros = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductBottons,
});

export default ProductCard;
