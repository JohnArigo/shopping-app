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

    const [mainDisplay, setMainDisplay] = useState(false)

    return (
        <body className="app-body">
            <NavBar cart={shoppingCart} setMainDisplay={setMainDisplay} />
            <MainPage
                productData={productData}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            {mainDisplay ? (
                <ShoppingCart
                    cart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                />
            ) : (
                <ProductCard
                    data={productData}
                    setShoppingCart={setShoppingCart}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            )}
            <Footer />
        </body>
    )
}

export default App
