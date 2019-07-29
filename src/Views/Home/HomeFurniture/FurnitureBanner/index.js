import React from 'react';
import { Carousel } from 'antd';
import css from './index.module.scss'

class FurnitureBanner extends React.Component {
    render() {
        return (
            <div className={css.furnitureBanner}>
                <Carousel autopaly={false} infinite dots={true}>
                    {
                        this.props.info.banners.map((item) => {
                            return (
                                <img src={item.bannerImgSrc} alt={item.bannerTitle} key={item.id} />
                            );
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default FurnitureBanner;
