import React from 'react';
import { advantagesServices, Advantages } from '../const/const';
import { ReactComponent as FastIcon } from '../../img/rocket.svg';
import { ReactComponent as Mobile } from '../../img/smartphone.svg';
import { ReactComponent as Optimimization } from '../../img/trending-up.svg';
import { ReactComponent as User } from '../../img/accessibility-human.svg';

const Services = () => {
    const returnIconAdvantagesService = (link) => {
        switch (link) {
          case Advantages.FAST:
            return <FastIcon /> ;
          case Advantages.RESPONSIVE:
            return <Mobile />
          case Advantages.OPTIMIZATION:
            return <Optimimization />;
          case Advantages.USER:
            return <User />
          default:
            return ``;
        }
      }
    return <section className="services container-site" id="interface">
        <h2 className="title services__title">The interface i guarantee</h2>
        <div className="services__list">
              {advantagesServices.map((advantage) => {
                return <div key={advantage.name} className="services__item">
                    <h3 className="services__name">{advantage.name}</h3>

                    <div className="services__diamond">
                        {/* <DiamonPicture /> */}
                        <div className="services__diamond-container">
                          <span className="services__diamond-part services__diamond-part--first"></span>
                          <span className="services__diamond-part services__diamond-part--second"></span>
                          <span className="services__diamond-part services__diamond-part--third"></span>
                          <span className="services__diamond-part services__diamond-part--fourth"></span>
                        </div>
                        <div className="services__icon-container">{returnIconAdvantagesService(advantage.id)}</div>
                    </div>
                    <p className="services__description">{advantage.description}</p>
                </div>;
              })}
        </div>
         <div className="services__decoration"></div>
         <p className="services__slogan">Made with love</p>
    </section>
}

export default Services;
