const baseURL = "https://embellish.herokuapp.com/";

export const setNewsletterSubscription = (email) => async () => {
    const fetchData = {
        "content-type": "application/json",
        "method" : "GET"
    }
    try{
        const response = await fetch(baseURL + "newsletter/" + email, fetchData);
        const jsonResponse = await response.json();
        return jsonResponse;
    }catch(err){
        console.log(err);
    }
}

