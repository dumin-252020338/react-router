import React, {Component} from 'react';

class Layout extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>这是Layout页面</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;