import { ADD_TO_CART } from "../actionTypes";

//add to cart

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
