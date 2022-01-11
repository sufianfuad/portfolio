import React from 'react';
import './Resume.css';
const Resume = () => {
    return (
        <div className="resume-container container text-center">
            <div className="resume-info">
                <h2>Here Are My Resume</h2>
                <p>Please Download, If you want to see my details information</p>
            </div>
            <div className="resume-link">
                <a href="https://drive.google.com/file/d/1a8qfy08SNgoAiipvej8Bkve8cPJMCuXQ/view?usp=sharing"
                    type="button"
                    className="btn btn-primary px-3 py-2 fw-bolder download-resume"
                >Download Resume</a>
            </div>
        </div>
    );
};

export default Resume;