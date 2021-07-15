export const SET_ALL_BANNERS = "SET_ALL_BANNERS";


export const setAllBanners = (banners)=>(dispatch)=>{
    dispatch({
        type : SET_ALL_BANNERS,
        payload : banners
    })
}