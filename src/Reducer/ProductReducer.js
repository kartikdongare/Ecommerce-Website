const ProductReducer=(state,action)=>{
    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true,
            }
        case 'SET_API_DATA':
            const featureData=action.payload.filter((curEle)=>{
               return curEle.featured === true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData
            }
        case 'SET_ERROR':
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case 'SET_SINGLE_PRODUCT_LOADING':
            return{
                ...state,
                isSingleProduct:true,
            }
        case 'SET_SINGLE_PRODUCT':
            return{
                ...state,
                singleProduct:action.payload,
                isSingleProduct:false
            }
        case 'SET_SINGLE_PRODUCT_ERROR':
            return{
                ...state,
                isSingleProduct:false,
                isError:true
            }
        default:
            return state;
    }
}
export default ProductReducer;