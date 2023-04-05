import { useRouter } from 'next/router'
import pt from '../locales/pt'
import en from '../locales/en'

const Navbar = () => {

    const router = useRouter()
    const { locale, locales } = router
    const t = locale === 'pt' ? pt : en

    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo">
                <img src="/images/logo-no-background.svg" alt="wine sabrar-logo" />
            </div>
            <div className="c-navbar__wrapper">
                <ul className="c-navbar__menu">
                    <li className="c-navbar__menu__item">
                        <a href="#sabrage">sabrage</a>
                    </li>
                    <li className="c-navbar__menu__item">
                        <a href="#social">{t.navSocial}</a>
                    </li>
                </ul>
                <div className="c-navbar__lang">
                    {locales.map(l => (
                        <img
                            key={l}
                            onClick={() => router.push('/', '/', { locale: l })}
                            src={l === 'pt' ? '/images/brazil.png' : '/images/usa.png'}
                            alt={l}
                            className={locale === l ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar