import React from "react";
import styles from "./Products.module.css";
import Product from "./Product/Product";
import { useSelector } from "react-redux";

const Products = () => {
  const product = useSelector((state) => state.api.apiData);

  return product ? (
    <div className={styles.products}>
      {product.map((prod) => (
        <Product productData={prod} key={prod.id} />
      ))}
    </div>
  ) : (
    "loading"
  );
};

export default Products;
