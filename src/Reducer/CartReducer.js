import React from 'react'

const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

        let existingProduct = state.cart.find((curItem) => curItem.id === id);

        if (existingProduct) {

            let updatedProduct = state.cart.map((curEle)=>{
                if(curEle.id === id){
                    let newAmount = curEle.amount + amount;
                    return {
                    ...curEle,
                    amount: newAmount,
                }
                }else{
                    return curEle;
                }
                
            })
            return{
                ...state,
                cart: updatedProduct
            }
        } else {

            let CartProduct;
            CartProduct = {
                id: id,
                name: product.name,
                amount,
                image: product.image[0],
                price: product.price
            }

            return {
                ...state,
                cart: [...state.cart, CartProduct]

            }
        }
    }


    //set increase/decrease toggle in cart
    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((curEle)=>{
            if(curEle.id === action.payload){
                let decAmount = curEle.amount - 1;

                if(decAmount <=1){
                    decAmount = 1;
                }

                return{
                    ...curEle,
                    amount:decAmount
                }
            }else{
                return curEle;
            }
        });
        return {...state, cart:updatedProduct};
    }
    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((curEle)=>{
            if(curEle.id === action.payload){
                let InAmount = curEle.amount + 1;

                return{
                    ...curEle,
                    amount:InAmount
                }
            }else{
                return curEle;
            }
        });
        return {...state, cart:updatedProduct};
    }



    //total cart value on navbar
    if (action.type === "CART_TOTAL_ITEM"){
        let updatedcartvalue = state.cart.reduce((initialval,curEle)=>{
            let { amount } = curEle;
            initialval = initialval+amount;
            return initialval;
        },0);
        return {
            ...state,
            total_item : updatedcartvalue
        }
    }


    //Cart Grand total price
    if(action.type === "CART_TOTAL_PRICE"){
        let total_price = state.cart.reduce((initialval,curEle)=>{
            let{price, amount} = curEle;
            initialval = initialval + (price*amount)

            return initialval;
        },0);

        return {
            ...state,
            total_price
        }
    }



    //remove individual item from cart
    if (action.type === "REMOVE ITEM") {
        let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,

        }
    }




    //clear whole cart
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }


    return state;
}

export default CartReducer
