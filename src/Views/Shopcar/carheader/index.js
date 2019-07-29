import React from 'react'
import css from './carheader.module.scss'






class carheader extends React.Component{
    render(){
        return(
            <div className={css.carheader}>
                <img src="/imgs/car/home.png" alt="" onClick={()=>this.changePage()}/>
                <h4>购物车</h4>
            </div>
        );

    }
    changePage = () => {
        this.props.history.push('/home')
    }
}
export default carheader
