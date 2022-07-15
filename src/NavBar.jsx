import './NavBar.css'
import cartIcon from './shopping-cart.png'

export default function NavBar({ cart }) {
    return (
        <nav>
            <section>E-Commerence Project</section>
            <section>
                <img src={cartIcon} />
                <label className="cart-label">{cart.length}</label>
            </section>
        </nav>
    )
}
