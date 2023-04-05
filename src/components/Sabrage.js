import { useRouter } from 'next/router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import pt from '../locales/pt'
import en from '../locales/en'

const Sabrage = () => {

    const router = useRouter()
    const { locale } = router
    const t = locale === 'pt' ? pt : en

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    }

    return (
        <section className='c-sabrage'>
            <div className="container">
                <div className="c-sabrage__wrapper">
                    <Slider {...settings}>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide1}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide2}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide3}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide4}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide5}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide6}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide7}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide8}
                            </h6>
                        </div>
                        <div className='c-sabrage__item'>
                            <h6>
                                {t.slide9}
                            </h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Sabrage