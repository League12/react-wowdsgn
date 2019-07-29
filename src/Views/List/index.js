import React,{Component} from 'react';
import css from './List.module.scss';
import ListmItem from './Listitem'

class Search extends Component {
    render(){
        return(
            <div>
                <input type="text" placeholder="搜索我的尖叫好物" onClick={this.goSearch}></input>
            </div>
        )
    }
    goSearch = () =>{
        this.props.history.push('/search')
    }
}

class List extends Component {
    state = {
        furnitureList : [["沙发",20],["椅凳",21],["床",2310],["柜架",24],["餐桌",2210],["茶几和边桌",2211],["书桌",2212]],
        livingGoods : [["灯具",25],["用餐",26],["时尚生活",32],["收纳",33],["烹饪",27],["纺织品",28],["家饰",29],["卫浴",31]],
    }
    render() {
        return (
            <div className={css.goodList}>
                <Search {...this.props}></Search>
                <img src="/imgs/yzyimage/furniture.png" alt=""/>
                <ul>
                    {this.state.furnitureList.map((item) => 
                        <ListmItem key={item[1]} info={item[0]} info_1={item[1]} {...this.props}/>
                    )}
                </ul>
                <img src="/imgs/yzyimage/household.png" alt=""/>
                <ul>
                    {this.state.livingGoods.map((item) => 
                        <ListmItem key={item[1]} info={item[0]} info_1={item[1]} {...this.props}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default List;
