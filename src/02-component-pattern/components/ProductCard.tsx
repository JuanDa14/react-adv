import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";

import { ProductCardProps, ProductContextProps } from "../interface/interfaces";

import styles from "../styles/styles.module.css";

//! Context
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(0);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
