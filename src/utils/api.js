// axis is global method -through we call the data
// imports the Axios library into the current JavaScript file
import axios from "axios";

//constant called params that contains the HTTP headers that will be used for the request. The Authorization header specifies the API key that will be used to authenticate the request.
const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};
//This line defines a function called fetchDataFromApi that takes a URL as its input parameter. The function first tries to make a get request to the URL using the axios library. The get method takes two parameters: the URL of the request and an object containing the HTTP headers that will be used for the request. In this case, the HTTP headers are defined in the params constant.
export const fetchDataFromApi = async (url) => {
    try {
        // This line makes the get request and stores the response object in the data variable.
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

//for payment
export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
});
