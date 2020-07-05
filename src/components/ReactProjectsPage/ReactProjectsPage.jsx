import React from 'react';
import GithubProfileApp from './GithubCardsProject/GithubProfileApp/GithubProfileApp'
import { Link } from 'react-router-dom';

const ReactProjectsPage = () => (
    <>
        <Link to ='/'>Back</Link>
        <GithubProfileApp />
    </>
);

export default ReactProjectsPage;