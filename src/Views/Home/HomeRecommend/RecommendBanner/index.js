import React from 'react';
import { Carousel } from 'antd';
import css from './index.module.scss';

class RecommendBanner extends React.Component {

    render() {
        return (
            <div className={css.recommendBanner}>
                <Carousel autopaly={false} infinite dots={true}>
                    {
                        this.props.info.banners.map((item) => {
                            return (
                                <img src={item.bannerImgSrc} alt={item.bannerTitle} key={item.id}
                                    onClick={this.handleImgClick.bind(this, item.bannerLinkUrl)}/>
                            );
                        })
                    }
                </Carousel>
            </div>
        );
    }

    handleImgClick(url) {
        window.location.assign(url);
    }
}

export default RecommendBanner;
