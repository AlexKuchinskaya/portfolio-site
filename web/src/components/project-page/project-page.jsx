import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavigationSite from '../navigation-site/navigation-site';
import ProjectstSlider from '../projects-slider/projects-slieder';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Context from '../context/context';

const ProjectPage = () => {
    const [context, setContext] = useContext(Context)
    console.log(`activeProjectCardId`, context.activeCard)
    const selectedProject = [...context.projectsInfo].filter((project) => project.id === context.activeCard)[0]
    console.log(`selectedProject`, selectedProject.name)
    console.log(`selectedProject images`, selectedProject.images)
    return <>
        <NavigationSite isMainPage={false}/>
        <main className="main">
            <h1 className="visually-hidden">Portfolio site of Alexandra Kuchynskaya</h1>
            <section className="container-site project-card">
                <h2 className="title project-card__name">{selectedProject.name}</h2>
                <div className="project-card__wrapper">
                    <ul className="list project-card__list">
                        <li className="project-card__item"> 
                            <h3 className="project-card__title">Stack</h3>
                            <p className="project-card__text">{selectedProject.technology}</p>
                        </li>
                        <li className="project-card__item">
                            <h3 className="project-card__title">Webpage</h3>
                            <a href={selectedProject.website} className="project-card__text project-card__text--website">{selectedProject.website}</a>
                        </li>
                        <li  className="project-card__item">
                            <h3 className="project-card__title">Description</h3>
                            <p className="project-card__text">{selectedProject.description}</p>
                        </li>
                    </ul>
                    <ProjectstSlider images={selectedProject.images}/>
                </div>
                <Link className="button button--purple project-card__home" to="/">To home page</Link>
            </section>
        </main>
        <Footer isMainPageFooter={false}/>
    </>
}

export default ProjectPage; 