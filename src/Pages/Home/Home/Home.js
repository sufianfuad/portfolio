import React from 'react';
import Banner from '../../Banner/Banner';
import NavBar from '../../Shared/NavBar/NavBar';
import Projects from '../Projects/Projects';

import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <Banner />
            <Projects />
        </div>
    );
};

export default Home;