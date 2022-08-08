import { Link } from 'react-router-dom'
import { cartRoute, homeRoute } from './routes-constants'
import cartIcon from './shopping-cart.png'

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

    return (
        <nav className="flex justify-between items-center h-2/12 w-screen sticky top-0 z-10 bg-emerald-500">
            <Link to={homeRoute}>E-Commerence Project</Link>
            <Link to={cartRoute}>
                <img className="mt-1" src={cartIcon} />
                <label className="text-xs bg-red-600 text-stone-50 px-1 align-top">
                    {countCartItem()}
                </label>
            </Link>
        </nav>
    )
}
