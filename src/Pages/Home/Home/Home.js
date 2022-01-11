import React from 'react';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import Projects from '../Projects/Projects';

import './Home.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
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