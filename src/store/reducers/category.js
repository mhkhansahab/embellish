const initialState = {
    categories : [
        {title: "Lucknowi Poshak",value: "poshak", image: "./../../assets/categories/poshak.jpg"},
        {title: "Indo-Westernn",value:"indo", image: "./../../assets/categories/indo-western2.jpg"},
        {title: "Traditional-Wears",value:"traditional", image: "./../../assets/categories/traditional.jpg"},
        {title: "Formals",value:"formals", image: "./../../assets/categories/indo-western.jpg"},
        {title: "Beauty",value:"beauty", image: "./../../assets/categories/jewellary.jpg"},
        {title: "Accessories", value:"accessories",image: "./../../assets/categories/beauty.jpg"},
        {title: "Shoes",value:"shoes", image: "./../../assets/categories/shoes.jpg"},]
}


const reducer = (state = initialState, actions) =>{
    //const {type, payload} = actions;
    return state;
}

export default reducer;