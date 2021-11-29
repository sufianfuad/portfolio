import React from 'react';
import banner from '../../images/port-banner.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container">
            {/* <div className="banner-background">
                <div className="banner-img">

                </div>
            </div> */}
            <div className="">
                <div className="banner-details container">
                    <div className="row  banner d-flex align-items-center  justify-content-center">
                        <div className="col-md-7">
                            <div className="banner-abt">
                                <h2>Abu Sufian</h2>
                                <p>I am a Front End Developer</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veritatis ea deserunt libero voluptatem voluptate, nesciunt incidunt, vero blanditiis dolores distinctio laborum delectus aspernatur. Illum fuga magnam corporis veritatis praesentium!</p>
                                <div className="d-flex align-items-center">
                                    <Link to="/about">
                                        <button className="btn btn-primary resume-btn px-3 py-2 me-2 fw-bold">Read More</button>
                                    </Link>
                                    <Link to="/resume">
                                        <button className="btn btn-success resume-btn px-3 py-2 fw-bold">Download Resume</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="banner-img">
                                <img className="img-fluid" src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;