import { useState, useEffect } from 'react'
import './MainPage.css'
import { Button } from '@mantine/core'

export default function MainPage({
    productData,
    searchInput,
    setSearchInput,
    setFilterDisplay,
    setUserCategoryChoice,
}) {
    const [categoryItems, setCategoryItems] = useState({
        catI: false,
        catII: false,
        catIII: false,
        catIV: false,
    })
    const productsMax = Math.max(...productData.map((data) => data.price))
    const productsMin = Math.min(...productData.map((data) => data.price))
    const [searchState, setSearchState] = useState(true)

    const filterData = () => {
        setFilterDisplay(false)

        if (searchInput.categoryOne) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryOne: "men's clothing" }
            })
        } else if (!searchInput.categoryOne) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryOne: '' }
            })
        }
        if (searchInput.categoryTwo) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryTwo: "women's clothing" }
            })
        } else if (!searchInput.categoryTwo) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryTwo: '' }
            })
        }
        if (searchInput.categoryThree) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryThree: 'jewelery' }
            })
        } else if (!searchInput.categoryThree) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryThree: '' }
            })
        }
        if (searchInput.categoryFour) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryFour: 'electronics' }
            })
        } else if (!searchInput.categoryFour) {
            setUserCategoryChoice((prevChoice) => {
                return { ...prevChoice, categoryFour: '' }
            })
        }
    }
    /* if (categoryItems.catI) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryOne: "men's clothing" }
            })
        } else if (!categoryItems.catI) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryOne: '' }
            })
        }
        if (categoryItems.catII) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryTwo: "women's clothing" }
            })
        } else if (!categoryItems.catII) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryTwo: '' }
            })
        }
        if (categoryItems.catIII) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryThree: 'jewelery' }
            })
        } else if (!categoryItems.catIII) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryThree: '' }
            })
        }
        if (categoryItems.catIV) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryFour: 'electronics' }
            })
        } else if (!categoryItems.catIV) {
            setSearchInput((prevData) => {
                return { ...prevData, categoryFour: '' }
            })
        }
    } */

    /*function handleChange(event) {
        const { name, value, type, checked } = event.target
        setCategoryItems((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }*/
    function handleChangeSearch(event) {
        const { name, value, type, checked } = event.target
        setSearchInput((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    return (
        <main className="main-container">
            {searchState ? (
                <button
                    className="initialize-search"
                    onClick={() => setSearchState(false)}
                >
                    Click to Search
                </button>
            ) : (
                <form>
                    <div className="input-container">
                        <input
                            type="text"
                            className="form-input"
                            name="searchInput"
                            onChange={(event) =>
                                setSearchInput((prevData) => {
                                    return {
                                        ...prevData,
                                        userSearch: event.target.value,
                                    }
                                })
                            }
                            placeholder="Search Item Here"
                            value={searchInput.userSearch}
                        />
                        <h4
                            className="delete-input"
                            onClick={() => setSearchInput({ userSearch: '' })}
                        >
                            X
                        </h4>
                    </div>
                    <button
                        className="cancel-button"
                        onClick={() => setSearchState(true)}
                    >
                        Hide
                    </button>
                </form>
            )}
            <div>
                <input
                    name="categoryOne"
                    type="checkbox"
                    checked={searchInput.categoryOne}
                    onChange={handleChangeSearch}
                />
                <label className="main-checkbox-label">Men's Clothing</label>
            </div>
            <div>
                <input
                    name="categoryTwo"
                    type="checkbox"
                    checked={searchInput.categoryTwo}
                    onChange={handleChangeSearch}
                />
                <label className="main-checkbox-label">Women's Clothing</label>
            </div>
            <div>
                <input
                    name="categoryThree"
                    type="checkbox"
                    checked={searchInput.categoryThree}
                    onChange={handleChangeSearch}
                />
                <label className="main-checkbox-label">Jewelry</label>
            </div>
            <div>
                <input
                    name="categoryFour"
                    type="checkbox"
                    checked={searchInput.categoryFour}
                    onChange={handleChangeSearch}
                />
                <label className="main-checkbox-label">Electronics</label>
            </div>
            <div className="flex flex-wrap w-full">
                <label className="w-2/5">Min Price:</label>
                <input
                    className="w-2/5"
                    name="priceMin"
                    type="number"
                    max={productsMax - 1}
                    value={searchInput.priceMin}
                    onChange={(event) => handleChangeSearch(event)}
                />
                <input
                    className="w-full"
                    name="priceMin"
                    type="range"
                    min={productsMin}
                    max={productsMax - 1}
                    onChange={(event) => handleChangeSearch(event)}
                    value={searchInput.priceMin}
                />
            </div>
            <div className="flex flex-wrap w-full">
                <label className="w-2/5">Max Price:</label>
                <input
                    className="w-2/5"
                    name="priceMax"
                    type="number"
                    max={productsMax}
                    value={searchInput.priceMax}
                    onChange={(event) => handleChangeSearch(event)}
                />
                <input
                    className="w-full"
                    name="priceMax"
                    type="range"
                    min={productsMin}
                    max={productsMax}
                    step={10}
                    onChange={(event) => handleChangeSearch(event)}
                    value={searchInput.priceMax}
                />
            </div>
            <button onClick={() => filterData()}>Filter</button>
        </main>
    )
}
