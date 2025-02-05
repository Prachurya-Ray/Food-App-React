import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(state=>state.cart.items)
  return (
    <div className='mt-32'>Cart {cartItems}</div>
  )
}

export default Cart