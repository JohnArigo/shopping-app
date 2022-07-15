import { useState } from "react"


export default function ShoppingCart({shoppingCart, setShoppingCart}){

    return(
        <body>
            {shoppingCart.map((item => { return (
                <main>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <div>{item.description}</div>
                    <div>Quantity: {item.id}</div>
                    <div>delete</div>
                </main>
            )}))}
        </body>
    )
}