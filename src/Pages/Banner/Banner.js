import React from 'react';
import banner from '../../images/port-banner.jpg';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import './Banner.css';
import NavBar from '../Shared/NavBar/NavBar';
import profileImg from '../../images/sufian.png';
const Banner = () => {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    }
    return (
        <section id='profile'>
            <div className="container">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 40,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 20,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "bottom",
                                enable: true,
                                outMode: "bounce",
                                random: true,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />

                <div className="banner-container">
                    <NavBar></NavBar>
                    <div className="row portfolio-profile">
                        <div className="col-md-4 col-lg-4 col-12">
                            <div className='img-fluid d-sm-block d-none'>
                                <img className='portfolioImg' src={profileImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-12">
                            <div className='text-white'>
                                <p className='portfolio-name'>Abu Sufian</p>
                                <p className='portfolio-work'>I am a Front End Developer</p>
                                <div className="portfolio-contact">
                                    <dl className='contact-list contact-list-opacity-title'>
                                        <dt>AGE:</dt>
                                        <dd>22</dd>
                                        <dt>PHONE:</dt>
                                        <dd>0178272844</dd>
                                        <dt>EMAIL:</dt>
                                        <dd><a href="">sufianfuad2611@gmail.com</a></dd>
                                        <dt>ADDRESS:</dt>
                                        <dd>Sylhet, Bangladesh</dd>
                                    </dl>
                                </div>
                                <p className='social-portfolio'>
                                    <a href="http://" target="_blank">
                                        <small>LinkedIn</small>
                                    </a>
                                    <a href="" target="_blank">
                                        <small>facebook</small>
                                    </a>
                                    <a href="" target="_blank">
                                        <small>Twitter</small>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;