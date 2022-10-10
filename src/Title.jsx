import Products from './Products'
import { Link } from 'react-router-dom'
import Feedback from './Feedback'
import { feedbackRoute, homeRoute } from './routes-constants'

export default function Title({ setTitleState }) {
    return (
        <body className="  w-screen h-screen bg-titleBack bg-cover">
            <header className=" text-xl w-full h-full flex flex-col sm:flex-row justify-center items-center sm:justify-center backdrop-blur-sm">
                <Link to={homeRoute}>
                    <div
                        onClick={() => setTitleState(true)}
                        className=" cursor-pointer w-48 h-12 mb-5 bg-white sm:mr-5 sm:mb-0   flex justify-center items-center rounded-sm shadow-md"
                    >
                        <p>Shop Now</p>
                    </div>
                </Link>
                <Link to={feedbackRoute}>
                    <div
                        onClick={() => setTitleState(true)}
                        className="cursor-pointer w-48 h-12 bg-white sm:ml-5 flex justify-center items-center rounded-sm shadow-md"
                    >
                        Write Feedback
                    </div>
                </Link>
            </header>
        </body>
    )
}
