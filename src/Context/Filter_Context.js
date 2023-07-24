import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/filterReducer'

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view:true,
    sorting_value:'lowest',
    filter:{
        text:'',
        category:'All',
        company:'All',
        color:'All',
        maxPrice:0,
        price:0,
        minPrice:0
    }
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    // To set grid view
    const setGridView=()=>{
        return dispatch({type:'SET_GRID_VIEW'})
    }

    const setGridList=()=>{
        return dispatch({type:'SET_GRID_LIST'})
    }

    const sorting=(e)=>{
        let userValue=e.target.value;
        return dispatch({type:'GET_SORT_VALUE',payload:userValue})
    }

    //update the filtr values
    const updateFilterValue=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        return dispatch({type:'UPDATE_FILTERS_VALUE',payload:{name,value}});
    }

    //clear the filter 
    const clearFilter=()=>{
        return dispatch({type:'CLEAR_FILTER'})
    }

    useEffect(()=>{
        dispatch({type:'FILTER_PRODUCTS'})
        dispatch({type:'SORTING_PRODUCTS',payload:products})
    },[products,state.sorting_value,state.filter])

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
        console.log('hi kartik')
    }, [products])

    return (
        <FilterContext.Provider 
        value={{...state,setGridView,setGridList,sorting,updateFilterValue,clearFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return (useContext(FilterContext))
}