export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_LATEST_ARRIVALS = "SET_LATEST_ARRIVALS";
export const SET_CATEGORY_PRODUCTS = "SET_CATEGORY_PRODUCTS";
export const SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";

export const setAllProducts = (products)=>(dispatch)=>{
    dispatch({
        type : SET_ALL_PRODUCTS,
        payload : products
    })
}
export const setLatestArrivals = (products)=>(dispatch)=>{
    dispatch({
        type : SET_LATEST_ARRIVALS,
        payload : products
    })
}
export const setCategoryProducts = (products, category)=>(dispatch)=>{
    dispatch({
        type : SET_CATEGORY_PRODUCTS,
        payload : {
            products,
            category
        }
    })
}
export const setProductDetails = (product)=>(dispatch)=>{
    dispatch({
        type : SET_PRODUCT_DETAILS,
        payload : product
    })
}