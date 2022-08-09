import { Button, Modal } from '@mantine/core'
import { useState } from 'react'

export default function Order({ shoppingCart, checkout }) {
    const findPrice = () => {
        var totalPrice = 0
        const currentCart = { ...shoppingCart }
        Object.keys(shoppingCart).forEach((item) => {
            const itemPrice = currentCart[item].price
            const itemQuantity = currentCart[item].count
            const itemTruePrice = itemPrice * itemQuantity
            totalPrice += itemTruePrice
        })

        return totalPrice
    }

    const [modalState, setModalState] = useState(false)

    return (
        <main className="w-screen h-screen">
            <Modal
                className="text-center"
                opened={modalState}
                onClose={() => setModalState(false)}
                title="Thank you!"
            >
                Don't know backend yet but when I do... I'll learn how to send
                this lmao <br />
                Thank you for testing it out, dont forget to click the email
                button for feedback.
            </Modal>
            <section className="w-full h-full flex flex-row flex-wrap justify-center">
                <div className="h-2/6 w-11/12 mt-5 border-solid border-2 rounded-lg border-stone-300 shadow-lg flex items-center justify-center">
                    <div>
                        <h1 className="text-xl w-full">
                            Please very the following information...
                        </h1>
                        <h1 className="text-lg">{checkout.username}</h1>
                        <h1 className="text-lg">{checkout.address}</h1>
                        <h1 className="text-lg">
                            {checkout.secondAddress
                                ? checkout.secondAddress
                                : null}
                        </h1>
                        <div className="w-full flex flex-row">
                            <h1 className="text-md">{checkout.city}</h1>
                            <h1 className="text-md ml-2">{checkout.state}</h1>
                            <h1 className="text-md ml-2">{checkout.zipcode}</h1>
                        </div>
                        <div>
                            Card: XXXX XXXX XXXX {checkout.card.slice(15)}
                        </div>
                    </div>
                </div>

                <div className="h-3/6 w-full flex justify-center flex-row flex-wrap">
                    <h1 className="w-full text-center text-xl">
                        Verify your items...
                    </h1>
                    <div className=" overflow-auto flex flex-col items-start h-full w-full">
                        {Object.keys(shoppingCart).map((itemId) => {
                            const item = shoppingCart[itemId]
                            return (
                                <main className="flex flex-row items-center flex-wrap w-11/12 mt-2 mb-2 ml-2 rounded-md border-solid shadow-sm h-40">
                                    <div className="w-3/12">
                                        <img
                                            className="h-14 w-14 rounded-md"
                                            src={item.image}
                                            alt="item"
                                        />
                                    </div>
                                    <div className=" w-9/12">{item.title}</div>
                                    <section className="w-full flex flex-row items-center justify-center">
                                        <div className="w-4/12">
                                            {'$' + item.price}
                                        </div>
                                        <div className="w-3/12">
                                            Quantity:{item.count}
                                        </div>
                                    </section>
                                </main>
                            )
                        })}
                        <div className="w-full flex justify-end">
                            <h1>Total: ${findPrice().toFixed(2)}</h1>
                        </div>
                    </div>
                </div>
                <Button
                    onClick={() => setModalState(true)}
                    className="bg-stone-200 shadow-md text-black w-full rounded-md text-center mt-5"
                >
                    Order
                </Button>
            </section>
        </main>
    )
}
