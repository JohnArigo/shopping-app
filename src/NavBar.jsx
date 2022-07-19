import './NavBar.css'
import cartIcon from './shopping-cart.png'

const getTotalCartCount = (cart) => {
    let total = 0
    const cartKeysArray = Object.keys(cart)

    cartKeysArray.forEeach((itmId) => {
        const item = cart[itemId]
        const itemCount = item.count

        total += itemCount
    })

    return total
}

export default function NavBar({ cart, setMainDisplay }) {
    return (
        <nav>
            <section>E-Commerence Project</section>
            <section>
                <img onClick={() => setMainDisplay(true)} src={cartIcon} />
                <label className="cart-label">{getTotalCartCount(cart)}</label>
            </section>
        </nav>
    )
}
