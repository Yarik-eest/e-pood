import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import BasketProduct from './basket-product'

const Basket = () => {
  const basketList = useSelector((s) => s.basket.basketProducts)
  const totalAmount = useSelector((s) => s.basket.totalAmount)
  const totalPrice = useSelector((s) => s.basket.totalPrice)
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)
  const { type, direction } = useSelector((store) => store.products.sort)

  return (
    <div>
      <Head title="Basket" />
      <Header />
      <div className="flex flex-col items-center w-full h-screen p-2">
        <div>Total amount: {totalAmount}</div>
        <div>Total price: {(totalPrice * currentRate[currency].toFixed(2)).toFixed(2)}</div>
        {Object.values(basketList)
          .filter((good) => typeof basketList[good.id] !== 'undefined')
          .sort((a, b) => {
            if (type === 'price' && direction === 'a-z') {
              return a.price - b.price
            }
            if (type === 'price' && direction === 'z-a') {
              return b.price - a.price
            }
            if (type === 'title' && direction === 'a-z') {
              return a.title.localeCompare(b.title)
            }
            if (type === 'title' && direction === 'z-a') {
              return b.title.localeCompare(a.title)
            }
            return a.price - b.price
          })
          .map((item) => {
            return (
              <div key={item.id} className="flex justify-around w-full">
                <BasketProduct item={{ id: item.id, amount: item.amount }} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default Basket
