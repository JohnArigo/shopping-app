import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { cartRoute } from './routes-constants'

export default function PersonalCheckout({
    checkoutPersonal,
    setCheckoutPersonal,
}) {
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setCheckoutPersonal((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <body className="w-screen h-screen flex flex-row justify-center items-center overflow-auto">
            <form className="w-full h-full flex flex-col items-center justify-start mt-5 mb-5">
                <section className="w-full h-full flex flex-col items-center justify-start mt-5">
                    <h1>Shipping Address</h1>
                    <label className="w-11/12 text-black">Full Name:</label>
                    <input
                        className="w-11/12 border-solid h-12 border-2 mb-5"
                        type="text"
                        name="username"
                        value={checkoutPersonal.username}
                        onChange={handleChange}
                    />
                    <label className="w-11/12 text-black">
                        Street Address:
                    </label>

                    <input
                        className="w-11/12 h-12 border-solid border-2 mb-5"
                        type="text"
                        name="address"
                        value={checkoutPersonal.address}
                        onChange={handleChange}
                    />
                    <label className="w-11/12 text-black">
                        Building/Apartment/Unit #:
                    </label>

                    <input
                        className="w-11/12 h-12 border-solid border-2 mb-5"
                        type="text"
                        name="secondAddress"
                        value={checkoutPersonal.secondAddress}
                        onChange={handleChange}
                    />
                    <div className="w-11/12 h-12 flex flex-row flex-wrap mb-5">
                        <label className="w-1/3 text-black">City:</label>
                        <label className="w-1/3 text-black">State</label>
                        <label className="w-1/3 text-black">City:</label>
                        <input
                            className="w-1/3 border-solid border-2"
                            type="text"
                            name="city"
                            value={checkoutPersonal.city}
                            onChange={handleChange}
                        />

                        <select
                            className="w-1/3 border-solid border-2 overflow-y"
                            name="state"
                            value={checkoutPersonal.state}
                            onChange={handleChange}
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
                            type="number"
                            name="zipcode"
                            value={checkoutPersonal.zipcode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-row w-11/12">
                        <input
                            type="checkbox"
                            name="billingCheck"
                            checked={checkoutPersonal.billingCheck}
                            onChange={handleChange}
                        />
                        <label>Is this the same as your billing address?</label>
                    </div>
                </section>

                {checkoutPersonal.billingCheck ? (
                    <section className="w-full h-full flex flex-col items-center justify-start mt-5">
                        <h1>Billing Address</h1>
                        <label className="w-11/12 text-black">Full Name:</label>
                        <input
                            className="w-11/12 border-solid h-12 border-2  mb-5"
                            type="text"
                            name="billingName"
                            value={checkoutPersonal.billingName}
                            onChange={handleChange}
                        />
                        <label className="w-11/12 text-black">
                            Street Address:
                        </label>
                        <input
                            className="w-11/12 h-12 border-solid border-2 mb-5"
                            type="text"
                            name="billingAddress"
                            value={checkoutPersonal.billingAddress}
                            onChange={handleChange}
                        />
                        <label className="w-11/12 text-black">
                            Building/Apartment/Unit #:
                        </label>
                        <input
                            className="w-11/12 h-12 border-solid border-2 mb-5"
                            type="text"
                            name="billingSecondAddress"
                            value={checkoutPersonal.billingSecondAddress}
                            onChange={handleChange}
                        />
                        <div className="w-11/12 h-12 flex flex-row flex-wrap mb-5">
                            <label className="w-1/3 text-black">City:</label>
                            <label className="w-1/3 text-black">State</label>
                            <label className="w-1/3 text-black">City:</label>
                            <input
                                className="w-1/3 border-solid border-2"
                                type="text"
                                name="billingCity"
                                value={checkoutPersonal.billingCity}
                                onChange={handleChange}
                            />

                            <select
                                className="w-1/3 border-solid border-2 overflow-y"
                                name="billingState"
                                value={checkoutPersonal.billingState}
                                onChange={handleChange}
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
                                type="number"
                                name="billingZipcode"
                                value={checkoutPersonal.billingZipcode}
                                onChange={handleChange}
                            />
                        </div>
                    </section>
                ) : null}
                <Link className="w-3/12 mb-5" to={cartRoute}>
                    <button className="bg-stone-200 shadow-md text-black w-full rounded-md text-center mt-5">
                        Next
                    </button>
                </Link>
            </form>
        </body>
    )
}
