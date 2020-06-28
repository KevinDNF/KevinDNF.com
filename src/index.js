import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/HomePage';
import ProjectPage from './ProjectsPage/ProjectsPage';
import AboutPage from './AboutPage/AboutPage';

import ReactProjects from './ReactProjects/ReactProjects';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <ProjectPage />
    <AboutPage />
    <ReactProjects />
  </React.StrictMode>,
  document.getElementById('root')
);