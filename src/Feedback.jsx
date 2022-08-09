import { Modal } from '@mantine/core'
import { useState } from 'react'
import { send } from 'emailjs-com'

export default function Feedback() {
    const [formContent, setFormContent] = useState({
        name: '',
        description: '',
    })
    const [modalState, setModalState] = useState(false)
    const [response, setResponse] = useState()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormContent((prevContent) => {
            return {
                ...prevContent,
                [name]: value,
            }
        })
    }

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
                setResponse('Your feedback was succesfully sent!')
            })
            .catch((error) => {
                console.log('Error Sending the message', error)
                setResponse('Error!, please try again' + error)
            })
    }

    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <Modal
                className="text-center"
                opened={modalState}
                onClose={() => setModalState(false)}
                title="Thank you!"
            >
                {response}
            </Modal>
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
                <textarea
                    className="h-3/6 w-full border-solid border-2 border-zinc-300 resize-none text-start"
                    name="description"
                    value={formContent.description}
                    type="text"
                    rows="10"
                    placeholder="Feedback here, Thank you!"
                    onChange={handleChange}
                />
                <div className="h-1/6 w-full flex justify-center mt-3">
                    <button
                        onClick={() => setModalState(true)}
                        className="bg-stone-200 shadow-sm text-black w-2/6 h-4/6"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    )
}
