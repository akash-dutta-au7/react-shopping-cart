import { ADD_TO_CART } from "../actionTypes";
import { addToCart } from "../utils";
const initialState = {
  hidden: true,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default reducer;
