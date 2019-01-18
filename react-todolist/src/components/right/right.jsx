import React, { Component } from 'react';
import { Router, Link, Route } from 'react-router-dom';
import Layout from '../layout/index.jsx';
import router from '../router/index.js';
import right from './right.css';
class Right extends Component{
    render() {
        return (
        <div id='right'>
            <Layout>
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
            </Layout>
        </div>
            
        )
    }
}
export default Right;
                    