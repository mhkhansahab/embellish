import { SET_ALL_CATEGORIES } from "../actions/category";

const initialState = {
    categories : [],
}


const reducer = (state = initialState, actions) =>{
    const {type, payload} = actions;
    switch (type) {
        case SET_ALL_CATEGORIES:
            return{
                ...state,
                categories : payload
            }
        default:
    }
    return state;
}

export default reducer;