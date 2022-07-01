import { ProductBottons } from "../components/ProductBottons";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

import ProductCard from "../components/index";

import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="text-white bg-dark">
          <ProductCard.Image className="custom-image" />

          <ProductCard.Title
            title="Producto 1"
            className="text-white text-bold"
          />

          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="text-white bg-dark">
          <ProductImage className="custom-image" />

          <ProductTitle className="text-white text-bold" />

          <ProductBottons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#ccc",
          }}
        >
          <ProductImage />

          <ProductTitle
            style={{
              color: "#000",
              fontWeight: "bold",
            }}
          />

          <ProductBottons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
