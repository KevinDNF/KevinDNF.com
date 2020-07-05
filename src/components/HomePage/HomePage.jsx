import React from 'react';
import Landing  from './Landing/Landing';
import AboutPage from './AboutPage/AboutPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
        <Landing />
        <ProjectsPage />
        <AboutPage />
        <Link to ='reactprojects'>Go To react projects</Link>
    </>
);

export default HomePage