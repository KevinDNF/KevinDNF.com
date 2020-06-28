import React from 'react';
import GithubCard from "../GithubCard/GithubCard";


const ListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
}

const GithubCardList = (props) => (
    <div style={ListStyle}>
        {props.profiles.map(data => <GithubCard key={data.id} {...data} />)}
    </div>
);

export default GithubCardList;