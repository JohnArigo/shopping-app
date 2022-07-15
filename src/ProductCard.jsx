import './ProductCard.css'
import { Card, Group, Badge, Button, Text } from '@mantine/core'

export default function ProductCard({
    data,
    setShoppingCart,
    searchInput,
    setSearchInput,
}) {
    const addToCart = (index) => {
        const updatedData = [...data]
        const currentData = { ...data[index] }
        updatedData[index] = currentData
        setShoppingCart((prevCart) => [...prevCart, currentData])
    }

    const dataCategoryFilter = () =>
        data.filter((card) => {
            const userCategory = card.category.toLowerCase()
            if (searchInput.categoryOne === userCategory) {
                return card
            } else if (searchInput.categoryTwo === userCategory) {
                return card
            } else if (searchInput.categoryThree === userCategory) {
                return card
            } else if (searchInput.categoryFour === userCategory) {
                return card
            } else if (
                searchInput.categoryTwo === '' &&
                searchInput.categoryOne === '' &&
                searchInput.categoryThree === '' &&
                searchInput.categoryFour === ''
            ) {
                return card
            }
        })

    const dataSearchFilter = () =>
        dataCategoryFilter().filter((card) => {
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
            </section>

            {dataSearchFilter().map((card, index) => {
                return (
                    <Card
                        shadow="sm"
                        p="lg"
                        className="flex flex-col justify-center items-center border border-solid border-black ml-5 mb-2 mt-2 w-40 h-88"
                    >
                        <Badge
                            className="self-end"
                            color="pink"
                            variant="light"
                        >
                            {card.rating.rate}
                        </Badge>
                        <Card.Section>
                            <img className="h-20 w-20" src={card.image} />
                        </Card.Section>

                        <Group position="apart">
                            <Text weight={500} className="self-center">
                                {card.title}
                            </Text>
                        </Group>

                        <Text size="sm">${card.price}</Text>

                        <Button
                            variant="light"
                            color="blue"
                            fullWidth
                            style={{ marginTop: 14 }}
                            onClick={() => addToCart(index)}
                        >
                            Add to Cart
                        </Button>
                    </Card>
                )
            })}
        </body>
    )
}
