import { ProductBottons } from "./ProductBottons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCPros } from "../interface/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCPros = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductBottons,
});

export default ProductCard;
