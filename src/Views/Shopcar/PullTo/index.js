import React,{Component} from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import {PullToRefresh} from 'antd-mobile'
import axios from 'axios'
import css from './index.module.scss'
import FilmItem from '../Caritem'

class PullTo  extends Component{

    state = {
        datalist:[],
        down:false,
        refreshing:false,
        current:1

    }
    
    render(){
        return(
    <div>
        <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{ height: '100%', overflow: 'auto',
            }}
            indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
            direction={this.state.down ? 'down' : 'up'}
            refreshing={this.state.refreshing}
            onRefresh={() => {
                console.log("daole")
                let current = this.state.current;
                
                this.setState({
                    refreshing:true,
                    current: ++current
                })
                axios.get(`/recommend/cart?currentPage=${current}&_=1563966689551`).then(res=>{
                    console.log(res.data.data,"ssss")
                    this.setState({
                       datalist:[...this.state.datalist,...res.data.data],
                       refreshing:false
                    })
                })




            }}
        >
            {
                this.state.datalist.map(item=> 
                   <FilmItem key={item.productId} info={item} /> 
                )   
                 }
            <div className={css.heightdd}>上拉可以刷新</div>  
            
        </PullToRefresh>
    </div>
        )
    }
}

export default PullTo
