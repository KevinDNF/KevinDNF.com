import React from 'react';
import GithubProfileApp from '../GithubProfileApp/GithubProfileApp';

const MainStyle = {
    padding: '3em',
    backgroundColor: '#ffbdd9',
}

const CardContainer = {
    backgroundColor: 'white',
    padding: '3em',
    boxShadow: '0 0 8px 0px #4c4c4c70',
    borderRadius: '0.5em',
    display: 'flex',
    flexDirection: 'row',
    minWidth: '80%',
    marginRight: '3em',
}


const ReactProjects = (props) => {
    return (
        <div style={MainStyle} >
            <h1 style={{textAlign: 'center'}} >React Projects</h1>
            <div style={CardContainer}>
                <GithubProfileApp />
            </div>
        </div>
    );
}

export default ReactProjects;