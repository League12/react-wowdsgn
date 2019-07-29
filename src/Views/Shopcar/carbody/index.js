import React from 'react'
import scc from './carbody.module.scss'
import axios from 'axios'
import FilmItem from '../Caritem'
import PullTo from '../PullTo'

class carbody extends React.Component{

    state ={
        datalist:[]
    };

    componentWillMount(){
        axios.get("/recommend/cart?currentPage=1&_=1563966689551").then(res=>{
            this.setState({
               datalist:res.data.data
            })
        })
    }


    render(){
        return(
            <div>
                <div className={scc.kong}>
                    <p>您的购物车还是空的</p>
                        <button>看看收藏</button>
                        <button>去逛逛</button>
                </div>
                <div className={scc.recommended}>
                    <p>-为您推荐-</p>
                </div>
                <ul>

                {
                this.state.datalist.map(item=>
                   <FilmItem key={item.productId} info={item} />
                )
                 }

                 <div className={scc.clierr}></div>
                 </ul>
                <PullTo></PullTo>

            </div>
        );


    }
}

export default carbody
