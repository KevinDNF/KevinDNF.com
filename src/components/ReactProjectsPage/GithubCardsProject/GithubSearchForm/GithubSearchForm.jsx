import React, {Component} from 'react';

const FormStyle = {
    display: "flex",
    margin: '10px'
}

const InputStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
}

const SubmitBtn = {
    backgroundColor: '#313131',
    color: 'white',
    border: 'none',
    margin: '0 5px',
    borderRadius: '5px'
}

class Form extends Component {
    state = { userName: ''};

    handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const data = await resp.json();
        this.props.onSubmit(data);
        console.log(data);
        this.setState({ userName : ''});
    };

    hanldeOnChange = (e) => {
        this.setState({ userName: e.target.value});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} action="" style={FormStyle}>
                <input
                style={InputStyle}
                type='text'
                value={this.state.userName}
                onChange={this.hanldeOnChange}
                 required
                 placeholder="Github Username" />
                <button style={SubmitBtn}>Add card</button>
            </form>
        )
    }
}

export default Form;