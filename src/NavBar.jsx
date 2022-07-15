import './NavBar.css'
import cartIcon from './shopping-cart.png'

export default function NavBar({ cart, setMainDisplay }) {
    return (
        <nav>
            <section>E-Commerence Project</section>
            <section>
                <img onClick={() => setMainDisplay(true)} src={cartIcon} />
                <label className="cart-label">{cart.length}</label>
            </section>
        </nav>
    )
}
