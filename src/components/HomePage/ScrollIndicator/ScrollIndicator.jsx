import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "animate.css/animate.css"
import "./ScrollIndicator.css"

const ScrollIndicator = () => {
    const [showLinks, shouldShow] = useState(false);

    const linksContainerStyle = () => {
        return{
            display: showLinks ? '' : 'none',
            marginBottom: '1.5em',
        }
    };

    return( 
        <div className='Scroll__Indicator' style={containerStyle}
                 onMouseLeave={() => shouldShow(false)}
                onMouseOver={() => shouldShow(true)}
                >
            <div style={linksContainerStyle()}>
                <a style={linkStyle} href='#Projects'>Projects</a>
                <a style={linkStyle} href='#CV'>CV</a>
                <a style={linkStyle} href='#AboutPage'>About</a>
            </div>

            <div style={scrollIndicatorStyle} className='animate__animated animate__bounce animate__delay-2s'>
                <FontAwesomeIcon icon={faAngleDown} size='2x'/>
            </div>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const linkStyle = {
    margin: '0.5em',
}

const scrollIndicatorStyle = {
}

export default ScrollIndicator;