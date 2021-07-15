import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./reducers/products";
import categoryReducer from "./reducers/category";
import bannerReducer from "./reducers/banner";

export default configureStore({
  reducer: {
    categoryReducer,
    productReducer,
    bannerReducer
  }
})