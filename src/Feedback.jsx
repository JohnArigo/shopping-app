import { Button } from '@mantine/core'
import { useState } from 'react'
import { send } from 'emailjs-com'

export default function Feedback() {
    const [formContent, setFormContent] = useState({
        name: '',
        description: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormContent((prevContent) => {
            return {
                ...prevContent,
                [name]: value,
            }
        })
    }

    console.log(formContent.name)
    console.log(formContent.description)

    const onSubmit = (e) => {
        e.preventDefault()
        send(
            'service_y0qtnsm',
            'template_wivb8og',
            formContent,
            'CYy8c6jKVFoxlEgCU'
        )
            .then((response) => {
                console.log('Success!', response.status, response.text)
            })
            .catch((error) => {
                console.log('Error Sending the message', error)
            })
    }

    //service_y0qtnsm
    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <form
                onSubmit={onSubmit}
                className="w-2/3 h-5/6 flex flex-col items-center justify-center"
            >
                <h1 className="h-1/6">Thank you for your Feedback!</h1>
                <input
                    className="h-1/6 w-full border-solid border-2 border-zinc-300 mb-2"
                    name="name"
                    type="text"
                    value={formContent.name}
                    placeholder="Project Name/Page Name"
                    onChange={handleChange}
                />
                <input
                    className="h-3/6 w-full border-solid border-2 border-zinc-300 "
                    name="description"
                    value={formContent.description}
                    type="textarea"
                    placeholder="Type your feedbackhere, Thank you!"
                    onChange={handleChange}
                />
                <div className="h-1/6 w-full flex justify-center mt-3">
                    <button className="bg-stone-200 shadow-sm text-black">
                        Submit
                    </button>
                </div>
            </form>
        </main>
    )
}
