import { Button } from '@mantine/core'
import trashIcon from './trash-bin.png'
import { Link, useNavigate } from 'react-router-dom'
import { homeRoute, personalCheckoutRoute } from './routes-constants'

export default function ShoppingCart({ cart, setShoppingCart }) {
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
        } else if (updatedCart[itemId].count === 1) {
            delete updatedCart[itemId]
        }
        setShoppingCart({ ...updatedCart })
    }
    const deleteItem = (itemId) => {
        const updatedCart = { ...cart }
        delete updatedCart[itemId]
        setShoppingCart({ ...updatedCart })
    }
    const findPrice = () => {
        var totalPrice = 0
        const currentCart = { ...cart }
        Object.keys(cart).forEach((item) => {
            const itemPrice = currentCart[item].price
            const itemQuantity = currentCart[item].count
            const itemTruePrice = itemPrice * itemQuantity
            totalPrice += itemTruePrice
        })

        return totalPrice
    }
    const navigate = useNavigate()

    if (
        Object.keys(cart).length === 0 ||
        Object.keys(cart).length === undefined
    ) {
        return (
            <body className="h-screen w-screen bg-white flex flex-row flex-wrap justify-center items-center">
                <main className="w-full text-center h-2/12 ">
                    There are no items in your cart
                </main>
                <Link to={homeRoute}>
                    <Button className="bg-stone-200 shadow-sm text-black">
                        Return
                    </Button>
                </Link>
            </body>
        )
    } else {
        return (
            <body className=" overflow-auto flex flex-col items-start h-screen w-screen bg-white">
                {Object.keys(cart).map((itemId) => {
                    const item = cart[itemId]
                    return (
                        <main className="flex flex-row items-center flex-wrap w-96 mt-2 mb-2 ml-2 rounded-md border-solid h-96">
                            <div className="w-3/12">
                                <img
                                    className="h-20 w-20 rounded-md"
                                    src={item.image}
                                    alt="item"
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
                                        <h2 className="text-base text-black bg-green-600 w-6 rounded-lg">
                                            +
                                        </h2>
                                    </Button>
                                    <Button
                                        onClick={() => minusToQuantity(itemId)}
                                    >
                                        <h2 className="text-base text-black bg-red-600 w-6 rounded-lg">
                                            -
                                        </h2>
                                    </Button>
                                </div>
                                <Button
                                    className="w-2/12"
                                    onClick={() => deleteItem(itemId)}
                                >
                                    <img
                                        className="w-6 h-6"
                                        src={trashIcon}
                                        alt="trash"
                                    />
                                </Button>
                            </section>
                        </main>
                    )
                })}
                <div className="w-full flex justify-end">
                    <h1 className="mr-10">
                        Cart Total: ${findPrice().toFixed(2)}
                    </h1>
                </div>
                {Object.keys(cart).length === 0 ||
                Object.keys(cart).length === undefined ? null : (
                    <Link
                        className="w-full flex justify-end"
                        to={personalCheckoutRoute}
                    >
                        <Button className="text-black mr-10 ">Checkout</Button>
                    </Link>
                )}

                <Button
                    className="w-full text-lg text-black"
                    onClick={() => navigate(-1)}
                >
                    Return
                </Button>
            </body>
        )
    }
}
