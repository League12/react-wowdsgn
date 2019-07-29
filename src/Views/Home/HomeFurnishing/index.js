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
                        <FurnishingBanner info={this.state.banner} />
                        : null
                }
                {
                    this.state.design ?
                        <FurnishingDesign info={this.state.design} />
                        : null
                }
                {
                    this.state.lightAndShadow ?
                        <FurnishingOthers info={this.state.lightAndShadow} />
                        : null
                }
                {
                    this.state.flowerOrgan ?
                        <FurnishingOthers info={this.state.flowerOrgan} />
                        : null
                }
                {
                    this.state.tableware ?
                        <FurnishingOthers info={this.state.tableware} />
                        : null
                }
                {
                    this.state.ceremony ?
                        <FurnishingOthers info={this.state.ceremony} />
                        : null
                }
                {
                    this.state.showerRoom ?
                        <FurnishingOthers info={this.state.showerRoom} />
                        : null
                }
                {
                    this.state.spin ?
                        <FurnishingOthers info={this.state.spin} />
                        : null
                }
                {
                    this.state.wall ?
                        <FurnishingOthers info={this.state.wall} />
                        : null
                }


                <Bottom />
            </div>
        );
    }
}

export default HomeFurnishing
