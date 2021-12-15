import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { socialInfo, Social, projectsInfo } from '../const/const';
import { ReactComponent as LinkedIn } from '../../img/linkedin.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as GitHub } from '../../img/github.svg';
import ProjectCard from './project-card';
const Projects = () => {
  const [activeProjectCardId, setActiveProjectCardId] = useState(1);
    const returnSvg = (link) => {
      switch (link) {
        case Social.LINKEDIN:
          return <LinkedIn /> ;
        case Social.FACEBOOK:
          return  <Facebook />;
        case Social.INSTAGRAM:
          return <Instagram />;
        case Social.GITHUB:
          return <GitHub />;
        default:
          return ``;
      }
    }
    const handleProjectCardSelect = (selectedCardId) => {
      setActiveProjectCardId(selectedCardId)
    }
    return <>
        <section className="projects" id="projects">
            <div className="skills__title-container projects__title-container">
                <h2 className="title projects__title">Projects</h2>
            </div>
            <div className="container-site projects__wrapper">
              <p className="about__text about__text--first projects__intro">I always keep the code in order so that your project can be easily maintained. Below there are a few of my works, take a look and make sure.</p>
            {/* <div className="d-flex justify-content-between list projects__filter-list">
                {socialInfo.map((social) => {
                  return <div key={social.name} className="social-footer__item">
                    <a href="!#" className="social-footer__link" aria-label={social.name}>
                      {returnSvg(social.id)}
                    </a>
                  </div>;
                })}
              </div> */}
              <div class="projects__list">
                  {projectsInfo.map((project) => {
                    return <ProjectCard 
                      key={project.id}
                      project={project}
                      activeProjectCardId={activeProjectCardId}
                      onProjectCardSelect={handleProjectCardSelect}
                      isSelected={project.id === activeProjectCardId}
                    />
                  })}
              </div>
            </div>
        </section>
    </>
}

export default Projects;