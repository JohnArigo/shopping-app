import github from './github.png'
import facebook from './facebook.png'
import linkedIn from './linkedIn.png'
import email from './email.png'
import { Link } from 'react-router-dom'
import { feedbackRoute } from './routes-constants'

export default function Footer() {
    return (
        <footer className="flex flex-row h-1/12 w-screen justify-between items-center bg-slate-300">
            <section className="flex flex-row items-center w-3/6">
                <div className="ml-3">
                    <a href="https://linkedIn.com/in/john-arigo">
                        <img className="h-9 w-9" src={linkedIn} />
                    </a>
                </div>
                <div className="ml-3">
                    <a href="https://www.facebook.com/john.arigo.39/">
                        <img className="h-10 w-10" src={facebook} />
                    </a>
                </div>
                <div className="ml-3">
                    <a href="https://github.com/RaggedyRagz">
                        <img className="h-10 w-10" src={github} />
                    </a>
                </div>
            </section>
            <section className="flex flex-row items-center w-3/6">
                <Link to={feedbackRoute} className="mr-3">
                    <img className="h-10 w-10" src={email} />
                </Link>
                <div className="mr-1">Send a feedback</div>
            </section>
        </footer>
    )
}
