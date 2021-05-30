import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Product from './product'
import { getProductsFromServer, addRates } from '../redux/reducers/products'

const Main = () => {
  const dispatch = useDispatch()
  const listOfGoods = useSelector((store) => store.products.goods)

  useEffect(() => {
    dispatch(getProductsFromServer())
    dispatch(addRates())
  }, [])
/*
array = [{ id: 10, title: 'Pepe' }, { id: 'hi', title: 'Marina' }]
object = { 
  '10': { id: 10, title: 'Pepe' },
  'hi': { id: 'hi', title: 'Marina' }
}
[
  ['10', { id: 10, title: 'Pepe' }],
  ['hi', { id: 'hi', title: 'Marina' }]
]
*/
  return (
    <div className="h-full">
      <Head title="Hello" />
      <Header />
      <div className="flex flex-wrap h-screen">
        {Object.entries(listOfGoods).map((good) => {
          return (<div key={good[0]}>
            <Product good={good[1]} />
          </div>)
        })}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
