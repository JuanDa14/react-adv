import { ProductBottons } from "../components/ProductBottons";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

import ProductCard from "../components/index";

const product = {
  id: "1",
  title: "coffe mug",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <ProductCard product={product}>
          <ProductCard.Image />

          <ProductCard.Title title="Producto 1" />

          <ProductCard.Buttons />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage />

          <ProductTitle />

          <ProductBottons />
        </ProductCard>
      </div>
    </div>
  );
};
