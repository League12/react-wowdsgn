import React, { Component } from 'react';
import css from './ListDetailContent.module.scss'
import axios from 'axios'

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

        window.onscroll = () =>{
            if(document.querySelector("dl:nth-last-of-type(1)")){
            if(document.querySelector("dl:nth-last-of-type(1)").getBoundingClientRect().top<(window.innerHeight-250)){
                this.setState({
                    currentPage:this.state.currentPage+1
                })
                this.ajax(this.state.itemIdinfo_123)
            }
            }
        }
    }

    componentWillReceiveProps(props){
        var itemIdinfo_1 = props.info_1
        this.setState({
            itemIdinfo_123 : itemIdinfo_1,
            sort: "onShelfTime",
            order: "desc",
            currentPage:1,
            datalist:[]
        },
        () =>{
            this.ajax(itemIdinfo_1)  
        })
        

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
                {this.state.datalist.map((item) => 
                    <dl key={item.productId} onClick = {() => {this.handleDivClick( item.productId, item.parentProductId,
                        item.productName, item.sellPrice, item.productImg)}}>
                        <dt><img src={item.productImg} alt=""/></dt>
                        <dd><p>{item.productTitle}</p><span>￥{item.sellPrice}</span></dd>
                    </dl>
                )}
            
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

    handleDivClick(productId, parentProductId, productName, sellPrice, productImg) {
        let img = productImg.replace(new RegExp("/", "g"), "\\");
        let name = productName.replace(new RegExp("/", "g"), "\\");
        this.props.history.push(`/detail/${JSON.stringify([productId, parentProductId, name, sellPrice, img])}`);
    }
}

export default ListDetailContent;
