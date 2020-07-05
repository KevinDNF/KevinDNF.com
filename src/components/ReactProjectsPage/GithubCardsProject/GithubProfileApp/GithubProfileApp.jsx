import React, {Component} from 'react';
import GithubCardList from '../GithubCardList/GithubCardList';
import Form from '../GithubSearchForm/GithubSearchForm'


class GithubProfileApp extends Component {
    state = {
        profiles: []
    };

    addNewProfile = (profile) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profile]
        }));
    }

    render() {
        return(
            <div>
                <h2>Github Profiles</h2>
                <GithubCardList profiles={this.state.profiles} />
                <Form onSubmit={this.addNewProfile}/>
            </div>
        )
    }
}

export default GithubProfileApp;