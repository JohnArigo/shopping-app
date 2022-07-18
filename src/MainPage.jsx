import { useState, useEffect } from 'react'
import './MainPage.css'
import { Button } from '@mantine/core'

export default function MainPage({ productData, searchInput, setSearchInput }) {
    const [categoryItems, setCategoryItems] = useState({
        catI: false,
        catII: false,
        catIII: false,
        catIV: false,
    })
    console.log(searchInput.priceMin)

    //create state that will store min and max of price
    //create a slider on the return to set price on the state
    //filter button will submit the final filteration model

    //problem maker right here, Set global state in order to filter on PRODUCTCARD
    const filterData = () => {
        if (categoryItems.catI) {
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
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setCategoryItems((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }
    function handleChangeSearch(event) {
        const { name, value, type, checked } = event.target
        setSearchInput((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    console.log(searchInput)
    const [searchState, setSearchState] = useState(true)
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
                    name="catI"
                    type="checkbox"
                    checked={categoryItems.catI}
                    onChange={handleChange}
                />
                <label className="main-checkbox-label">Men's Clothing</label>
            </div>
            <div>
                <input
                    name="catII"
                    type="checkbox"
                    checked={categoryItems.catII}
                    onChange={handleChange}
                />
                <label className="main-checkbox-label">Women's Clothing</label>
            </div>
            <div>
                <input
                    name="catIII"
                    type="checkbox"
                    checked={categoryItems.catIII}
                    onChange={handleChange}
                />
                <label className="main-checkbox-label">Jewelry</label>
            </div>
            <div>
                <input
                    name="catIV"
                    type="checkbox"
                    checked={categoryItems.catIV}
                    onChange={handleChange}
                />
                <label className="main-checkbox-label">Electronics</label>
            </div>
            <div className="flex flex-wrap w-full">
                <label className="w-3/5">Min Price:</label>
                <input
                    className="w-2/5"
                    name="priceMin"
                    type="number"
                    max="9999"
                    value={searchInput.priceMin}
                    onChange={(event) => handleChangeSearch(event)}
                />
                <input
                    className="w-full"
                    name="priceMin"
                    type="range"
                    min="0"
                    max="9999"
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
                    max="10000"
                    value={searchInput.priceMax}
                    onChange={(event) => handleChangeSearch(event)}
                />
                <input
                    className="w-full"
                    name="priceMax"
                    type="range"
                    min="5"
                    max="10000"
                    step={10}
                    onChange={(event) => handleChangeSearch(event)}
                    value={searchInput.priceMax}
                />
            </div>
            <button onClick={() => filterData()}>Filter</button>
        </main>
    )
}
