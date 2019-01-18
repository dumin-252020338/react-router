import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NewsList extends Component {
    constructor (){
        super()
        this.state = {
            list:[
                {
                    id: 1,
                    title:'华为借芯片进军AI比肩国际巨头 10年研发投入39..'
                },
                {
                    id: 2,
                    title:'Nokia X7 发布，1699 元就可以把骁龙 ..'
                },
                {
                    id: 3,
                    title:'华为发布达芬奇架构，策略有助于发展生态系统'
                },
                {
                    id: 4,
                    title:'华为Mate 20今晚发布 网络惊现大量黑稿'
                },
                {
                    id: 5,
                    title:'千元旗舰以“大”为美 华为畅享系列新品旨为投你所好'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>这是新闻列表页面</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={`/newsList/${item.id}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default NewsList;