import { useState } from 'react'
import { Button } from '@mantine/core'
import { homeRoute } from './routes-constants'
import { Link } from 'react-router-dom'

export default function MainPage({
    searchInput,
    setSearchInput,
    setUserCategoryChoice,
    productsMax,
    productsMin,
}) {
    const [searchState, setSearchState] = useState(true)

    const filterData = () => {
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
        <main className="flex flex-col items-center h-screen w-screen">
            {searchState ? (
                <button
                    className="w-full h-1/4 shadow-md mb-5"
                    onClick={() => setSearchState(false)}
                >
                    Click to Search for Keywords
                </button>
            ) : (
                <form className="w-full flex flex-col items-start h-1/4 mb-5">
                    <div className="w-full flex flex-row items-center justify-between h-1/2 shadow-lg">
                        <input
                            type="text"
                            className="w-11/12 h-full"
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
                            className="w-1/12 self-center"
                            onClick={() => setSearchInput({ userSearch: '' })}
                        >
                            X
                        </h4>
                    </div>
                    <Button
                        className="w-3/6 self-center bg-stone-200 shadow-sm text-black"
                        onClick={() => setSearchState(true)}
                    >
                        Hide
                    </Button>
                </form>
            )}
            <section className="flex flex-col items-start w-full h-1/4 justify-center">
                <div>
                    <input
                        name="categoryOne"
                        type="checkbox"
                        checked={searchInput.categoryOne}
                        onChange={handleChangeSearch}
                    />
                    <label className="ml-1">Men's Clothing</label>
                </div>
                <div>
                    <input
                        name="categoryTwo"
                        type="checkbox"
                        checked={searchInput.categoryTwo}
                        onChange={handleChangeSearch}
                    />
                    <label className="ml-1">Women's Clothing</label>
                </div>
                <div>
                    <input
                        name="categoryThree"
                        type="checkbox"
                        checked={searchInput.categoryThree}
                        onChange={handleChangeSearch}
                    />
                    <label className="ml-1">Jewelry</label>
                </div>
                <div>
                    <input
                        name="categoryFour"
                        type="checkbox"
                        checked={searchInput.categoryFour}
                        onChange={handleChangeSearch}
                    />
                    <label className="ml-1">Electronics</label>
                </div>
            </section>
            <section className="h-1/4">
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
            </section>
            <Link to={homeRoute} className="h-1/4">
                <Button
                    className="bg-stone-200 shadow-md text-black"
                    onClick={() => filterData()}
                >
                    Filter
                </Button>
            </Link>
        </main>
    )
}
