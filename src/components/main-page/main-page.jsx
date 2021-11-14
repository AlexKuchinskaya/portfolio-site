import React, {useRef, useEffect, useState} from 'react';
import Parallax from 'parallax-js'
import Contact from '../contacts/contact';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import NavigationSite from '../navigation-site/navigation-site';
import About from '../about/about';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Services from '../services/services';
// import { CircularProgressbar } from 'react-circular-progressbar';


// import 'react-circular-progressbar/dist/styles.css';

const MainPage = () => {
    const [count, setCount] = useState(0);
    
    const sceneEl = useRef(null);
    const diagramEl = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    
    const createRefSectiosArray = () => {
        return new Array([aboutRef, skillsRef, servicesRef, projectsRef,contactRef])
    }

    // useEffect(() => {
    //     const parallaxInstance = new Parallax(sceneEl.current, {
    //       relativeInput: true,
    //       hoverOnly: true
    //     })
    
    //     parallaxInstance.enable();
    
    //     return () => parallaxInstance.disable();
    //   }, [])
    const createCounter = () => {
        // let count = 0;
        const setFrame = () => {
            setCount(count + 1);
            console.log(`count`, count)
            if (count === 101) {
                clearInterval(runCounter)
            } else {
                return null
            }

        }
        const runCounter = setInterval(setFrame, 50);

    }
    

    useEffect(() => {
        // setInterval(createSquare, 150)
        // createCounter();
        // createCounter();
        // return () => clearTimeout(createCounter);
        // const timer = setTimeout(() => {
        //     setCount(count + 1)
        //     console.log(`count`, count)
        //   }, 1000);
        //   return () => clearTimeout(timer);
      }, [])
    
    const handleMouseMove = (evt) => {
        sceneEl.current.querySelectorAll(`.banners__icon`).forEach((picture) => {
            const speed = picture.getAttribute(`data-speed`);
            console.log(`speed`, speed)
            const x = (document.querySelector(`.banners`).offsetWidth - evt.pageX * speed)/100;
            const y = (document.querySelector(`.banners`).offsetHeight - evt.pageY * speed)/100;
            picture.style.transform = `translateX(${x}px) translateY(${y}px)`
            console.log(`x`, x)
            console.log(`y`, y)
        }

        )
        // console.log(`all svg`, sceneEl.current.querySelectorAll(`.banners__icon`))
    }
    return <>
        <NavigationSite isMainPage={true} elementsArray={createRefSectiosArray}/>
        <main className="main">
            <h1 className="visually-hidden">Portfolio site of Alexandra Kuchynskaya</h1>
            {/* <section className="banner">
                <div className="banner__container">
                    <div className="banner__scene">
                        <h3 ref={sceneEl} className="banner__text">
                            <span data-depth-y="2">F</span>
                            <span data-depth-y="-10">R</span>
                            <span data-depth-y="5">O</span>
                            <span data-depth-y="-12">N</span>
                            <span data-depth-y="-8">T</span>
                            <span>-</span>
                            <span data-depth-y="4">E</span>
                            <span data-depth-y="-6">N</span>
                            <span data-depth-y="6">D</span>
                        </h3>
                        <ul className="list banner__list">
                            <li className="banner__item" data-depth-y="-0.5">
                                <img src="/img/001-developer.png"></img>
                            </li>
                        </ul>
                    </div>
                </div>

            </section> */}
            <section className="banners"  onMouseMove={(evt)=> handleMouseMove(evt)}>
                <h2 className="visually-hidden banners__introduction">Banner</h2>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div ref={sceneEl}>
                </div>
                <div className="banners__wrapper">
                    <p className="banners__intro">Hey! I’m <span className="banners__name">Alexandra Kuchinskaya</span> I'm front-end developer.
                    </p>
                </div>
                <a href="#contacts" className="container-site button banners__link">Contact me</a>
            </section>
            <About  />
            <Skills  />
            <Services />
            <Projects />
            <Contact/>
        </main>
        <Footer isMainPageFooter={true}/>
    </>
}

export default MainPage;