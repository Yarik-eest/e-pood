import { LOG_ADD_ITEM, LOG_REMOVE_ITEM } from '../middleware/logs'

const initialState = {
  basketProducts: {
    /* 'someId': {
      id: test,
      title: Beer,
      amount: 1
    } */
  },
  totalAmount: 0,
  totalPrice: 0
}
// 'store/products/GET_PRODUCTS'
const CHANGE_PRODUCTS = 'store/basket/CHANGE_PRODUCTS'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTS: {
      return {
        ...state,
        basketProducts: action.changeGoods,
        totalAmount: action.totalAmount,
        totalPrice: action.totalPrice
      }
    }
    default:
      return state
  }
}

function calculateTotal(basket) {
  const total = Object.entries(basket).reduce((acc, goodArr) => {
    const amount = acc.amount + goodArr[1].amount
    const price = acc.price + basket?.[goodArr[0]].price * basket?.[goodArr[0]].amount
    return { amount, price }
  }, {
    amount: 0,
    price: 0
  })
  return total
}

export function addToBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    const products = store.products.goods
    const updatedBasket = typeof basket?.[itemId] === 'undefined'
      ? { ...basket, [itemId]: { ...products[itemId], amount: 1 } }
      : { ...basket, [itemId]: { ...basket[itemId], amount: basket[itemId].amount + 1 } }
    const total = calculateTotal(updatedBasket)
    dispatch({
      type: CHANGE_PRODUCTS,
      changeGoods: updatedBasket,
      totalAmount: total.amount,
      totalPrice: total.price
    })
    dispatch({
      type: LOG_ADD_ITEM,
      payload: {
        item: updatedBasket[itemId].title
      }
    })
  }
}

export function removeFromBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    const updatedBasket = {
      ...basket,
      [itemId]: { ...basket[itemId],
      amount: basket[itemId].amount - 1 }
    }
    if (updatedBasket[itemId].amount <= 0) {
      dispatch({
        type: LOG_REMOVE_ITEM,
        payload: {
          item: updatedBasket[itemId].title
        }
      })
      delete updatedBasket[itemId]
    }
    const total = calculateTotal(updatedBasket)
    dispatch({
      type: CHANGE_PRODUCTS,
      changeGoods: updatedBasket,
      totalAmount: total.amount,
      totalPrice: total.price
    })
  }
}

/*

export function changeBasketMap(itemId, sign) {
  return (dispatch, getState) => {
    const store = getState()
    let basket = store.basket.basketProducts
    if (sign === '+'){
      !basket.has(itemId)
      ? basket.set(itemId, 1)
      : basket.set(itemId, basket.get(itemId) + 1)
    }else{
      basket.get(itemId) <= 1
      ? basket.delete(itemId)
      : basket.set(itemId, basket.get(itemId) - 1)
    }
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: basket })
  }
}

*/
