import './Footer.css'
import github from './github.png'
import facebook from './facebook.png'
import linkedIn from './linkedIn.png'
import email from './email.png'

export default function Footer() {
    return (
        <footer>
            <section className="footer-social">
                <div className="social-app">
                    <a href="https://linkedIn.com/in/john-arigo">
                        <img className="h-9 w-9" src={github} />
                    </a>
                </div>
                <div className="social-app">
                    <a href="https://www.facebook.com/john.arigo.39/">
                        <img className="h-10 w-10" src={facebook} />
                    </a>
                </div>
                <div className="social-app">
                    <a href="https://github.com/RaggedyRagz">
                        <img className="h-10 w-10" src={linkedIn} />
                    </a>
                </div>
            </section>
            <section className="footer-copyright">
                <div className="copyright">
                    <img src={email} />
                </div>
                <div className="copyright">copyright info here</div>
            </section>
        </footer>
    )
}
