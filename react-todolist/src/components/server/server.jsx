import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './log.css'
class Server extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'登入/注册',
        }
    }
    render() {
        // console.log(this.props.match)
        // console.log(this.props.routes[0].path)
        const url = this.props.match.path
        return (
            <div className='log'>
                <div className='logLeft'>
                    {/* <Link to={`${url}/login`}>登入</Link>
                    <Link to={`${url}/logout`}>退出</Link> */}
                    <ul>
                        <li>
                            <Link to={this.props.routes[0].path}>登入</Link>
                        </li>
                        <li>
                            <Link to={this.props.routes[1].path}>退出</Link>
                        </li>
                    </ul>
                </div>
                <div className='logRight'>
                    {/* <Route path="/server/login" component={Login}></Route> */}
                    {/* <Route path="/server/logout" component={Logout}></Route> */}
                    {
                        this.props.routes.map((v, i) => {
                            return (
                                <Route path={v.path} component={v.component} key={i}></Route>
                            )
                            
                        })
                    }
                </div>
            </div>

        )
    }
}
export default Server;