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
            <div>
                <input
                    name="price"
                    type="range"
                    min="0"
                    max="10000"
                    onChange={handleChange}
                    value={searchInput.price}
                    step="1"
                />
            </div>
            <button onClick={() => filterData()}>Filter</button>
            <Button>Test Button</Button>
        </main>
    )
}
