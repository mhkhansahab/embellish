import { setAllProducts, setCategoryProducts, setLatestArrivals, setProductDetails } from "../actions/products";

const baseURL = "https://embellish.herokuapp.com/";
export const getAllProducts = ()=> async (dispatch)=> {
    try{
        const fetchData = {
            "content-type": "application/json",
            "method" : "GET"
        }
        const response = await fetch(baseURL + "product/all_products", fetchData);
        const jsonResponse = await response.json();
        dispatch(setAllProducts(jsonResponse.products));        
    }catch(err){
        console.log(err);
    }
}

export const getLatestArrivals = ()=> async (dispatch)=> {
    try{
        const fetchData = {
            "content-type": "application/json",
            "method" : "GET"
        }
        const response = await fetch(baseURL + "product/new_arrival", fetchData);
        const jsonResponse = await response.json();
        dispatch(setLatestArrivals(jsonResponse.products));
    }catch(err){
        console.log(err);
    }
}

export const getCategoryProducts = (category)=> async (dispatch)=> {
    try{
        const fetchData = {
            "content-type": "application/json",
            "method" : "GET"
        }
        const response = await fetch(baseURL + "product/category/" + category, fetchData);
        const jsonResponse = await response.json();
        dispatch(setCategoryProducts(jsonResponse.products, category));
    }catch(err){
        console.log(err);
    }
}

export const getProductDetails = (id)=> async (dispatch)=> {
    try{
        const fetchData = {
            "content-type": "application/json",
            "method" : "GET"
        }
        const response = await fetch(baseURL + "product/product/" + id, fetchData);
        const jsonResponse = await response.json();
        dispatch(setProductDetails(jsonResponse.product));
        return jsonResponse.product;
    }catch(err){
        console.log(err);
    }
}