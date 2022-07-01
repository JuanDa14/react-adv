import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";

import { Product, ProductContextProps } from "../interface/interfaces";

import styles from "../styles/styles.module.css";

//! Context
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct(0);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={` ${styles.productCard} ${className} `}>
        {children}
      </div>
    </Provider>
  );
};
