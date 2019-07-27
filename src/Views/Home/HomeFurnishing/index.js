import React from 'react';
import axios from 'axios';
import FurnishingBanner from '../HomeFurniture/FurnitureBanner';
import FurnishingDesign from './FurnishingDesign';
import FurnishingOthers from './FurnishingOthers';
import Bottom from "../../../Components/Bottom";

class HomeFurnishing extends React.Component {

    state = {
        banner: null,
        design: null,
        lightAndShadow: null,
        flowerOrgan: null,
        tableware: null,
        ceremony: null,
        showerRoom: null,
        spin: null,
        wall: null
    };

    componentWillMount() {
        axios.get("/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1564034013612")
            .then(res => {
            this.setState({
                banner: res.data.data.modules[0].moduleContent,
                design: res.data.data.modules[1],
                lightAndShadow: res.data.data.modules[2],
                flowerOrgan: res.data.data.modules[3],
                tableware: res.data.data.modules[4],
                ceremony: res.data.data.modules[5],
                showerRoom: res.data.data.modules[6],
                spin: res.data.data.modules[7],
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.banner ?
                        <FurnishingBanner info={this.state.banner} {...this.props}/>
                        : null
                }
                {
                    this.state.design ?
                        <FurnishingDesign info={this.state.design} {...this.props}/>
                        : null
                }
                {
                    this.state.lightAndShadow ?
                        <FurnishingOthers info={this.state.lightAndShadow} {...this.props}/>
                        : null
                }
                {
                    this.state.flowerOrgan ?
                        <FurnishingOthers info={this.state.flowerOrgan} {...this.props}/>
                        : null
                }
                {
                    this.state.tableware ?
                        <FurnishingOthers info={this.state.tableware} {...this.props}/>
                        : null
                }
                {
                    this.state.ceremony ?
                        <FurnishingOthers info={this.state.ceremony} {...this.props}/>
                        : null
                }
                {
                    this.state.showerRoom ?
                        <FurnishingOthers info={this.state.showerRoom} {...this.props}/>
                        : null
                }
                {
                    this.state.spin ?
                        <FurnishingOthers info={this.state.spin} {...this.props}/>
                        : null
                }
                {
                    this.state.wall ?
                        <FurnishingOthers info={this.state.wall} {...this.props}/>
                        : null
                }


                <Bottom />
            </div>
        );
    }
}

export default HomeFurnishing
