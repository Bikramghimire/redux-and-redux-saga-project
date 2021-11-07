import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

const Navbar = () => {
  const cartData = useSelector((state) => state.shop.cart);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let value = 0;

    if (cartData) {
      cartData.forEach((elm) => {
        value += elm.qty;
        console.log("value:", value);
      });
    }
    setCounter(value);
  }, [cartData]);
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <i className="fas fa-shopping-cart fa-3x"></i>
          <div className={styles.cart__counter}>{counter}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
