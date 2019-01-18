import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
class About extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: '联系电话',
                    to: 'phone',
                },
                {
                    title: ' 地址',
                    to: 'address',
                },
                {
                    title: '招贤纳士',
                    to: 'welcome',
                }
            ]
        }
    }
    state = {
        onOffLogin: false,
        msg:'',
    }
    handleClick = (e) => {
        e.preventDefault()
        let name = this.refs.name.value
        let pwd = this.refs.pwd.value
        // console.log(name, pwd)
        if (name === 'admin' && pwd === 'admin') {
            console.log('登录成功')
            this.setState({
                onOffLogin: true,
            }) 
        } else {
            console.log("用户名或密码错误")
        }
    }
    render() {
        if( this.state.onOffLogin ){
            return <Redirect to='/' />
            // return <Redirect to={{pathname:'/'}} />
        }
        return (
            <div>
                <h1>关于我们</h1>
                <form action="" onSubmit={this.handleClick} >
                    用户名：<input type="text" ref='name' />
                    密码：<input type="text" ref='pwd' />
                    <input type='submit'/>
                </form>
                <ul>
                    {
                        this.state.list.map((v, i) => {
                            return (
                                <Link key={i} to={`/about/${v.to}`}>{v.title}</Link>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
}
export default About;