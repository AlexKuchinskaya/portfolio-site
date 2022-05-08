import React from 'react';

const About = () => {
    return <>
        <section className="about container-site" id="about">
            <h2 className="title about__title">About me</h2>
            <div className="about__container">
                <p className="about__text about__text--first">Since beginning my journey as a front-end developer, I've done remote work for different companies and collaborated with talented people to create digital products for both business and consumer use.</p>

                <p className="about__text about__text--second">Well-organised, hard working, multitasking person. I'm a dedicated professional with scrupulous eye for detail  and a determination to deliver the highest quality.
                I always try to better myself with every project I work on. I also posses subtle sense of humour and excellent communicative skills.
                </p>
                <p className="about__text about__text--hobby about__text--third">Fan of any sport activities, yoga and latin dances. Constantly working on self-improvement and personal development. </p>
                <a href="#contacts" className="about__text about__text--link">Let's make something special!</a>
                <div className="about__photo">
                    <picture>
                        {/*<source*/}
                        {/*    type="image/webp"*/}
                        {/*    srcSet="../src/img/my-photo.webp"/>*/}
                        <img
                            src="../../img/my-photo-new.jpg"
                            width="300"
                            alt="Alexandra Kuchynskaya"/>
                    </picture>
                </div>
                <a
                    className="button button--purple about__download"
                    href="../../static/docs/cv-alexandra-english.pdf"
                    target="_blank">
                    Download my CV
                </a>
            </div>
        </section>
    </>
}

export default About;
