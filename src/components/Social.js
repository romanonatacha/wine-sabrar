import { useRouter } from 'next/router'
import pt from '../locales/pt'
import en from '../locales/en'

const Social = () => {

    const router = useRouter()
    const { locale } = router
    const t = locale === 'pt' ? pt : en

    return (
        <section className='c-social'>
            <div>
                <h2>{t.social}</h2>

                <div className="container">
                    <div className="c-social__icons">
                        <a href='https://www.instagram.com/wine_sabrar/' target="_blank" rel="noreffer">
                            <img src="/images/instagram.png" alt="instagram" />
                        </a>
                        <a href='https://www.tiktok.com/@wine_sabrar/' target="_blank" rel="noreffer">
                            <img src="/images/tiktok.png" alt="tiktok" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social