import NavBar from './NavBar'
import MainPage from './MainPage'
import Footer from './Footer'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import ProductCard from './ProductCard'
import data from './data.json'

function App() {
    const [productData, setProductData] = useState(data)
    const [shoppingCart, setShoppingCart] = useState({})
    const [searchInput, setSearchInput] = useState({
        userSearch: '',
        categoryOne: false,
        categoryTwo: false,
        categoryThree: false,
        categoryFour: false,
        priceMin: 0,
        priceMax: 10000,
    })
    const [userCategoryChoice, setUserCategoryChoice] = useState({
        categoryOne: '',
        categoryTwo: '',
        categoryThree: '',
        categoryFour: '',
    })
    const [mainDisplay, setMainDisplay] = useState(false)
    const [filterDisplay, setFilterDisplay] = useState(false)

    return (
        <body className="app-body">
            <NavBar
                cart={shoppingCart}
                setMainDisplay={setMainDisplay}
                setFilterDisplay={setFilterDisplay}
            />
            {filterDisplay && !mainDisplay ? (
                <MainPage
                    productData={productData}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    setFilterDisplay={setFilterDisplay}
                    userCategoryChoice={userCategoryChoice}
                    setUserCategoryChoice={setUserCategoryChoice}
                />
            ) : mainDisplay && !filterDisplay ? (
                <ShoppingCart
                    cart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setMainDisplay={setMainDisplay}
                />
            ) : (
                <ProductCard
                    cart={shoppingCart}
                    data={productData}
                    setShoppingCart={setShoppingCart}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    setFilterDisplay={setFilterDisplay}
                    userCategoryChoice={userCategoryChoice}
                    setUserCategoryChoice={setUserCategoryChoice}
                />
            )}

            <Footer />
        </body>
    )
}

export default App
