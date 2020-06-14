import React from 'react';

const AboutCard = () => {
    const AboutCardStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

    const CardContainerStyle = {
        backgroundColor: 'white',
        padding: '3em',
        boxShadow: '0 0 8px 0px #4c4c4c70',
        borderRadius: '0.5em',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'row',
        flex: '1 100%',
        position: 'relative',
        left: '3em'
    }

    const ImgContainerStyle = {
        width: '50%',
        position: 'relative',
        right: '3em',
        bottom: '-10px',
    }

    const ContentContainerStyle = {
        padding: '0 4em 2em 0'
    }

    return( 
        <div style={AboutCardStyle}>
            <div style={CardContainerStyle}>
                <div style={ContentContainerStyle}>
                    <h2 style={{marginTop: '0'}} >Who Am I?</h2>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                </div>
            </div>

            <div style={ImgContainerStyle}>
                <img width='100%' src='/img/Profile_Expanded.svg'></img>
            </div>
        </div>
);
}

export default AboutCard;