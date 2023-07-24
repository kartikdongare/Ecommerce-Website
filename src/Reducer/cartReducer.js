const cartReducer = (state, action) => {

  if (action.type === 'ADD_TO_CART') {
    let { id, color, amount, product } = action.payload;
    let existingProduct = state.cart.find((curEle) => curEle.id === id + color)

    if (existingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === id + color) {
          let newAmount = curEle.amount + amount
          if (newAmount >= curEle.max) {
            newAmount = curEle.max
          }
          return {
            ...curEle,
            amount: newAmount
          }
        }
        else {
          return curEle
        }
      })
      return {
        ...state,
        cart: updatedProduct
      }
    }
    else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color: color,
        amount: amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock
      }
      return {
        ...state,
        cart: [...state.cart, cartProduct]
      }
    }
  }

  if (action.type === 'SET_DECREAMENT') {
    let updatedProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let decreament = curEle.amount - 1;
        if (decreament <= 1) {
          decreament = 1;
        }
        return {
          ...curEle,
          amount: decreament
        }
      }
      else {
        return curEle;
      }
    })
    return {
      ...state,
      cart: updatedProduct
    }
  }

  if (action.type === 'SET_INCREAMENT') {
    let updatedProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let increament = curEle.amount + 1;
        if (increament >= curEle.max) {
          increament = curEle.max;
        }
        return {
          ...curEle,
          amount: increament
        }
      }
      else {
        return curEle;
      }
    })
    return {
      ...state,
      cart: updatedProduct
    }
  }

  if (action.type === 'REMOVE_ITEAM') {
    let updateItem = state.cart.filter((curEle) => curEle.id !== action.payload)
    return {
      ...state,
      cart: updateItem
    }
  }

  if (action.type === 'CLEAR_CART') {
    console.log('type', action.type)
    return {
      ...state,
      cart: []
    }
  }
  if (action.type === 'CART_TOTLE_ITEM') {
    let updatedItemVal = state.cart.reduce((initialVal, curEle) => {
      let { amount } = curEle;
      initialVal = initialVal + amount;
      return initialVal
    }, 0)
    return {
      ...state,
      total_item: updatedItemVal
    }
  }

  if (action.type === 'CART_TOTAL_PRICE') {
    let total_price = state.cart.reduce((initialVal, curEle) => {
      let { price, amount } = curEle;
      initialVal = initialVal + (price * amount)
      return initialVal
    }, 0)

    return {
      ...state,
      total_price: total_price
    }
  }

}

export default cartReducer;
