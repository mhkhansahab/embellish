import { setAllCategories } from "../actions/category";


const baseURL = "https://embellish.herokuapp.com/";

export const getAllCategories = ()=> async (dispatch)=> {
    try{
        const fetchData = {
            "content-type": "application/json",
            "method" : "GET"
        }
        const response = await fetch(baseURL + "get_categories", fetchData);
        const jsonResponse = await response.json();
        dispatch(setAllCategories(jsonResponse.categories));        
    }catch(err){
        console.log(err);
    }
}