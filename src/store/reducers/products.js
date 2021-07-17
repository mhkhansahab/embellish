import {
  SET_ALL_PRODUCTS,
  SET_LATEST_ARRIVALS,
  SET_CATEGORY_PRODUCTS,
  SET_PRODUCT_DETAILS
} from "./../actions/products";

const initialState = {
  products: [],
  latestArrivals: [],
  categoryProducts: null,
  productDetails: null,
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SET_LATEST_ARRIVALS:
      return {
        ...state,
        latestArrivals: payload,
      };
    case SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: payload,
      };
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: payload,
      };
    default:
  }
  return state;
};

export default reducer;
