
const filterReducer = (state, action) => {
    switch (action.type) {

        case 'LOAD_FILTER_PRODUCTS':
            let priceArr = action.payload.map((curPrice) => curPrice.price)

            // 1 way
            // console.log(Math.max.apply(null,priceArr))

            //2nd way
            //    let maxPrice=priceArr.reduce((initialVal,curVal)=> Math.max(initialVal,curVal),0)
            //    console.log('maxPrice',maxPrice)

            //3 rd way
            let maxPrice=Math.max(...priceArr)
           
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filter: {
                    ...state.filter,
                    maxPrice:maxPrice,
                    price: maxPrice
                }
            }
        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true
            }
        case 'SET_GRID_LIST':
            return {
                ...state,
                grid_view: false
            }
        case 'GET_SORT_VALUE':
            return {
                ...state,
                sorting_value: action.payload
            }

        case 'SORTING_PRODUCTS':
            let newSortData;
            const { filter_products } = state;
            let tempSortProduct = [...filter_products];

            const sortingProduct = (a, b) => {
                if (state.sorting_value === 'lowest') {
                    return a.price - b.price;
                }
                if (state.sorting_value === 'highest') {
                    return b.price - a.price;
                }
                if (state.sorting_value === 'a-z') {
                    return a.name.localeCompare(b.name);
                }
                if (state.sorting_value === 'z-a') {
                    return b.name.localeCompare(a.name);
                }
            }
            newSortData = tempSortProduct.sort(sortingProduct)
            return {
                ...state,
                filter_products: newSortData,
            }
        case 'UPDATE_FILTERS_VALUE':
            const { name, value } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }
        case 'FILTER_PRODUCTS':
            let all_products = state.all_products;
            let tempFilterProduct = [...all_products]
            let { text, category, company, color ,price} = state.filter;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.name.toLowerCase().includes(text)
                })
            }

            if (category !== 'All') {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.category === category;
                })
            }

            if (company !== 'All') {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.company.toLowerCase() === company.toLowerCase();
                })
            }

            if (color !== 'All') {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.colors.includes(color)
                })
            }

            if(price===0){
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.price === price
                })
            }
            else{
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.price <= price;
                })
            }
            return {
                ...state,
                filter_products: tempFilterProduct
            }
        case 'CLEAR_FILTER':
            return{
                ...state,
                filter:{
                text:'',
                category:'All',
                company:'All',
                color:'All',
                maxPrice:state.filter.maxPrice,
                price:state.filter.maxPrice,
                minPrice:0
            }
            }
        default:
            return state
    }
}

export default filterReducer
