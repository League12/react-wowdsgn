import React from 'react';
import { PullToRefresh } from 'antd-mobile';
import axios from 'axios';
import css from './index.module.scss';

class GoodsListGroup extends React.Component {

    state = {
        datalist: [],
        page: 1,
        down: false,
        refreshing: false,
        sort: "onShelfTime",
        order: "desc",
        categray: this.props.categray
    };

    componentWillMount() {
        let keyWord = encodeURIComponent(this.props.categray);
        axios.get(`/product/search?keyword=${keyWord}&sort=${this.props.sort}&order=${this.props.order}&currentPage=1&_=1564098588318`)
            .then(res => {
                this.setState({
                    datalist: res.data.data.products
                })
            });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.sort !== nextProps.sort || this.state.order !== nextProps.order
            || this.state.datalist.length !== nextState.datalist.length
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.sort !== nextProps.sort || this.state.order !== nextProps.order) {
            let keyWord = encodeURIComponent(nextProps.categray);
            axios.get(`/product/search?keyword=${keyWord}&sort=${nextProps.sort}&order=${nextProps.order}&currentPage=1&_=1564098588318`)
                .then(res => {
                    this.setState({
                        datalist: res.data.data.products,
                        sort: nextProps.sort,
                        order: nextProps.order,
                        categray: nextProps.categray
                    })
                });
        }
    }


    render() {
        return (
            <div className={css.goodsListGroup}>
                <PullToRefresh
                    damping={60}
                    style={{

                    }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.getData();
                    }}
                >
                    {
                        this.state.datalist.length ?
                            <ul>
                                {
                                    this.state.datalist.map(item => {
                                        return (
                                            <li key={item.productId} onClick={() => {
                                                this.handleLiClick(item.productId, item.parentProductId,
                                                    item.productName, item.sellPrice, item.productImg);
                                            }}>
                                                <img src={item.productImg} alt={item.productTitle} />
                                                <p>{item.productTitle}</p>
                                                <span>¥{item.originalPrice}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                    }
                </PullToRefresh>
            </div>
        );
    }

    handleLiClick(productId, parentProductId, productName, sellPrice, productImg) {
        let img = productImg.replace(new RegExp("/", "g"), "\\");
        let name = productName.replace(new RegExp("/", "g"), "\\");
        this.props.history.push(`/detail/${JSON.stringify([productId, parentProductId, name, sellPrice, img])}`);
    }

    getData() {
        let current = this.state.page;
        this.setState({
            page: ++current
        });
        let keyWord = encodeURIComponent(this.state.categray);
        axios.get(`/product/search?keyword=${keyWord}&sort=${this.state.sort}&order=${this.state.order}&currentPage=${current}&_=1564098588318`)
            .then(res => {
                this.setState({
                    datalist: [...this.state.datalist, ...res.data.data.products]
                });
            });
    }
}

export default GoodsListGroup;
