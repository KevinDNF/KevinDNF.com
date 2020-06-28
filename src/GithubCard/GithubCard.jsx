import React, { Component } from 'react';

class GithubCard extends Component {
    render(){
        const profile = this.props;
        return (
            <a href={profile.html_url} style={cardStyle}>
                <img style={imgStyle} src={profile.avatar_url}></img>
                <div style={infoStyle} >
                <div style={titleStyle}>{profile.name}</div>
                <div style={companyStyle}>{profile.company}</div>
                </div>
            </a>
        )
    }
}

const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0 0px 4px 1px #00000047',
    margin: '10px',
    textDecoration: 'none',
    color: 'black'
}

const infoStyle = {
    display: "inline-block",
    marginLeft: "1em",
    paddingRight: '1em'
}

const titleStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
}

const companyStyle = {

}

const imgStyle = {
    width: '5em'
}

export default GithubCard;