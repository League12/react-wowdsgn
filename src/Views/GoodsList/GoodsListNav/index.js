import React from 'react';
import css from './index.module.scss';

class GoodsListNav extends React.Component {

    state = {
        selectIndex: 0,
        order: "desc"
    };

    render() {
        return (
            <div className={css.goodsListNav}>
                <ul>
                    <li className={this.state.selectIndex === 0 ? css.active : ""}
                        onClick={() => {
                            this.handleLiClick(0);
                            this.props.myevent("onShelfTime", "desc");
                        }}>上新</li>
                    <li className={this.state.selectIndex === 1 ? css.active : ""}
                        onClick={() => {
                            this.handleLiClick(1);
                            this.props.myevent("sales", "desc");
                        }}>销量</li>
                    <li className={this.state.selectIndex === 2 ? css.active : ""}
                        onClick={() => {
                            this.handleLiClick(2);
                            this.setState({
                                order: this.state.order === "desc" ? "asc" : "desc"
                            });
                            this.props.myevent("price", this.state.order === "desc" ? "asc" : "desc");
                        }}>价格</li>
                </ul>
            </div>
        );
    }

    handleLiClick(index) {
        this.setState({
            selectIndex: index
        })
    }
}

export default GoodsListNav;
