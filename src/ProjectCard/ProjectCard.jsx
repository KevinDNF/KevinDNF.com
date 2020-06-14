import React from 'react';

const ProjectCard = () => {
    const MainContainerStyle = {
        backgroundColor: 'white',
        padding: '3em',
        boxShadow: '0 0 8px 0px #4c4c4c70',
        borderRadius: '0.5em',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'row'
    }

    const ImgContainerStyle = {
        flex: '1 80%',
    }

    const ContentContainerStyle = {
        flex: '1 100%',
        padding: '0 1.5em'
    }

    return( 
    <div style={MainContainerStyle}>
        <div style={ImgContainerStyle}>
            <img width='100%' src='/img/astrodroid.png'></img>
        </div>
        <div style={ContentContainerStyle}>
            <h2 style={{marginTop: '0'}} >Astrodroid</h2>
            Astrodroid is a game.
        </div>
    </div>);
}

export default ProjectCard;