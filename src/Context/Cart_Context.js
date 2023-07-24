import {createContext, useContext, useReducer} from 'react'
import reducer from '../Reducer/cartReducer'
import { useEffect } from 'react';
let CartContext=createContext();
const getLocalCartData=()=>{
    let locaCartData=localStorage.getItem('setData')
    // if(!locaCartData){
    //     return []
    // }
    // else{
    //     return JSON.parse(locaCartData)
    // }

    const parsedData=JSON.parse(locaCartData)
    if(!Array.isArray(parsedData)) return []

    return parsedData
}
const initialState={
    cart:getLocalCartData(),
    total_item:'',
    total_price:'',
    shipping_fee:5000
};

const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    
    const addToCart=(id,color,amount,product)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product}})
    }
    //to remove the individual item from cart
    const removeItem=(id)=>{
        dispatch({type:'REMOVE_ITEAM',payload:id})
    }
    //to clear the cart
    const clearCart=()=>{
        console.log('called')
        dispatch({type:'CLEAR_CART'})
        // console.log('called')
    }
    //increament and decreament the product in cart
    const setDecrement=(id)=>{
        dispatch({type:'SET_DECREAMENT',payload:id})
     }
     const setIncrement=(id)=>{
        dispatch({type:'SET_INCREAMENT',payload:id})
     }
    //to add the data to localStorage
    useEffect(()=>{
        dispatch({type:'CART_TOTLE_ITEM'})
        dispatch({type:'CART_TOTAL_PRICE'})
       localStorage.setItem('setData',JSON.stringify(state.cart))
    },[state.cart])

    return<CartContext.Provider value={{...state,addToCart,clearCart,removeItem,setDecrement,setIncrement}}>
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
   return  useContext(CartContext)
}
export {CartProvider,useCartContext}