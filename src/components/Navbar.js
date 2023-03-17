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
                    <a href="#massagens">Massagens e procedimentos</a>
                </li>
                <li className="c-navbar__menu__item">
                    <a href="#beneficios">benefícios da massoterapia</a>
                </li>
                <li className="c-navbar__menu__item">
                    <a href="#avaliacoes">Avaliações</a>
                </li>
                <li className="c-navbar__menu__item">
                    <a href="#contato">Contato</a>
                </li>

            </ul>
            {/* <a className="c-navbar__whatsapp" href="https://api.whatsapp.com/send?phone=5551992173433" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Agende aqui</span>
            </a> */}
        </nav>
    )
}

export default Navbar