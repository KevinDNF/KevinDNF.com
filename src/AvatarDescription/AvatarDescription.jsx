import React, { Component } from 'react';

export class AvatarDescription extends Component {
    render() {
        return (
            <div style={MainStyle}>
                <img alt='Profile Pic' src='/img/profile.svg' style={ImgStyle}></img>
                <div>
                    <div style={TitleStyle}>kevindnf.</div>
                    <div style={SubtitleStyle}>web, IOS, game development</div>
                </div>
            </div>
        );
    }
}

const MainStyle = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}

const ImgStyle = {
    width: '10em',
    margin: '2em'
}

const TitleStyle = {
    fontSize: '2.5em',
    fontWeight: 'extralight'
}

const SubtitleStyle = {
    fontSize: '1.2em',
    fontWeight: 'light'
}

export default AvatarDescription;