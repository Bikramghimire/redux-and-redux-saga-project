import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/shopping/shopping-actions";

const Product = ({ productData }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  const handleCurrentItem = (prodData) => {
    dispatch(loadCurrentItem(prodData));
  };
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={productData.image} alt="" />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{productData.title}</p>
        <p className={styles.details__desc}>{productData.description}</p>
        <p className={styles.details__price}>$ {productData.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${productData.id}`}>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
            onClick={() => handleCurrentItem(productData)}
          >
            View Item
          </button>
        </Link>
        <Link to={`/cart`}>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
            onClick={() => handleAddToCart(productData.id)}
          >
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
