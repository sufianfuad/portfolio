import React from 'react';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Projects from '../Projects/Projects';

import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <PersonalInfo></PersonalInfo>
            <Projects />
            <Contact></Contact>
        </div>
    );
};

export default Home;