import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECT_PATH } from '../const/const';

const ProjectCard = ({project, activeProjectCardId, onProjectCardSelect, isSelected}) => {
    const handleOnMouseEnter = () => {
        console.log(`project.id mouse enter`, project.id)
        onProjectCardSelect(project.id)
    }
    return <>
        <article className="projects__card" onMouseEnter={handleOnMouseEnter}>
            <div className="projects__image">
                <img src={project.cardPicture} alt={project.name} width="280" height="175" />
            </div>
            <div className="projects__information"> 
                <h3 className="projects__name">{project.name} and {activeProjectCardId}</h3>
                <Link className="btn projects__link-info" to={`/${PROJECT_PATH}/${activeProjectCardId}`}>Learn more</Link>
            </div>
        </article>
    </>
}

export default ProjectCard;