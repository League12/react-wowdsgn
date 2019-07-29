import React,{Component} from 'react'
import {withRouter} from 'react-router'
import css from './index.module.scss'
class FilmItem extends Component{
    render(){
        var item = this.props.info
        return <li onClick={()=>this.changePage(item.productId, "",item.productTitle,item.sellPrice,item.productImg)} className={css.item}>
            <img src={item.productImg} alt={item.nm}/>
            <p>{item.productTitle}</p>
            <p><span>￥</span>{item.sellPrice}</p>
            <p>{item.prizeOrSlogan}</p>
        </li>
    }

    changePage = (productId, parentProductId, productName, sellPrice, productImg)=>{
        let img = productImg.replace(new RegExp("/", "g"), "\\");
        this.props.history.push(`/detail/${JSON.stringify([productId, parentProductId, productName, sellPrice, img])}`);

        
    }
}

export default withRouter(FilmItem)
//withROuter 是一个高阶函数， 输入低阶组件， 生成高阶组件（FilmItem是孩子）