import React from 'react';

const ProjectCard = (props) => {
    const {title, body, imgSrc} = props;
    console.log(title);


    const MainContainerStyle = {
        backgroundColor: 'white',
        padding: '3em',
        boxShadow: '0 0 8px 0px #4c4c4c70',
        borderRadius: '0.5em',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'row',
        minWidth: '80%',
        marginRight: '3em',
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
            <img alt={title} width='100%' src={'/img/' + imgSrc}></img>
        </div>
        <div style={ContentContainerStyle}>
        <h2 style={{marginTop: '0'}} >{title}</h2>
        {body}
        </div>
    </div>);
}

export default ProjectCard;