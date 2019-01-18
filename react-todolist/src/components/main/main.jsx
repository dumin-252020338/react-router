import React, { Component } from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import './main.css';
import Right from '../right/right.jsx';
import { Button, Icon } from 'antd';
// import 'antd/dist/antd.css';
class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '购物网站',
            link: [
                {
                    name: '首页',
                    to: '/'
                },
                {
                    name: '新闻',
                    to: '/news'
                },
                {
                    name: '科技',
                    to: '/newsList'
                },
                {
                    name: '商品',
                    to: '/goods'
                },
                {
                    name: '商品列表',
                    to: '/shoplist'
                },
                {
                    name: '客服中心',
                    to: '/server'
                },
                {
                    name: '关于我们',
                    to: '/about',
                },
            ]
        }
    }
    render() {  
        return (
            <div id='con'>
                <div className='left'>
                    <ul>
                        {
                            this.state.link.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <NavLink exact key={i} to={v.to}>{v.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Right></Right>
            </div>
        )
    }
}
export default Main;