import React, { Component } from 'react';
import './text.css'
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            textArr: [],
            selectArr: ['请选择','上海', '北京', '深圳', '广州'],
            select: '',
            sex: '0',
            like:[{
                    title: '上班',
                    checked: true
                },
                {
                    title: '周一上班',
                    checked: false
                },
                {
                    title: '周五上班',
                    checked: false
                },
                {
                    title: '周末上班',
                    checked: false
                }],
        }
        this.onChangeText = this.onChangeText.bind(this)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let textArr = this.state.textArr
            textArr.push(this.refs.text.value)
        this.setState({
            textArr: textArr,
        });
        let changeLike=this.state.like.map((v, i) => {
                if (v.checked) {
                    // console.log(v.title)
                    return v.title
                } else {
                    return '未选择'
                }
        })
        console.log(
            this.state.text,
            this.state.select,
            this.state.sex === '1' ? '女' : '男',
            changeLike,
        )
        this.state.text=''
    }
    onChangeText(e) {
        this.setState({
            text: e.target.value,
        });
    }
    onChangeSelect = (e)=> {
        this.setState({
            select: e.target.value, 
        });
    }
    onChangeRadio = (e) => {
        this.setState({
            sex: e.target.value, 
        });
    }
    handleLike = (index) => {
        // console.log(index)
        const like = this.state.like
            like[index].checked = !like[index].checked
        this.setState({
            like
        })
    }
    render() {
        return (
            <div id='test'>
                <h3>测试部分</h3>
                <form action="">
                    <div>
                        <p className='title'>1.常规输入框</p>
                        <div className="output">
                            内容如下：{this.state.text}
                        </div>
                        <ul>
                            {
                                this.state.textArr.map((v, i) => {
                                    return (
                                        <li key={i}>
                                            <p>{v}</p>
                                            <hr/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <input type="text" ref='text' value={this.state.text} onChange={this.onChangeText} placeholder="请输入"/>
                        <hr />
                        <p className='title'>2.下拉输入框</p>
                        <select value={this.state.select} onChange={this.onChangeSelect}>
                            {
                                this.state.selectArr.map((v, i) => { 
                                    return (
                                        <option key={i}>{v}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                        <p className='title'>3.单选按钮</p>
                        性别：<input type="radio" name='sex' value='0' checked={this.state.sex === '0'} onChange={this.onChangeRadio} />男
                              <input type="radio" name='sex' value='1' checked={this.state.sex === '1'} onChange={this.onChangeRadio} />女
                        <p className='title'>4.多选按钮</p>
                            {
                            this.state.like.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <input type="checkbox" checked={v.checked} onChange={this.handleLike.bind(this,i)} />{v.title}
                                    </div>
                                    )
                                })
                                }
                        <br />
                        <hr/>
                        <input type='submit' defaultValue='默认提交' onClick={this.handleSubmit}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default Test;