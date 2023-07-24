import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer'

const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products'

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleProduct:false,
    singleProduct:{}
};

const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState);

    const getProduct = async (url) => {
        dispatch({type:'SET_LOADING'})
       try {
        const res = await axios.get(url);
        const products = res.data
        // console.log(products);
        dispatch({type:'SET_API_DATA', payload:products})
       } catch (error) {
        dispatch({type:'SET_ERROR'})
       }
    }

    //my 2nd api call for single product
    const getSingleProduct= async(url)=>{
        dispatch({type:'SET_SINGLE_PRODUCT_LOADING'})
        try {
            const res=await axios.get(url);
            const singleProduct=await res.data;
            dispatch({type:'SET_SINGLE_PRODUCT', payload:singleProduct})
        } catch (error) {
            dispatch({type:'SET_SINGLE_PRODUCT_ERROR'})
        }
    }
    useEffect(() => {
        getProduct(API)
    },[])

    return (
        <AppContext.Provider value={{ ...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useProductContext }