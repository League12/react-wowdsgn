import React, { Component } from 'react';
import css from './ListDetailContent.module.scss'
import axios from 'axios'
import {PullToRefresh} from 'antd-mobile'

class ListDetailContent extends Component {
    state = {
        datalist:[],
        sort: "onShelfTime",
        order: "desc",
        currentPage:1,
        itemIdinfo_123:null,
        down:false,
        refreshing:false
    }

    componentDidMount(){
        var itemIdinfo = this.props.info
        this.setState({
            itemIdinfo_123 : itemIdinfo,
            sort: "onShelfTime",
            order: "desc",
            currentPage:1,
        })
        this.ajax(itemIdinfo)
        // console.log(this.state.datalist)
    }

    componentWillReceiveProps(props){
        var itemIdinfo_1 = props.info_1
        this.setState({
            itemIdinfo_123 : itemIdinfo_1,
            sort: "onShelfTime",
            order: "desc",
            currentPage:1,
            datalist:[]
        })
        this.ajax(itemIdinfo_1)  
        // console.log(this.state.datalist)
    }

    ajax = (Id) =>{
        axios.get(`/pages/category/${Id}?currentPage=${this.state.currentPage}&sort=${this.state.sort}&order=${this.state.order}&_=1564046181150`).then(res =>{
            this.setState({
                datalist:[...this.state.datalist,...res.data.data]
            })
        })
    }

    render (){
        return(
            <div className = {css.listDetailContent}>
                <ul>
                    <li onClick={()=>this.lookNew()}>上新</li>
                    <li onClick={()=>this.lookSell()}>销量</li>
                    <li onClick={()=>this.lookPrice()}>价格</li>
                </ul>

                <PullToRefresh
                damping={60}
                style={{
                width: "100%",
                height: "100%",
                overflow: 'auto',
                }}
                // indicator={this.state.down ? {} : { deactivate: '111上拉可以刷新' }}
                direction={this.state.down ? 'down' : 'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({
                        refreshing:false
                    })
                    setTimeout(()=>{
                        this.setState({
                            refreshing:false,
                            currentPage:this.state.currentPage+1
                        },() =>{
                            this.ajax(this.state.itemIdinfo_123) 
                         })
                    },10)
                }}
            >
                {this.state.datalist.map((item) => 
                    <dl key={item.productId}>
                        <dt><img src={item.productImg} alt=""/></dt>
                        <dd><p>{item.productTitle}</p><span>￥{item.sellPrice}</span></dd>
                    </dl>
                )}
            </PullToRefresh>
                {/* {this.state.datalist.map((item) => 
                    <dl key={item.productCode}>
                        <dt><img src={item.productImg} alt=""/></dt>
                        <dd><p>{item.productTitle}</p><span>￥{item.sellPrice}</span></dd>
                    </dl>
                )} */}
            </div>
        )
    }
    lookNew = () =>{
        this.setState({
            sort: "onShelfTime",
            order: "desc",
            currentPage:1,
            datalist:[]
        },
            () =>{
               this.ajax(this.state.itemIdinfo_123) 
            }
        )
    }
    lookSell = () =>{
        this.setState({
            sort: "sales",
            order: "desc",
            currentPage:1,
            datalist:[]
        },
        () =>{
           this.ajax(this.state.itemIdinfo_123) 
        })
    }
    lookPrice = () =>{
        this.setState({
            sort: "price",
            order: this.state.order === "desc"?"asc":"desc",
            currentPage:1,
            datalist:[]
        },
        () =>{
           this.ajax(this.state.itemIdinfo_123) 
        })
    }
}

export default ListDetailContent;
