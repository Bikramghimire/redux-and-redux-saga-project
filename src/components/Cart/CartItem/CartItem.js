import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import {
  removeFromCart,
  adjustQty,
} from "../../../redux/shopping/shopping-actions";

const CartItem = ({ item }) => {
  const [qtyvalue, setQtyValue] = useState(item.qty);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleQty = (e) => {
    console.log(e);
    setQtyValue(e.target.value);
    dispatch(adjustQty(item.id, e.target.value));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={qtyvalue}
            onChange={handleQty}
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={() => handleDelete(item.id)}
        >
          <i class="fas fa-trash-alt fa-3x"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
