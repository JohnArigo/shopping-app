import './ProductCard.css'
import { Card, Group, Badge, Button, Text } from '@mantine/core'
import { useState } from 'react'

export default function ProductCard({
    cart,
    data,
    setShoppingCart,
    searchInput,
    setFilterDisplay,
    userCategoryChoice,
}) {
    const addToCart = (card) => {
        const cartItemId = card.id
        const updatedCart = { ...cart }

        if (updatedCart[cartItemId]) {
            updatedCart[cartItemId].count = updatedCart[cartItemId].count + 1
        } else {
            updatedCart[cartItemId] = { ...card, count: 1 }
        }
        setShoppingCart((prevCart) => ({ ...prevCart, ...updatedCart }))
    }

    const dataCategoryFilter = () =>
        data.filter((card) => {
            const userCategory = card.category.toLowerCase()
            if (userCategoryChoice.categoryOne === userCategory) {
                return card
            } else if (userCategoryChoice.categoryTwo === userCategory) {
                return card
            } else if (userCategoryChoice.categoryThree === userCategory) {
                return card
            } else if (userCategoryChoice.categoryFour === userCategory) {
                return card
            } else if (
                userCategoryChoice.categoryTwo === '' &&
                userCategoryChoice.categoryOne === '' &&
                userCategoryChoice.categoryThree === '' &&
                userCategoryChoice.categoryFour === ''
            ) {
                return card
            }
        })
    const dataPriceFilter = () =>
        dataCategoryFilter().filter((card) => {
            const cardPrice = card.price
            const userPricePreferenceMin = searchInput.priceMin
            const userPricePreferenceMax = searchInput.priceMax
            if (
                cardPrice >= userPricePreferenceMin &&
                cardPrice <= userPricePreferenceMax
            ) {
                return card
            }
        })

    const dataSearchFilter = () =>
        dataPriceFilter().filter((card) => {
            const cardTitle = card.title.toLowerCase()
            const userSearch = searchInput.userSearch.toLowerCase()
            if (searchInput.userSearch === '') {
                //if query is empty
                return card
            } else if (cardTitle.includes(userSearch)) {
                //returns filtered array
                return card
            }
        })

    return (
        <body className="product-card-container">
            <section className="product-title-container">
                <h1>E-Commerence Project</h1>
                <Button onClick={() => setFilterDisplay(true)}>Filters</Button>
            </section>

            {dataSearchFilter().map((cartItem) => {
                if (cartItem.title.length > 70) {
                    cartItem.title = cartItem.title.substring(0, 70)
                }
                return (
                    <Card
                        shadow="sm"
                        p="lg"
                        className="flex flex-col justify-center items-center border border-solid border-black ml-5 mb-2 mt-2 w-60 h-96"
                    >
                        <Card.Section>
                            <img
                                className="h-20 w-20 mt-4"
                                src={cartItem.image}
                            />
                        </Card.Section>

                        <Group
                            position="apart"
                            className="flex flex-col justify-center items-center h-2/6 w-full"
                        >
                            <Text weight={500} className="text-center">
                                {cartItem.title}
                            </Text>
                        </Group>

                        <Text size="sm" className="h-1/6">
                            ${cartItem.price}
                        </Text>

                        <Badge
                            className="self-center h-1/6"
                            color="pink"
                            variant="light"
                        >
                            {cartItem.rating.rate} / 5
                        </Badge>
                        <Button
                            className="h-2/6"
                            variant="light"
                            color="blue"
                            fullWidth
                            style={{ marginTop: 14 }}
                            onClick={() => addToCart(cartItem)}
                        >
                            Add to Cart
                        </Button>
                    </Card>
                )
            })}
        </body>
    )
}
