import * as actionType from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART_SUCCESS:
      const item = action.payload;
      const existing = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === existing.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [ ...state.cartItems, item ] };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
