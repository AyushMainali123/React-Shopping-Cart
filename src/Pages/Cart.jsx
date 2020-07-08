import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {
    const shoppingCart = useContext(cartContext)
    return (
        <div className="Cart">
            {shoppingCart.cart.itemsInCart.map((item) => {
                return <CartItem key={item.id} item={item}/>;
            })}
            <div className="total">Total: ${shoppingCart.cart.totalAmount}</div>
        </div>
    )
   
}

export default Cart
