import React, { Component } from 'react';
// import './text.css'
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
class Antds extends Component {
    render() {
        return (
            <div id='box'>
                <h3>antd</h3>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">Search</Button>
                <Icon type="step-forward" />
            </div>
        )
    }
}
export default Antds;