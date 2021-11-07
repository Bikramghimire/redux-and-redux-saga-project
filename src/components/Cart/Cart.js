import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const cartData = useSelector((state) => state.shop.cart);
  const [totalQty, settotalQty] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    let price = 0;
    if (cartData) {
      cartData.forEach((ele) => {
        total = ele.qty + total;
        price = ele.price * ele.qty + price;
      });
      settotalPrice(price);
      settotalQty(total);
    }
  }, [cartData]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cartData.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalQty} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
