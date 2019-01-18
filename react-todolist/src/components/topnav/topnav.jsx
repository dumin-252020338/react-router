import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import './topnav.css';
import Logo from '../logo/index.jsx';
import '../logo/logo.css';
class Topnav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '购物网站',
            link: [
                {
                    name: '个人中心',
                    to: '/'
                },
                {
                    name: '设置',
                    to: '/news'
                },
                {
                    name: '退出',
                    to: '/newsList'
                },
            ]
        }
    }
    render() {        
        return (
            <div id='topnav'>
                <div className='logo'>
                    <Logo></Logo>
                </div>
                <div className='topRight'>
                    <ul>
                        {
                            this.state.link.map((v, i) => {
                                return (
                                    < li key={i}>
                                        <Link key={i} to={v.to}>{v.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>                
            </div>
        )
    }
}
export default Topnav;