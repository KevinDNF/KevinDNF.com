import React from 'react';
import AvatarDescription from '../AvatarDescription/AvatarDescription'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'

const Landing = () => {
    return( 
    <div style={homeStyle}>
        <AvatarDescription />
        <div style={scrollStyle}>
            <ScrollIndicator  />
        </div>
    </div>);
}

const scrollStyle = {
    position: 'absolute',
    bottom: '2em',
}

const homeStyle = {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Landing;