import { SET_ALL_BANNERS } from "../actions/banner";

const initialState = {
    banners: []
}

const reducer = (state = initialState, actions) =>{
    const {type, payload} = actions;
    switch (type) {
        case SET_ALL_BANNERS:
            return {
                ...state,
                banners : payload
            }
        default:
    }
    return state;
}

export default reducer;