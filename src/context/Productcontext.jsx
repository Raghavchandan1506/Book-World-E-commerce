import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useReducer } from "react";
import { useContext } from "react";
import reducer from "../Reducer/ProductReducer";


const AppContext= createContext();

const API = "https://raghavchandan1506.github.io/BookWorldAPI/db.json";

const initialState={
    isLoading: false,
    isError:false,
    products: [],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
}

const AppProvider=({children}) =>{

    const [state,dispatch]=useReducer(reducer, initialState);
    
    
    //All product API call
    const getProducts= async (url)=>{
        dispatch({type:"SET_LOADING"});
        try{
          const res = await axios.get(url);
          const products = await res.data;
          dispatch({type:"MY_API_DATA", payload: products});
        } catch (error){
            dispatch({type:"ERROR_API"});
        }
    };

    // single product api Call

    const getSingleProduct = async (url, id) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const productData = res.data.find((product) => product.id === parseInt(id)); // Filter product by id
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: productData });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };



    useEffect(()=>{
        getProducts(API);
    },[]);


    return(
    <AppContext.Provider value={{  ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
    );
};

const useProductContext =()=>{
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext };