import React, { Component } from 'react';



class Listitem extends Component {

    state = {
        ajaxId:null,
        ajaxName:null
    }

    render() {
        var item = this.props.info
        var itemId = this.props.info_1
        return(
            <li onClick = {() =>this.goListDetail(itemId,item)}>
                {item}
                <span>></span>
            </li>
        ) 
    }
    goListDetail = (itemId,item) =>{
        this.props.history.push(`/list/${itemId}`)
        localStorage.setItem("listname",`${item}`)
        this.setState({
            ajaxId:itemId,
        })
    }
}
export default Listitem;
