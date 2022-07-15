import NavBar from './NavBar'
import MainPage from './MainPage'
import Footer from './Footer'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import ProductCard from './ProductCard'
import data from './data.json'

function App() {
    const [productData, setProductData] = useState(data)
    const [shoppingCart, setShoppingCart] = useState([])
    const [searchInput, setSearchInput] = useState({
        userSearch: '',
        categoryOne: '',
        categoryTwo: '',
        categoryThree: '',
        categoryFour: '',
        // priceMin: 0,
        // priceMax: 100000
    })

    const noDisplaying = false
    return (
        <body className="app-body">
            {noDisplaying ? (
                <ShoppingCart
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                />
            ) : null}
            <NavBar cart={shoppingCart} />
            <MainPage
                productData={productData}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <ProductCard
                data={productData}
                setShoppingCart={setShoppingCart}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <Footer />
        </body>
    )
}

export default App
