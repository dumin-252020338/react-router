import React, { Component } from 'react';
import './autobar.css'
class Info extends React.Component{
            constructor(props){
                super(props)
                console.log('constructor 初始化数据1')
                this.state={
                    onOff:this.props.active
                }
                this.smallTitleClick = this.smallTitleClick.bind(this)
                this.insideToggleList = this.insideToggleList.bind(this)
            }
            insideToggleList(onOff){
                // console.log(this.refs.insideToggles)
                const insideToggles = this.refs.insideToggles
                const insideToggless = this.refs.insideToggless
                if(onOff){
                    insideToggles.style.height = insideToggles.scrollHeight+'px'
                    insideToggless.style.height = insideToggless.scrollHeight+'px'
                }else{
                    insideToggles.style.height = '0px'
                    insideToggless.style.height = '0px'
                }
            }
            //生命周期
            // 异步请求数据
            componentWillMount() {
                console.log('componentWillMount 异步请求数据2')
            }
            // 所有组件加载完成执行componentDidMount
            componentDidMount() {
                console.log('所有组件加载完成8')
                // console.log(this.state.onOff)
                this.insideToggleList(this.state.onOff)
            }
            // 将要接受来自父组件的数据
            componentWillReceProps(){
                console.log('componentWillReceProps 将要接受来自父组件的数据4')
            }
            // 组件是否更新
            shouldComponentUpdate(nextProps, nextState, nextContext) {
                console.log('shouldComponentUpdate 组件是否更新5')
                // console.log(nextProps.active)
                // console.log(nextState)
                if(this.state.onOff != nextProps.active){
                    this.setState({
                        onOff : nextProps.active
                    })
                }
                if(this.state.onOff != nextState.onOff){
                    this.insideToggleList(nextState.onOff)                                                                                                 
                }
                return true //必须要返回
            }
            // 将要更新组件
            componentWillUpdate(){
                console.log('componentWillUpdate 将要更新组件6')
            }
            // 更新完成
            componentDidUpdate(){
                console.log('componentDidUpdate 更新完成7')
            }
            smallTitleClick(idx){
                // console.log(this.props.idx)
                let onOff = !this.state.onOff
                this.setState({
                    onOff
                })
                if(onOff){
                    this.props.smallTitleClickList(this.props.idx)  
                }
            }
            render(){
                console.log('开始渲染3')
                let name = this.props.infoName.split(' ')
                let sex = this.props.infoSex.split(' ')
                let like = this.props.infoLike.split(' ')
                return(
                    <div>
                        {
                            name.map((name, i)=>{
                                    return (
                                        <div key={i} className="small" onClick={this.smallTitleClick}>英雄的姓名：{name}
                                        </div>
                                    )
                            })
                        }
                        {
                            sex.map((sex, i)=>{
                                    return (
                                        <div key={i} className='insideToggle' ref='insideToggles' >性别：{sex}
                                        </div>
                                    )
                            })
                        }
                        {
                            like.map((like, i)=>{
                                    return (
                                        <div key={i} className='insideToggle' ref='insideToggless' >特长：{like}
                                        </div>
                                    )
                            })
                        }
                    </div>
                )
            }
        }

        class List extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    array:[0, 0, 0, 0, 0, 0]
                }
                this.smallTitleClickList = this.smallTitleClickList.bind(this)
            }
            smallTitleClickList(idx){
                // console.log(idx)
                let array = this.state.array.map((v, i)=>{
                    if(i == idx){
                        return true
                    }else{
                        return false
                    }
                })
                this.setState({
                    array
                })
            }
            render(){
                return(
                    <ul>
                        {
                            this.props.keyword.map((v, i)=>{
                                let name = this.props.keyword[i].name
                                let sex = this.props.keyword[i].sex
                                let like = this.props.keyword[i].like
                                return(
                                    <li key={i}>
                                        <Info infoName={name} infoSex={sex} infoLike={like} active={this.state.array[i]} smallTitleClickList={this.smallTitleClickList} idx={i} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        }
        // Wrap的子组件
        class Con extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    onOff:this.props.show
                }
                this.handleClick = this.handleClick.bind(this)
                this.toggleList = this.toggleList.bind(this)
            }
            toggleList(onOff){
                // console.log(this.refs)
                const toggle = this.refs.toggle
                if(onOff){
                    toggle.style.height = toggle.scrollHeight+'px'
                }else{
                    toggle.style.height = '0px'
                }
            }
            //生命周期
            componentDidMount() {
                this.toggleList(this.state.onOff)
            }
            shouldComponentUpdate(nextProps, nextState, nextContext) {
                // console.log(nextProps)
                // console.log(nextState)
                if(this.state.onOff != nextProps.show){
                    this.setState({
                        onOff : nextProps.show
                    })
                }
                if(this.state.onOff != nextState.onOff){
                    this.toggleList(nextState.onOff)                                                                                                 
                }
                return true
            }
            handleClick(){
                // console.log(this.props.index)
                let onOff = !this.state.onOff
                this.setState({
                    onOff:onOff
                })
                if(onOff){
                    this.props.ChangeList(this.props.index)  
                }

            }
            render(){
                return(
                    <div>
                        <h2 onClick={this.handleClick}>{this.props.name}</h2>
                        <div className='toggle' ref='toggle'>
                            <List keyword={this.props.list} />
                        </div>
                    </div>
                )
            }
        }
        // Con的父组件
        class Wrap extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    arr: [1, 0, 0]
                }
                this.handleChangeList = this.handleChangeList.bind(this)
            }
            getData() {//拿到数据
                const data = {
                    "list1":{
                        "name":'战士',
                        "list":[
                            {
                                "name":'孙悟空',
                                "sex":'男',
                                "like":'打篮球'
                            },
                            {
                                "name":'达摩',
                                "sex":'女',
                                "like":'打乒乓球'
                            },
                            {
                                "name":'李信',
                                "sex":'男',
                                "like":'开双刀'
                            },
                            {
                                "name":'花木兰',
                                "sex":'男',
                                "like":'切重剑'
                            }
                        ]
                    },
                    "list2":{
                        "name":'射手',
                        "list":[
                            {
                                "name":'鲁班',
                                "sex":'男',
                                "like":'一直平A'
                            },
                            {
                                "name":'虞姬',
                                "sex":'女',
                                "like":'翘屁股'
                            },
                            {
                                "name":'后羿',
                                "sex":'男',
                                "like":'大鸟'
                            },
                            {
                                "name":'狄仁杰',
                                "sex":'男',
                                "like":'扔飞镖'
                            }
                        ]
                    },
                    "list3":{
                        "name":'法师',
                        "list":[
                            {
                                "name":'诸葛亮',
                                "sex":'男',
                                "like":'贴身打'
                            },
                            {
                                "name":'貂蝉',
                                "sex":'女',
                                "like":'飞来飞去'
                            },
                            {
                                "name":'张良',
                                "sex":'男',
                                "like":'放法阵'
                            },
                            {
                                "name":'妲己',
                                "sex":'女',
                                "like":'专治花里胡哨'
                            }
                        ]
                    }
                }
                return data
            }
            handleChangeList(index){
                // console.log(index)
                let arr = this.state.arr.map((v, i)=>{
                    if(i == index){
                        // console.log(i)
                        return true
                    }else{
                        return false
                    }
                })
                this.setState({
                    arr
                })
            }
            render(){
                const data = this.getData()
                return(
                    <div className='autobar'>
                        {
                            Object.keys(data).map((v, i)=>{
                                return (
                                    <Con 
                                        key={i} 
                                        {...data[v]} //解构数据
                                        show={this.state.arr[i]}
                                        ChangeList={this.handleChangeList}
                                        index={i}
                                    />
                                )
                            })
                        }
                    </div>
                )
            }
        }
export default Wrap;