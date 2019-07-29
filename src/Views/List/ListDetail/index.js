import React, { Component } from 'react';
import ListDetailNavbar from './ListDetailNavbar'
import ListDetailContent from './ListDetailContent'

class ListDetail extends Component {
    state = {
        number:null
    }
    render() {
        return(
            <div>
                <ListDetailNavbar  info={this.props.match.params.itemId} {...this.props} listEvent = {(itemId_1) => {
                    this.setState({
                        number:itemId_1
                    })
                }}></ListDetailNavbar>
                <ListDetailContent info={this.props.match.params.itemId} info_1 = {this.state.number} {...this.props}></ListDetailContent> 
            </div>
        ) 
    }
}
export default ListDetail;