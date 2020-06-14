import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "animate.css/animate.css"

const ProjectsPage = () => {
    const ProjectsPageMainStyle = {
        padding: '3em',
        backgroundColor: '#FFBDD9',
    }

    return( 
        <div id='ProjectsMarker' style={ProjectsPageMainStyle}>
            <ProjectCard />
        </div>
    );
}

export default ProjectsPage;