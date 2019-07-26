import React from 'react';
import axios from 'axios';
import css from './index.module.scss';
import ActivityOthers from '../HomeFurnishing/FurnishingOthers';

class HomeActivity extends React.Component {

    state = {
        banner: null,
        orlaKiely: null,
        saniyo: null,
        octaevo: null,
        aarikka: null
    };

    componentWillMount() {
        axios.get("/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=1564039405798")
            .then(res => {
            this.setState({
                banner: res.data.data.modules[0].moduleContent,
                orlaKiely: res.data.data.modules[1],
                saniyo: res.data.data.modules[2],
                octaevo: res.data.data.modules[3],
                aarikka: res.data.data.modules[4]
            })
        });
    }

    render() {
        return (
            <div className={css.homeActivity}>
                {
                    this.state.banner ?
                        <div className={css.banner}>
                            <img src={this.state.banner.bannerImgSrc} alt=""/>
                        </div>
                        : null
                }
                {
                    this.state.orlaKiely ?
                        <ActivityOthers info={this.state.orlaKiely} />
                        : null
                }
                {
                    this.state.saniyo ?
                        <ActivityOthers info={this.state.saniyo} />
                        : null
                }
                {
                    this.state.octaevo ?
                        <ActivityOthers info={this.state.octaevo} />
                        : null
                }
                {
                    this.state.aarikka ?
                        <ActivityOthers info={this.state.aarikka} />
                        : null
                }

                <div className={css.bottom}>
                    <img src="/imgs/league/16af26ea-61b2-4bec-ad97-f16d2085e244_2dimension_1125x750.jpg"
                         alt="16af26ea-61b2-4bec-ad97-f16d2085e244_2dimension_1125x750.jpg"/>
                </div>
            </div>
        );
    }
}

export default HomeActivity
