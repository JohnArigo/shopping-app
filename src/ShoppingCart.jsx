import { Button } from '@mantine/core'
import { useState } from 'react'
import trashIcon from './trash-bin.png'
import './ShoppingCart.css'

export default function ShoppingCart({
    cart,
    setShoppingCart,
    setMainDisplay,
}) {
    const addToQuantity = (itemId) => {
        const updatedCart = { ...cart }
        if (updatedCart[itemId]) {
            updatedCart[itemId].count = updatedCart[itemId].count + 1
        }
        setShoppingCart({ ...updatedCart })
    }
    const minusToQuantity = (itemId) => {
        const updatedCart = { ...cart }
        if (updatedCart[itemId].count > 1) {
            updatedCart[itemId].count = updatedCart[itemId].count - 1
        } else if (updatedCart[itemId].count == 1) {
            delete updatedCart[itemId]
        }
        setShoppingCart({ ...updatedCart })
    }
    const deleteItem = (itemId) => {
        const updatedCart = { ...cart }
        delete updatedCart[itemId]
        setShoppingCart({ ...updatedCart })
    }
    if (
        Object.keys(cart).length == 0 ||
        Object.keys(cart).length == undefined
    ) {
        return (
            <body className="h-screen w-screen bg-rose-400 flex flex-row flex-wrap justify-center items-center">
                <main className="w-full text-center h-2/12">
                    Looks like theres no here, go back
                </main>
                <Button onClick={() => setMainDisplay(false)}>Return</Button>
            </body>
        )
    } else {
        return (
            <body className=" overflow-auto flex flex-col items-start h-screen w-screen bg-white">
                {Object.keys(cart).map((itemId) => {
                    const item = cart[itemId]
                    return (
                        <main className="flex flex-row items-center flex-wrap w-11/12 mt-2 mb-2 ml-2 rounded-md border-solid h-96">
                            <div className="w-3/12">
                                <img
                                    className="h-28 w-28 rounded-md"
                                    src={item.image}
                                />
                            </div>
                            <div className=" w-9/12">{item.title}</div>
                            <section className="w-full flex flex-row items-center justify-center">
                                <div className="w-4/12">{'$' + item.price}</div>
                                <div className="w-3/12">
                                    Quantity:{item.count}
                                </div>
                                <div className="flex align-start flex-col w-3/12">
                                    <Button
                                        className=""
                                        onClick={() => addToQuantity(itemId)}
                                    >
                                        <h2 className="text-base text-black">
                                            +
                                        </h2>
                                    </Button>
                                    <Button
                                        onClick={() => minusToQuantity(itemId)}
                                    >
                                        <h2 className="text-base text-black">
                                            -
                                        </h2>
                                    </Button>
                                </div>
                                <Button
                                    className="w-2/12"
                                    onClick={() => deleteItem(itemId)}
                                >
                                    <img className="w-6 h-6" src={trashIcon} />
                                </Button>
                            </section>
                        </main>
                    )
                })}
                <Button
                    className="w-full text-lg text-black"
                    onClick={() => setMainDisplay(false)}
                >
                    Return
                </Button>
            </body>
        )
    }
}
