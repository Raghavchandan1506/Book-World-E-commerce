import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    const localCartData = localStorage.getItem("BookWorld");
    // If there's no data in localStorage, return an empty array
    if (!localCartData) {
        return [];
    }
    try {
        const parsedData = JSON.parse(localCartData);
        // If parsedData is not an array, return an empty array
        if (!Array.isArray(parsedData)) {
            return [];
        }
        return parsedData;
    } catch (error) {
        console.error("Error parsing local storage data:", error);
        return [];
    }
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50,
};

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    };


    //increase/descrease toggle in cart 
    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREMENT", payload:id});
    }
    
    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREMENT", payload:id});
    }

    //remove individual item
    const removeItem =(id)=>{
        dispatch({type:"REMOVE ITEM", payload:id})
    };


    //clear whole cart
    const clearCart =()=>{
        dispatch({type:"CLEAR_CART"});
    };


    // local Storage
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"})

        localStorage.setItem("BookWorld",JSON.stringify(state.cart));
    },[state.cart]);

    return (<CartContext.Provider value={{ ...state, addToCart,removeItem, clearCart, setDecrease,setIncrease }}>
        {children}
    </CartContext.Provider>
    )
}

export const useCartContext = ()=>{
    return useContext(CartContext);
};