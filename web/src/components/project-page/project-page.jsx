import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavigationSite from '../navigation-site/navigation-site';
import ProjectstSlider from '../projects-slider/projects-slieder';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjectPage = () => {
    return <>
        <NavigationSite isMainPage={false}/>
        <main className="main">
            <h1 className="visually-hidden">Portfolio site of Alexandra Kuchynskaya</h1>
            <section className="container-site project-card">
                <h2 className="title project-card__name">Title</h2>
                <div className="project-card__wrapper">
                    <ul className="list project-card__list">
                        <li className="project-card__item"> 
                            <h3 className="project-card__title">Stack</h3>
                            <p className="project-card__text">HTML/CSS, Grunt, Sass, Git, Адапитвная резиновая верстка, Ретинизация графики, Оптимизация сайта.</p>
                        </li>
                        <li className="project-card__item">
                            <h3 className="project-card__title">Webpage</h3>
                            <a></a>
                        </li>
                        <li  className="project-card__item">
                            <h3 className="project-card__title">Description</h3>
                            <p className="project-card__text">xvxvxvxvxvvxvxvxv</p>
                        </li>
                    </ul>
                    <ProjectstSlider />
                </div>
                <Link className="button button--purple project-card__home" to="/">To home page</Link>
            </section>
        </main>
        <Footer isMainPageFooter={false}/>
    </>
}

export default ProjectPage; 