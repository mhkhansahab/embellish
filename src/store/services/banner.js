import { SET_ALL_BANNERS } from "../actions/banner";

const baseURL = "https://embellish.herokuapp.com/";


export const getAllBanners = ()=> async(dispatch) => {
    const fetchData = {
        "content-type": "application/json",
        "method" : "GET"
    }

    try{
        const response = await fetch(baseURL + "get_banners",fetchData);
        const jsonResponse = await response.json();
        dispatch({
            type : SET_ALL_BANNERS,
            payload : jsonResponse.banners
        })
    }catch(error){
        console.log(error);
    }
}