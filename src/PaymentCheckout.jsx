import { Button } from '@mantine/core'
import { orderRoute } from './routes-constants'
import { Link } from 'react-router-dom'
import { check } from 'prettier'

// just use a library lo
export default function PaymentCheckout({ checkout, setCheckout }) {
    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setCheckout((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    /* const testing = () => {
        if (checkout.card[0] === undefined || checkout.card[0] === 0) {
            return 'none'
        } else {
            return 'hello's
        }
    } */

    var creditDebit = checkout.card

    const cardFunction = () => {
        if (creditDebit.length > 0) {
            if (creditDebit.length % 4 === 0) {
                creditDebit += ' '
            }
        }
    }

    return (
        <main className="w-screen h-screen flex flex-row flex-wrap">
            <form className="w-11/12 h-4/6 flex justify-center items-center">
                <section className="flex flex-row flex-wrap w-11/12 h-1/6">
                    <label className="w-4/12">Card Number:</label>
                    <input
                        className="w-8/12 border-solid border-2 border-black"
                        type="tel"
                        inputMode="string"
                        name="card"
                        autocomplete="cc-number"
                        value={creditDebit
                            .toString()
                            .replace(/\W/gi, '')
                            .replace(/(.{4})/g, ' $1')}
                        onChange={handleChange}
                        pattern="[0-9]*"
                        maxLength={19}
                        placeholder="XXXX XXXX XXXX XXXX"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault()
                            }
                        }}
                        onKeyDown={cardFunction()}
                    />
                    <label className="w-4/12">Expiration</label>
                    <select
                        className="w-3/12 overflow-y  border-solid border-2 border-black"
                        name="month"
                        value={checkout.month}
                        onChange={handleChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <select
                        className="w-3/12 overflow-y border-solid border-2 border-black"
                        name="year"
                        value={checkout.year}
                        onChange={handleChange}
                    >
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                    </select>
                    <label className="w-4/12">CVV</label>
                    <input
                        className="w-5/12 border-black border-2 border-solid"
                        type="tel"
                        name="cvv"
                        value={checkout.cvv}
                        onChange={handleChange}
                        pattern="[0-9]*"
                        maxLength={4}
                        placeholder="XXXX"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault()
                            }
                        }}
                    />
                </section>
            </form>
            <Link className="w-full mb-5" to={orderRoute}>
                <Button className="bg-stone-200 shadow-md text-black w-full rounded-md text-center mt-5">
                    Next
                </Button>
            </Link>
        </main>
    )
}
