import React from 'react';
import { ReactComponent as ShuffleArrow } from '../../img/shuffle.svg';
import { basicSkills, levelSkillsData, SkillsId } from '../const/const';
import { checkIsNumberEven } from '../utils/utlis';
import { ReactComponent as CodeSlash } from '../../img/code-slash.svg';
import { ReactComponent as Gear } from '../../img/gear.svg';
import { ReactComponent as Book } from '../../img/book.svg';
import { ReactComponent as File } from '../../img/file-earmark-richtext.svg';


const Skills = () => {
    const RED = `red`;
    const PURPLE = `purple`;
    const renderIconSkills = (link) => {
        switch (link) {
          case SkillsId.MARKUP:
            return <CodeSlash /> ;
          case SkillsId.PROGRAMMING:
            return <Gear />
          case SkillsId.FRAMEWORK:
            return <Book />;
          case SkillsId.CMS:
            return <File />
          default:
            return ``;
        }
      }
    return <>
        <section className="skills" id="skills">
            <div className="skills__title-container">
                <h2 className="title skills__header">My Skills</h2>
            </div>

            <div className="skills__container container-site">
                <ul className="skills__list list">
                    {basicSkills.map((basicSkill) => {
                        return <li
                            key={basicSkill.id}
                            className="skills__item">
                            {renderIconSkills(basicSkill.id)}
                            <h4 className="skills__title">{basicSkill.name}</h4>
                            <ul className="skilss__units-list list">
                                {basicSkill.skillsList.map((skillItem, id) => {
                                    return  <li
                                        key={id}
                                        className="skilss__unit-item">{skillItem}</li>
                                })}
                            </ul>
                        </li>
                    })}
                </ul>
            <div className="skills__arrow">
                <ShuffleArrow />
            </div>
            </div>
            <div className="infographics container-site">
                <div className="infographics__circle">
                    <span className="infographics__logo">Level of the main skills</span>
                </div>
                <ul className="list infographics__list">
                    {levelSkillsData.map((skillData) => {
                        return <li
                                    key={skillData.id}
                                   className={`infographics__item infographics__item--${checkIsNumberEven(skillData.id, RED, PURPLE)}`}>
                            <div className="infographics__skill">
                                <h3 className="infographics__title">{skillData.name}</h3>
                                <p className="infographics__description">{skillData.description}</p>
                            </div>
                            <div className="infographics__image">
                                <img src={skillData.src} width="50px" height="50px" alt={skillData.name}></img>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    </>
}

export default Skills;
