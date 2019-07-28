import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {hideFooterBar, showFooterBar} from "../GoodsList/actionCreator";
import css from './index.module.scss';

class QueryList extends React.Component {

    state = {
        queryId: "",
        datalist: []
    };

    componentWillMount() {
        this.setState({
            queryId: this.props.match.params.queryId
        }, () => {
            axios.get(`/pages/productGroup/${this.state.queryId}/products?currentPage=1&_=1564228165831`).then(res => {
                this.setState({
                    datalist: res.data.data
                });
            });
        });
    }

    componentDidMount() {
        this.props.hideFooterBar();
    }

    componentWillUnmount() {
        this.props.showFooterBar();
    }

    render() {
        return (
            <div className={css.queryList}>
                <img src={`/imgs/league/${this.props.match.params.queryId}.jpg`} alt="img"/>
                <ul>
                    {
                        this.state.datalist.map((item, index) => {
                            return (
                                <li key={index} onClick={this.handleLiClick.bind(this, item.productId, item.parentProductId,
                                    item.productName, item.sellPrice, item.productImg)}>
                                    <img src={item.productImg} alt={item.productTitle}/>
                                    <p>{item.productName}</p>
                                    <span>¥{item.sellPrice}</span>
                                </li>
                            );
                        })

                    }
                </ul>
            </div>
        );
    }

    handleLiClick(productId, parentProductId, productName, sellPrice, productImg) {
        let img = productImg.replace(new RegExp("/", "g"), "\\");
        let name = productName.replace(new RegExp("/", "g"), "\\");
        this.props.history.push(`/detail/${JSON.stringify([productId, parentProductId, name, sellPrice, img])}`);
    }
}

let mapDispatch2Props = {
    hideFooterBar,
    showFooterBar
};

export default connect(null, mapDispatch2Props)(QueryList);
