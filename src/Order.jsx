import { Button } from '@mantine/core'

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

    return (
        <main className="w-screen h-screen">
            <section className="w-full h-full flex flex-row flex-wrap justify-center">
                <div className="h-2/6 w-10/12 mt-5 border-solid border-2 rounded-lg border-stone-300 shadow-lg">
                    <h1>Please very the following information...</h1>
                    <h1>{checkout.name}</h1>
                    <h1>{checkout.address}</h1>
                    <h1>
                        {checkout.secondAddress ? checkout.secondAddress : null}
                    </h1>
                    <div>
                        <h1>{checkout.city}</h1>
                        <h1>{checkout.state}</h1>
                        <h1>{checkout.zip}</h1>
                    </div>
                    <div>Card: XXXX XXXX XXXX {checkout.card.slice(15)}</div>
                </div>

                <div className="h-3/6 w-full">
                    <div className=" overflow-auto flex flex-col items-start h-full w-full bg-white">
                        {Object.keys(shoppingCart).map((itemId) => {
                            const item = shoppingCart[itemId]
                            return (
                                <main className="flex flex-row items-center flex-wrap w-11/12 mt-2 mb-2 ml-2 rounded-md border-solid h-40">
                                    <div className="w-3/12">
                                        <img
                                            className="h-14 w-14 rounded-md"
                                            src={item.image}
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
                                    <div className="w-full flex justify-end">
                                        <h1>
                                            Cart Total: $
                                            {findPrice().toFixed(2)}
                                        </h1>
                                    </div>
                                </main>
                            )
                        })}
                    </div>
                </div>
                <Button className="bg-stone-200 shadow-md text-black w-full rounded-md text-center mt-5">
                    Order
                </Button>
            </section>
        </main>
    )
}
