import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./reducers/products";
import categoryReducer from "./reducers/category";


export default configureStore({
  reducer: {
    categoryReducer,
    productReducer
  }
})