import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout({ checkout, setCheckout, shoppingCart }) {
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setCheckout((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    const [val, setVal] = useState({
        fields: {},
        errors: {},
    })

    const handleValidation = () => {
        let fields = checkout
        let errors = {}
        let formIsValid = true

        if (!fields['username']) {
            formIsValid = false
            errors['username'] = 'Cannot be empty'
        }

        if (typeof fields['username'] !== 'undefined') {
            if (!fields['username'].match(/^[a-zA-Z]+$/)) {
                formIsValid = false
                errors['username'] = 'Name can only be letters'
            }
        }

        if (!fields['address']) {
            formIsValid = false
            errors['address'] = 'Cannot be empty'
        }

        if (!fields['city']) {
            formIsValid = false
            errors['city'] = 'Cannot be empty'
        }

        if (!fields['zipcode']) {
            formIsValid = false
            errors['zipcode'] = 'Cannot be empty'
        }

        setVal({ errors: errors })
        return formIsValid
    }

    const navigate = useNavigate()

    const contactSubmit = (e) => {
        e.preventDefault()
        const errors = JSON.stringify(val.errors)
        if (checkout.billingCheck) {
            setCheckout((prevState) => ({
                ...prevState,
                billingName: checkout.username,
                billingAddress: checkout.address,
                billingSecondAddress: checkout.secondAddress,
                billingCity: checkout.city,
                billingState: checkout.state,
                billingZipCode: checkout.zipCode,
            }))
        }

        if (handleValidation()) {
            navigate('/paymentCheckout')
        } else {
            alert(`Form has errors. ` + errors)
        }
    }

    if (
        Object.keys(shoppingCart).length === 0 ||
        Object.keys(shoppingCart).length === undefined
    ) {
        return (
            <>
                <h1>ERROR go to home page</h1>
            </>
        )
    } else {
        return (
            <body className="w-screen h-screen flex flex-row items-center overflow-auto flex-wrap">
                <h1
                    className="text-3xl self-start w-full h-5"
                    onClick={() => navigate(-1)}
                >
                    {' '}
                    ←
                </h1>
                <form
                    onSubmit={contactSubmit}
                    className="w-full h-full flex flex-col items-center justify-start mb-5"
                >
                    <section className="w-full h-full flex flex-col items-center justify-start mt-5">
                        <h1>Shipping Address</h1>
                        <label className="w-11/12 text-black">Full Name:</label>
                        <input
                            className="w-11/12 border-solid h-12 border-2 mb-5"
                            type="text"
                            name="username"
                            value={checkout.username}
                            onChange={handleChange}
                            required
                        />
                        <label className="w-11/12 text-black">
                            Street Address:
                        </label>

                        <input
                            className="w-11/12 h-12 border-solid border-2 mb-5"
                            type="text"
                            name="address"
                            value={checkout.address}
                            onChange={handleChange}
                            required
                        />
                        <label className="w-11/12 text-black">
                            Building/Apartment/Unit #:
                        </label>

                        <input
                            className="w-11/12 h-12 border-solid border-2 mb-5"
                            type="text"
                            name="secondAddress"
                            value={checkout.secondAddress}
                            onChange={handleChange}
                        />
                        <div className="w-11/12 h-12 flex flex-row flex-wrap mb-5">
                            <label className="w-1/3 text-black">City:</label>
                            <label className="w-1/3 text-black">State</label>
                            <label className="w-1/3 text-black">Zip:</label>
                            <input
                                className="w-1/3 border-solid border-2"
                                type="text"
                                name="city"
                                value={checkout.city}
                                onChange={handleChange}
                                required
                            />

                            <select
                                className="w-1/3 border-solid border-2 overflow-y"
                                name="state"
                                value={checkout.state}
                                onChange={handleChange}
                                required
                            >
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                            <input
                                className="w-1/3 border-solid border-2"
                                type="tel"
                                name="zipcode"
                                value={checkout.zipcode}
                                onChange={handleChange}
                                pattern="[0-9]*"
                                maxLength={5}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault()
                                    }
                                }}
                                required
                            />
                        </div>
                        <div className="flex flex-row w-11/12">
                            <input
                                type="checkbox"
                                name="billingCheck"
                                checked={checkout.billingCheck}
                                onChange={handleChange}
                            />
                            <label>
                                Is this the same as your billing address?
                            </label>
                        </div>
                    </section>

                    {checkout.billingCheck ? null : (
                        <section className="w-full h-full flex flex-col items-center justify-start mt-5">
                            <h1>Billing Address</h1>
                            <label className="w-11/12 text-black">
                                Full Name:
                            </label>
                            <input
                                className="w-11/12 border-solid h-12 border-2  mb-5"
                                type="text"
                                name="billingName"
                                value={checkout.billingName}
                                onChange={handleChange}
                                required
                            />
                            <label className="w-11/12 text-black">
                                Street Address:
                            </label>
                            <input
                                className="w-11/12 h-12 border-solid border-2 mb-5"
                                type="text"
                                name="billingAddress"
                                value={checkout.billingAddress}
                                onChange={handleChange}
                                required
                            />
                            <label className="w-11/12 text-black">
                                Building/Apartment/Unit #:
                            </label>
                            <input
                                className="w-11/12 h-12 border-solid border-2 mb-5"
                                type="text"
                                name="billingSecondAddress"
                                value={checkout.billingSecondAddress}
                                onChange={handleChange}
                                required
                            />
                            <div className="w-11/12 h-12 flex flex-row flex-wrap mb-5">
                                <label className="w-1/3 text-black">
                                    City:
                                </label>
                                <label className="w-1/3 text-black">
                                    State:
                                </label>
                                <label className="w-1/3 text-black">Zip:</label>
                                <input
                                    className="w-1/3 border-solid border-2"
                                    type="text"
                                    name="billingCity"
                                    value={checkout.billingCity}
                                    onChange={handleChange}
                                    required
                                />

                                <select
                                    className="w-1/3 border-solid border-2 overflow-y"
                                    name="billingState"
                                    value={checkout.billingState}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="AL">AL</option>
                                    <option value="AK">AK</option>
                                    <option value="AR">AR</option>
                                    <option value="AZ">AZ</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DC">DC</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="IA">IA</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="MA">MA</option>
                                    <option value="MD">MD</option>
                                    <option value="ME">ME</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MO">MO</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="NC">NC</option>
                                    <option value="NE">NE</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NV">NV</option>
                                    <option value="NY">NY</option>
                                    <option value="ND">ND</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VT">VT</option>
                                    <option value="VA">VA</option>
                                    <option value="WA">WA</option>
                                    <option value="WI">WI</option>
                                    <option value="WV">WV</option>
                                    <option value="WY">WY</option>
                                </select>
                                <input
                                    className="w-1/3 border-solid border-2"
                                    type="tel"
                                    name="billingZipcode"
                                    value={checkout.billingZipcode}
                                    onChange={handleChange}
                                    pattern="[0-9]*"
                                    maxLength={5}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault()
                                        }
                                    }}
                                    required
                                />
                            </div>
                        </section>
                    )}

                    <button className="bg-stone-200 shadow-md text-black w-full rounded-md text-center mt-5 h-10">
                        Next
                    </button>
                </form>
            </body>
        )
    }
}
