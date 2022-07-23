import './NavBar.css'
import cartIcon from './shopping-cart.png'

/*const getTotalCartCount = (cart) => {
    let total = 0
    const cartKeysArray = Object.keys(cart)

    cartKeysArray.forEeach((itemId) => {
        const item = cart[itemId]
        const itemCount = item.count

        total += itemCount
    })

    return total
}*/

export default function NavBar({ cart, setMainDisplay, setFilterDisplay }) {
    const countCartItem = () => {
        var result = 0
        const currentCart = { ...cart }
        Object.keys(cart).forEach((itemId) => {
            const count = currentCart[itemId].count
            result += count
        })
        return result
    }

    const goToCart = () => {
        console.log('clicked')
        setFilterDisplay(false)
        setMainDisplay(true)
    }

    return (
        <nav className="flex justify-between items-center h-2/12 sticky top-0 z-10 bg-emerald-500">
            <section>E-Commerence Project</section>
            <section>
                <img onClick={() => goToCart()} src={cartIcon} />
                <label className="text-xs bg-red-600 text-stone-50 px-1 align-top">
                    {countCartItem()}
                </label>
            </section>
        </nav>
    )
}
