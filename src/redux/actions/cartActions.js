import axios from "axios";

import * as actionTypes from "../constants/cartConstants.js";

const URL = "https://flipkart-clone-backend-4t5g.onrender.com";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({
      type: actionTypes.ADD_TO_CART_SUCCESS,
      payload: { ...data, quantity },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_CART_ERROR,
      payload: error.message,
    });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
