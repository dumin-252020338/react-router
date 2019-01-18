import React, { Component } from 'react';
import './text.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from './test/router/index.js';
import Layout from './test/layout/index.jsx';

class RouterStudy extends Component {
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
                    name: '新闻列表',
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
        // console.log(router)
        router.map((v, i) => { 
            if (v.routes) {
                console.log('routes')
            }
        })
        return (
            <Router>
                    <div className="App">
                    <h1>{this.state.title}</h1>
                    <h2>
                        {
                            this.state.link.map((v, i) => {
                                if (v.console) {
                                    console.log('qwe')
                                }
                                return (
                                    <Link key={i} to={v.to}>{v.name}</Link>
                                )
                            })
                        }
                    </h2>
                    <Layout>
                        <h2>
                            {
                                router.map((v, i) => {
                                    if (v.exact) {
                                        return (
                                            <Route key={i} path={v.path} component={v.component} exact></Route>
                                        )
                                    }else {
                                        return (
                                            <Route
                                                key={i}
                                                path={v.path}
                                                render={
                                                    (props) => {
                                                        return (
                                                            <v.component
                                                                {...props}
                                                                abc='123'
                                                                routes={v.routes}
                                                            ></v.component>
                                                        )
                                                    }
                                                }
                                            >
                                            </Route>
                                        )
                                    }
                                })
                            }
                        </h2>
                        {/* <NewsList></NewsList> */}
                        {/* <ShopList></ShopList> */}
                    </Layout>
                    <br/>
                    <hr/>
                    <hr/>
                </div>
            </Router>
        )
    }
}
export default RouterStudy;