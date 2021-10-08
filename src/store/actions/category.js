export const SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES";



export const setAllCategories = (categories)=>(dispatch)=>{
    dispatch({
        type : SET_ALL_CATEGORIES,
        payload : categories
    })
}