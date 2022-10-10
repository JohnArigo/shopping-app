import NavBar from './NavBar'
import Filter from './filter'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import ShoppingCart from './ShoppingCart'
import Products from './Products'
import data from './data.json'
import {
    cartRoute,
    homeRoute,
    filterRoute,
    feedbackRoute,
    personalCheckoutRoute,
    paymentCheckoutRoute,
    orderRoute,
    titleRoute,
} from './routes-constants'
import { Route, Routes } from 'react-router-dom'
import Feedback from './Feedback'
import PersonalCheckout from './PersonalCheckout'
import PaymentCheckout from './PaymentCheckout'
import Order from './Order'
import Title from './Title'

//why is my API not setting normally? Put it on another state and it passes fine
function App() {
    const [productData, setProductData] = useState(data)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProductData(data))
    }, [])

    const [shoppingCart, setShoppingCart] = useState({})
    const [titleState, setTitleState] = useState(false)
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
    const [checkout, setCheckout] = useState({
        username: '',
        address: '',
        secondAddress: String,
        city: '',
        state: 'AL',
        zipCode: Number,
        billingCheck: false,
        billingName: '',
        billingAddress: '',
        billingSecondAddress: '',
        billingCity: '',
        billingState: '',
        billingZipCode: Number,
        card: '',
        year: 2022,
        month: 1,
        cvv: '',
    })

    return (
        <body className="app-body">
            {titleState ? <NavBar cart={shoppingCart} /> : null}

            <Routes>
                <Route
                    path={titleRoute}
                    element={<Title setTitleState={setTitleState} />}
                />
                <Route
                    path={homeRoute}
                    element={
                        <Products
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
                        <Filter
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
                            checkout={checkout}
                            setCheckout={setCheckout}
                            shoppingCart={shoppingCart}
                        />
                    }
                />
                <Route
                    path={paymentCheckoutRoute}
                    element={
                        <PaymentCheckout
                            checkout={checkout}
                            setCheckout={setCheckout}
                            shoppingCart={shoppingCart}
                        />
                    }
                />
                <Route
                    path={orderRoute}
                    element={
                        <Order
                            checkout={checkout}
                            shoppingCart={shoppingCart}
                        />
                    }
                />
            </Routes>

            {titleState ? <Footer /> : null}
        </body>
    )
}

export default App
