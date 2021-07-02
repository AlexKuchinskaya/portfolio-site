import React from 'react';
import Contact from '../contacts/contsct';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainPage = () => {
    return <>
        <Header />
        <main className="main">
            <h1 className="visually-hidden">Portfolio site of Alexandra Kuchynskaya</h1>
            <section className="about">
                <h2>About me</h2>
                <div>
                    <p></p>
                    <img></img>
                    <a download></a>
                </div>
            </section>
            <section className="credit container">
                {/* <h2 className="visually-hidden">Кредиты</h2>
                <div className="credit__container slider__list swiper-wrapper">
                <h3 className="title credit__title slider__item-title slider-item__title">Лига Банк</h3>
                <span className="credit__description slider__item-desc slider-item__desc">Кредиты на любой случай</span>
                <a className="button button__white" href="#">Рассчитать кредит</a>
                </div> */}
            </section>
            <Contact />
        </main>
        <Footer />
    </>
}

export default MainPage;