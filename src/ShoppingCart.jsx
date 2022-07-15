import { useState } from 'react'
import './ShoppingCart.css'

export default function ShoppingCart({ cart, setShoppingCart }) {
    const deleteItem = (index) => {
        const updatedCart = [...cart]
        updatedCart.splice(index, 1)
        setShoppingCart([...updatedCart])
    }

    const lookup = cart.reduce((a, e) => {
        a[e.id] = ++a[e.id] || 0
        return a
    }, {})

    return (
        <body className="shopping-cart-body">
            {cart.map((item, index) => {
                var isDuplicate = cart.some(function (item, idx) {
                    return cart.indexOf(item) != idx
                })
                console.log(isDuplicate)
                return (
                    <main>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <div>{item.description}</div>
                        <div>Quantity: {item.id}</div>
                        <div>
                            <h1 onClick={() => deleteItem(index)}>delete</h1>
                        </div>
                    </main>
                )
            })}
        </body>
    )
}
