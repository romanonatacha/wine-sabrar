// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { faSpa } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo">
                {/* <FontAwesomeIcon icon={faSpa} /> */}
                <img src="/images/logo-no-background.svg" alt="wine sabrar-logo" />
            </div>
            <ul className="c-navbar__menu">
                <li className="c-navbar__menu__item">
                    <a href="#sabage">sabrage</a>
                </li>
                <li className="c-navbar__menu__item">
                    <a href="#vinhos">vinhos</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar