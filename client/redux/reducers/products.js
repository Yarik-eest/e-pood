import { LOG_CHANGE_CURRENCY, LOG_SORTING } from '../middleware/logs'

const GET_PRODUCTS = 'store/products/GET_PRODUCTS'
const ADD_RATES = 'store/products/ADD_RATES'
const SET_CURRENCYNAME = 'store/products/SET_CURRENCYNAME'
const SET_SORT_TYPE = 'store/products/SET_SORT_TYPE'

const initialState = {
  goods: {
    // 'id': {
    //   id: '384u9014',
    //   title: 'Beer',
    //   price: 10
    // }
  },
  rates: {
    USD: 1
  },
  currency: 'USD',
  sort: {
    type: 'price',
    direction: 'a-z'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        goods: action.listOfGoods
      }
    }
    case ADD_RATES: {
      return {
        ...state,
        rates: action.rates
      }
    }
    case SET_CURRENCYNAME: {
      return {
        ...state,
        currency: action.currencyName
      }
    }
    case SET_SORT_TYPE: {
      return {
        ...state,
        sort: {
          type: action.sortType,
          direction: action.sortDirection
        }
      }
    }
    default:
      return state
  }
}
/*
array = [{ id: 10, title: 'Pepe' }, { id: 'hi', title: 'Marina' }]
object = {
  '10': { id: 10, title: 'Pepe' },
  'hi': { id: 'hi', title: 'Marina' }
}
*/

const arrayToObject = (arr) => {
  return arr.reduce((acc, product) => ({ ...acc, [product.id]: product }), {})
}

export function getProductsFromServer() {
  return (dispatch) => {
    fetch('/api/v1/goods')
      .then((response) => response.json())
      .then((result) => {
        const newObj = arrayToObject(result)
        dispatch({ type: GET_PRODUCTS, listOfGoods: newObj })
      })
  }
}

export function addRates() {
  return (dispatch) => {
    fetch('/api/v1/rates')
      .then((response) => response.json())
      .then((rates) => {
        dispatch({ type: ADD_RATES, rates })
      })
  }
}

export function setCurrency(currencyName) {
  return (dispatch, getState) => {
    const store = getState()
    const lastCurrency = store.products.currency
    if (!!store.products.rates?.[currencyName] && currencyName !== store.products.currency) {
      dispatch({ type: SET_CURRENCYNAME, currencyName })
      dispatch({
        type: LOG_CHANGE_CURRENCY,
        payload: {
          lastCurrency,
          newCurrency: currencyName
        }
      })
    }
  }
}

export function sortProducts(sortType = 'price', sortDirection = 'a-z') {
  return (dispatch) => {
    fetch(`/api/v1/goods/${sortType}/${sortDirection}`)
      .then((response) => response.json())
      .then((result) => {
        const newObj = arrayToObject(result)
        dispatch({ type: GET_PRODUCTS, listOfGoods: newObj })
      })
    dispatch({
      type: SET_SORT_TYPE,
      sortType,
      sortDirection
    })
    dispatch({
        type: LOG_SORTING,
        payload: {
          title: sortType,
          direction: sortDirection
        }
      })
  }
}

// const sortedBasket = Object.values(basket).sort((a, b) => {
//   if (type === 'price' && direction === 'a-z') {
//     return a.price - b.price
//   }
//   if (type === 'price' && direction === 'z-a') {
//     return b.price - a.price
//   }
//   if (type === 'title' && direction === 'a-z') {
//     return a.title.localeCompare(b.title)
//   }
//   if (type === 'title' && direction === 'z-a') {
//     return b.title.localeCompare(a.title)
//   }
//   return a.price - b.price
// })

/*
export function getProductsFromServerToMap() {
  return (dispatch) => {
    fetch('/api/v1/goods')
      .then((response) => response.json())
      .then((result) => {
        let mapOfProducts = new Map() //Объявляем переменную с типом данных Map
        result.forEach((product) => { // Т.к у Map есть Геттеры и Сеттеры, лучше использовать forEach
          if(!mapOfProducts.has(product.id)){ // Проверка есть ли наш ID в Мапе
            mapOfProducts.set(product.id, product) // Если нет, то добавляем с помощью Сет новый объект с ключем product id, value - {} product изначальный
          }
        }
        dispatch({ type: GET_PRODUCTS, listOfGoods: mapOfProducts })
      })
  }
}

export function removeProductsMap() {

}
*/
