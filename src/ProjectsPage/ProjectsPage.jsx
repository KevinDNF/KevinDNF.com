import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Projects from './Projects';
import "animate.css/animate.css";

const ProjectsPage = () => {
    const ProjectsPageMainStyle = {
        padding: '3em',
        backgroundColor: '#FFBDD9',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
    }

    return( 
        <div id='Projects' style={ProjectsPageMainStyle}>
            {
            Projects.map(({title, body, imgSrc}) => ( 
                <ProjectCard title={title} body={body} imgSrc={imgSrc} />
            ))
            }
        </div>
    );
}

export default ProjectsPage;