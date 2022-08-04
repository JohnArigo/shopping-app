import NavBar from './NavBar'
import MainPage from './MainPage'
import Footer from './Footer'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import ProductCard from './ProductCard'
import data from './data.json'
import {
    cartRoute,
    homeRoute,
    filterRoute,
    feedbackRoute,
    personalCheckoutRoute,
} from './routes-constants'
import { Route, Routes } from 'react-router-dom'
import Feedback from './Feedback'
import PersonalCheckout from './PersonalCheckout'

function App() {
    const [productData, setProductData] = useState(data)
    const [shoppingCart, setShoppingCart] = useState({})
    const productsMax = Math.max(...productData.map((data) => data.price))
    const productsMin = Math.min(...productData.map((data) => data.price))
    const [searchInput, setSearchInput] = useState({
        userSearch: '',
        categoryOne: false,
        categoryTwo: false,
        categoryThree: false,
        categoryFour: false,
        priceMin: productsMin,
        priceMax: productsMax,
    })
    const [userCategoryChoice, setUserCategoryChoice] = useState({
        categoryOne: '',
        categoryTwo: '',
        categoryThree: '',
        categoryFour: '',
    })
    const [checkoutPersonal, setCheckoutPersonal] = useState({
        username: '',
        address: '',
        secondAddress: '',
        city: '',
        state: '',
        zip: 0,
        billingCheck: false,
        billingName: '',
        billingAddress: '',
        billingSecondAddress: '',
        billingCity: '',
        billingState: '',
        billingZip: 0,
    })

    return (
        <body className="app-body">
            <NavBar cart={shoppingCart} />

            <Routes>
                <Route
                    path={homeRoute}
                    element={
                        <ProductCard
                            cart={shoppingCart}
                            data={productData}
                            setShoppingCart={setShoppingCart}
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            userCategoryChoice={userCategoryChoice}
                            setUserCategoryChoice={setUserCategoryChoice}
                        />
                    }
                />
                <Route
                    path={cartRoute}
                    element={
                        <ShoppingCart
                            cart={shoppingCart}
                            setShoppingCart={setShoppingCart}
                        />
                    }
                />
                <Route
                    path={filterRoute}
                    element={
                        <MainPage
                            productData={productData}
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            userCategoryChoice={userCategoryChoice}
                            setUserCategoryChoice={setUserCategoryChoice}
                            productsMin={productsMin}
                            productsMax={productsMax}
                        />
                    }
                ></Route>
                <Route path={feedbackRoute} element={<Feedback />}></Route>
                <Route
                    path={personalCheckoutRoute}
                    element={
                        <PersonalCheckout
                            checkoutPersonal={checkoutPersonal}
                            setCheckoutPersonal={setCheckoutPersonal}
                        />
                    }
                />
            </Routes>

            <Footer />
        </body>
    )
}

export default App
