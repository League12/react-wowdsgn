import React, { Component } from 'react';
import {Carousel } from 'antd-mobile'
import css from './ListDetailNavbar.module.scss'

class ListDetailNavbar extends Component {
    state = {
        datalist : [],
        looplist : [["ALL",35],["沙发",20],["椅凳",21],["柜架",24],["休闲椅",2012],["餐桌",2210],["茶几和边桌",2211],["书桌",2212],["床",2310]],
        selectedIndex: 1.5,
        animating:true
    }

    componentWillMount(){
        var itemIdinfo = this.props.info
        if(itemIdinfo === '25'){
            this.setState({
                looplist :[["ALL",35],["落地灯",2510],["吊灯",2511],["氛围灯",2512],["台灯",2513],["灯泡和配件",2514],["壁灯",40012]]
            })
        }
        if(itemIdinfo === '26'){
            this.setState({
                looplist :[["ALL",35],["餐具",2610],["餐桌布置",2612],["咖啡和茶",2613],["酒具",400080]]
            })
        }
        if(itemIdinfo === '27'){
            this.setState({
                looplist :[["ALL",35],["锅具",2710],["厨房用具",2711],["烘焙用具",2713]]
            })
        }
        if(itemIdinfo === '28'){
            this.setState({
                looplist :[["ALL",35],["地毯",2810],["靠垫抱枕",2811],["床上用品",2812],["毛巾织物",2813]]
            })
        }
        if(itemIdinfo === '29'){
            this.setState({
                looplist :[["ALL",35],["时钟",2910],["墙饰",2911],["摆件",2912],["香薰和蜡烛",2913],["花瓶花盆",2914],["镜子",2915],["挂画",400002]]
            })
        }
        if(itemIdinfo === '31'){
            this.setState({
                looplist :[["ALL",35],["浴室家具",3111],["浴室用品",3112]]
            })
        }
        if(itemIdinfo === '32'){
            this.setState({
                looplist :[["ALL",35],["生活用品",3210],["首饰",3211],["箱包",3212],["雨伞",3213],["电子",3214],["个人护理",3215],["文具",3217],["手表",400001]]
            })
        }
        if(itemIdinfo === '33'){
            this.setState({
                looplist :[["ALL",35],["餐厅收纳",2611],["厨房收纳",2712],["浴室收纳",3110],["卧室收纳",3216],["客厅收纳",400088],["洗漱",400089],["旅行收纳",400096]]
            })
        }
    }

    render () {
        return(
            <div className={css.listNavbar}>
                <header>
                    <img src="/imgs/yzyimage/home.png" alt="" onClick = {() => this.gohome()}/>
                    <h3>{localStorage.getItem('listname')}</h3>
                    <img src="/imgs/yzyimage/category.png" alt="" onClick = {() => this.golist()}/>
                </header>
                <Carousel selectedIndex={this.state.selectedIndex}
                dots={false}
                autoplay={false}
                slideWidth={.25}
                key={this.state.looplist.length}
                afterChange = {this.handleChange}>
                    {this.state.looplist.map((item)=>
                        <div key={`looplist${item[1]}`} className={css.listlist} onClick={() =>this.props.listEvent(item[1])}>
                            {item[0]}
                        </div>)}
                </Carousel>
            </div>
        )
    }
    gohome = () =>{
        this.props.history.push(`/home`)
    }
    golist = () =>{
        this.props.history.push(`/list`)
    }
}

export default ListDetailNavbar;