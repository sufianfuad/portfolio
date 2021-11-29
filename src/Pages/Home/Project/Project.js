import React from 'react';
import './Project.css'
const Project = ({ project }) => {
    const { name, img, description } = project;
    return (
        <div className="col-md-4 col-lg-4 col-sm-12">
            <div className="team-card">
                <div className="img-box">
                    <img src={img} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="text-box">
                    <h4>{name}</h4>
                    <p><span className="position">{description}</span></p>
                </div>
                {/* <div className="teamIcon-container">
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                    <div className="teamIcon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Project;