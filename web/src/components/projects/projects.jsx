import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { socialInfo, Social} from '../const/const';
import { ReactComponent as LinkedIn } from '../../img/linkedin.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as GitHub } from '../../img/github.svg';
import ProjectCard from './project-card';
import Context from '../context/context';
const Projects = () => {
  const [context, setContext] = useContext(Context);
  const [activeProjectCardId, setActiveProjectCardId] = useState(1);
  console.log(`context.activeCard`, context.activeCard)
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
      // setActiveProjectCardId(selectedCardId)
      setContext({
        ...context,
        activeCard: selectedCardId,
      })
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
                  {context.projectsInfo.map((project) => {
                    return <ProjectCard 
                      key={project.id}
                      project={project}
                      activeProjectCardId={context.activeCard}
                      onProjectCardSelect={handleProjectCardSelect}
                      isSelected={project.id === context.activeCard}
                    />
                  })}
              </div>
            </div>
        </section>
    </>
}

export default Projects;