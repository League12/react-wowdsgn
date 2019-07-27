import React from 'react';
import axios from 'axios';
import RecommendBanner from './RecommendBanner';
import RecommendProduct from './RecommendProduct';
import RecommendStore from './RecommendStore';
import Bottom from '../../../Components/Bottom';

class HomeRecommend extends React.Component {

    state = {
        banner: null,
        product: null,
        brand: null,
        selection: null,
        store: null
    };


    componentWillMount() {
        axios.get("/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1563947253000")
            .then(res => {
                this.setState({
                    banner: res.data.data.modules[0].moduleContent,
                    product: res.data.data.modules[1].moduleContent,
                    brand: res.data.data.modules[2].moduleContent,
                    selection: res.data.data.modules[3].moduleContent,
                    store: res.data.data.modules[4].moduleContent
                })
            });
    }

    componentWillUnmount() {
        this.setState = () => {
            return;
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.banner ? <RecommendBanner info={this.state.banner} /> : null
                }

                {
                    this.state.product ? <RecommendProduct info={this.state.product} /> : null
                }

                {
                    this.state.brand ? <RecommendProduct info={this.state.brand} /> : null
                }

                {
                    this.state.selection ? <RecommendProduct info={this.state.selection} /> : null
                }

                {
                    this.state.store ? <RecommendStore info={this.state.store} /> : null
                }
                <Bottom />
            </div>
        );
    }
}

export default HomeRecommend;
