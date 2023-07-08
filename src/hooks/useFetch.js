
/*
import { useEffect, useState } from "react": These lines import the useEffect and useState hooks from the React library.
import { fetchDataFromApi } from "../utils/api";: This line imports the fetchDataFromApi function from the utils/api file.
const userFetch = (endpoint) => {: This line defines a function called userFetch that takes an endpoint as its input parameter.
const [data, setData] = useState();: This line uses the useState hook to define a state variable called data. The data variable will be used to store the data that is returned from the API.
useEffect(async () => { makeApiCall(); }, []);: This line uses the useEffect hook to make a call to the makeApiCall function. The useEffect hook will run after the component has been mounted and whenever the endpoint prop changes.
const makeApiCall = async () => {: This line defines a function called makeApiCall that makes a call to the fetchDataFromApi function.
const res = await fetchDataFromApi(endpoint);: This line makes a call to the fetchDataFromApi function and stores the response object in the res variable.
setData(res);: This line updates the data state variable with the data that is returned from the fetchDataFromApi function.
return data;: This line returns the data state variable.
export default userFetch;: This line exports the userFetch component.
*/





import { useEffect, useState } from "react";
import { fetchDataFromApi } from '../utils/api'


const useFetch = (endpoint) => {
    const [data, setData] = useState()

    useEffect(() => {
        makeApiCall()
    }, [])

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }

    return { data }
}

export default useFetch;