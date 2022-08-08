import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function PaymentCheckout({ checkout, setCheckout }) {
    const date = new Date()
    const month = date.getMonth()
    const year = date.getFullYear()
    console.log(checkout)

    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setCheckout((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    var creditDebit = checkout.card

    const [val, setVal] = useState({
        fields: {},
        errors: {},
    })

    const handleValidation = () => {
        let fields = checkout
        let errors = {}
        let formIsValid = true

        if (!fields['card']) {
            formIsValid = false
            errors['card'] = 'Cannot be empty'
        }

        if (fields['card'].length < 18) {
            formIsValid = false
            errors['card'] = 'Invalid Credit Card Number'
        }

        if (!fields['cvv']) {
            formIsValid = false
            errors['cvv'] = 'Cannot be empty'
        }

        if (fields['cvv'].length < 3) {
            formIsValid = false
            errors['cvv'] = 'Invalid CVV Number'
        }

        if (fields['year'] <= year && fields['month'] < month) {
            formIsValid = false
            errors['year'] = 'Invalid Expiration Date'
        }

        setVal({ errors: errors })
        return formIsValid
    }

    const navigate = useNavigate()

    const contactSubmit = (e) => {
        const errors = JSON.stringify(val.errors)
        e.preventDefault()
        if (handleValidation()) {
            navigate('/order')
        } else {
            alert(`Form has errors. ` + errors)
        }
    }

    const cardFunction = () => {
        if (creditDebit.length > 0) {
            if (creditDebit.length % 4 === 0) {
                creditDebit += ' '
            }
        }
    }

    return (
        <main className="w-screen h-screen flex flex-row flex-wrap">
            <form
                onSubmit={contactSubmit}
                className="w-full h-full flex justify-center items-center flex-wrap"
            >
                <section className="flex flex-row flex-wrap w-11/12 h-1/6">
                    <label className="w-4/12">Card Number:</label>
                    <input
                        className="w-8/12 border-solid border-2 border-black"
                        type="string"
                        inputMode="string"
                        name="card"
                        autocomplete="cc-number"
                        value={creditDebit
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
                        required
                    />
                    <label className="w-4/12">Expiration</label>
                    <select
                        className="w-3/12 overflow-y  border-solid border-2 border-black"
                        name="month"
                        value={checkout.month}
                        onChange={handleChange}
                        required
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
                        required
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
                        minLength={3}
                        maxLength={4}
                        placeholder="XXXX"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault()
                            }
                        }}
                        required
                    />
                </section>
                <Button
                    onClick={contactSubmit}
                    className="bg-stone-200 shadow-md text-black w-full rounded-md text-center mt-5"
                >
                    Next
                </Button>
            </form>
        </main>
    )
}
