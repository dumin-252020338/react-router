import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ShopList extends Component {
    constructor (){
        super()
        this.state = {
            list:[
                {
                    id: 10,
                    title:'电子书 网络原创 数字杂志 多媒体图书'
                },
                {
                    id: 11,
                    title:'音乐 影视 教育音像'
                },
                {
                    id: 12,
                    title:'少儿 商务投资 英语学习与考试 文学 传记 励志'
                },
                {
                    id: 13,
                    title:'小说 文学 青春文学 传记 艺术'
                },
                {
                    id: 14,
                    title:'少儿 0-2岁 3-6岁 7-10岁 11-14岁'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h3>商品列表页面</h3>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={`/shoplist/${item.id}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ShopList;