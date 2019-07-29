import React from 'react';
import { connect } from 'react-redux';
import {hideFooterBar, showFooterBar} from "../GoodsList/actionCreator";
import axios from 'axios';
import DetailHeader from './DetailHeader';
import DetailBanner from './DetailBanner';
import DetailFooter from './DetailFooter';
import DetailContent from './DetailContent';
import DetailAttribute from './DetailAttribute';
import DetailRecommendVo from './DetailIntroVoList';
import DetailOtherInfo from './OtherInfo';
import DetailRecommend4You from './DetailRecommend4You';
import DetailServer from './DetailServer';


class Detail extends React.Component {

    state = {
        productId: "",
        parentProductId: "",
        productName: "",
        productPrice: "",
        productImg: "",
        attribute: [],
        itemDetailIntroVoList: [],
        itemRecommendVo: null,
        recommend4You: []
    };

    componentWillMount() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        let arr = JSON.parse(this.props.match.params.goodId);
        let name = arr[2].replace(new RegExp("\\\\", "g"), "/");
        let img = arr[4].replace(new RegExp("\\\\", "g"), "/");

        this.setState({
            productId: arr[0],
            parentProductId: arr[1],
            productName: name,
            productPrice: arr[3],
            productImg: img
        }, () => {
            axios.get(`/itemdetail/skuInfos/${this.state.productId}?_=1564120307446`).then(res => {
                this.setState({
                    attribute: res.data.data.skuAttrPairs
                })
            });

            if (this.state.parentProductId) {
                axios.get(`/itemdetail/spuInfos/${this.state.parentProductId}?_=1564124214107`).then(res => {
                    this.setState({
                        itemDetailIntroVoList: res.data.data.itemDetailIntroVoList,
                        itemRecommendVo: res.data.data.itemRecommendVo
                    })
                });
            }

            axios.get(`/recommend/item?skuId=${this.state.productId}&_=1564124214114`).then(res => {
                this.setState({
                    recommend4You: res.data.data
                })
            });
        });
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    componentDidMount() {
        this.props.hideFooterBar();
    }

    componentWillUnmount() {
        this.props.showFooterBar();
    }

    render() {
        return (
            <div>
                <DetailHeader {...this.props} />
                <DetailBanner img={this.state.productImg} proName={this.state.productName}
                              proPrice={this.state.productPrice}/>

                {
                    this.state.itemDetailIntroVoList.length ?
                        <DetailContent info={this.state.itemDetailIntroVoList} />
                        : null
                }

                <DetailAttribute info={this.state.attribute} />

                {
                    this.state.itemRecommendVo ?
                        <DetailRecommendVo info={this.state.itemRecommendVo} {...this.props}/>
                        : null
                }

                <DetailOtherInfo />

                {
                    this.state.recommend4You.length ?
                        <DetailRecommend4You info={this.state.recommend4You} {...this.props}/>
                        : null
                }

                <DetailServer />

                <DetailFooter />
            </div>
        );
    }
}

let mapDispatch2Props = {
    hideFooterBar,
    showFooterBar
};

export default connect(null, mapDispatch2Props)(Detail);
