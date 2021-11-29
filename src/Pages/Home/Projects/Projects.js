import React from 'react';
import './Projects.css';
import project1 from '../../../images/p-1.png';
import project2 from '../../../images/p-2.png';
import project3 from '../../../images/p-3.png';
import Project from '../Project/Project';


// data  
const projects = [
    {
        id: 11,
        name: "Super Deluxe",
        description: 'This is a Single-page application',
        img: project1,
    },
    {
        id: 22,
        name: "Travel Explore",
        description: 'This is a Single-page application',
        img: project2,
    },
    {
        id: 33,
        name: "Medi Care",
        description: 'This is a Single-page application',
        img: project3,
    },
];
const Projects = () => {
    return (
        <div className="projects-container">
            <div className="heading-title text-center">
                <h1>
                    Portfolio Projects
                    <span className="dot-color">.</span>
                </h1>
            </div>
            <div className="projects-part">
                <div className="container">
                    <div className="row">
                        {
                            projects.map((project) => (
                                <Project key={project.id} project={project} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;