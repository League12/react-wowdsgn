import React from 'react';
import { connect } from 'react-redux';
import {hideFooterBar, showFooterBar} from "./actionCreator";
import GoodsListHeader from './GoodsListHeader';
import GoodsListNav from './GoodsListNav';
import GoodsListGroup from './GoodsListGroup';

class GoodsList extends React.Component {

    state = {
        sort: "onShelfTime",
        order: "desc"
    };

    componentDidMount() {
        this.props.hideFooterBar()
    }

    componentWillUnmount() {
        this.props.showFooterBar()
    }

    render() {
        return (
            <div>
                <GoodsListHeader {...this.props} text={this.props.match.params.goodsName} />
                <GoodsListNav myevent={(mySort, myOrder) => {
                    this.setState({
                        sort: mySort,
                        order: myOrder
                    })
                }}/>

                <GoodsListGroup categray={this.props.match.params.goodsName} sort={this.state.sort}
                                order={this.state.order} />
            </div>
        );
    }
}

let mapDispatch2Props = {
    hideFooterBar,
    showFooterBar
};

export default connect(null, mapDispatch2Props)(GoodsList);
