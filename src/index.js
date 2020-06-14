import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/HomePage';
import ProjectPage from './ProjectsPage/ProjectsPage';
import AboutPage from './AboutPage/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <ProjectPage />
    <AboutPage />
  </React.StrictMode>,
  document.getElementById('root')
);