import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (
            <img src={require('./logo.png')} width='200' alt=""/>
        );
    }
}

export default Logo;