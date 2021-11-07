import * as actionTypes from "./shopping-types";

import { INITIAL_STATE } from "./constantData";

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //check if items is in cart already
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const exitInCart = state.cart.find((prod) => prod.id === item.id)
        ? true
        : false;
      return {
        ...state,
        cart: exitInCart
          ? state.cart.map((prod) =>
              prod.id === action.payload.id
                ? { ...prod, qty: prod.qty + 1 }
                : prod
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
