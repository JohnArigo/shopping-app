import "./ProductCard.css"

export default function ProductCard({data ,setShoppingCart, searchInput, setSearchInput}){

    const addToCart = (index) =>{
        const updatedData = [...data]
        const currentData = {...data[index]}
        updatedData[index] = currentData
        setShoppingCart(prevCart => [...prevCart, currentData])
    }


        const dataCategoryFilter = () => data.filter(card =>{
        const userCategory = card.category.toLowerCase()
        if (searchInput.categoryOne === userCategory){
            return card
        }
         else if (searchInput.categoryTwo === userCategory){
            return card
        } 
        else if (searchInput.categoryThree === userCategory){
            return card
        }
        else if (searchInput.categoryFour === userCategory){
            return card
        } else if (searchInput.categoryTwo === "" && searchInput.categoryOne === "" && searchInput.categoryThree === "" && searchInput.categoryFour === ""){
            return card
         }
        }

        )
 
        const dataSearchFilter = () => dataCategoryFilter().filter(card => {
            const cardTitle = card.title.toLowerCase()
            const userSearch = searchInput.userSearch.toLowerCase()
            if (searchInput.userSearch === "") {
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
                    <main className="card-container">
                        <section className="card" key={index}>
                            {/*<div><img className="image" style= ""src={card.image}/></div>*/}
                            <div>{card.title}</div>
                            <div>${card.price}</div>
                            <div>{card.rating.rate}</div>
                        </section>
                        <section><button onClick={() => addToCart(index)}>Add To Cart</button></section>
                        <h4></h4>
                    </main>
                )})}
        </body>
        )
}