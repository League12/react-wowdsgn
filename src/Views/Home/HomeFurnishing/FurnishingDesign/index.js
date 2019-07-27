import React from 'react';
import { Carousel } from 'antd-mobile';
import css from './index.module.scss';

class FurnishingDesign extends React.Component {
    render() {
        return (
            <div className={css.FurnishingDesign}>
                <h2>{this.props.info.moduleName}</h2>
                <h3>{this.props.info.moduleDescription}</h3>
                <Carousel slideWidth={0.27} selectedIndex={1.2} cellSpacing={10}>
                    {
                        this.props.info.moduleContent.products.map(item => {
                            return (
                                <div key={item.productId}>
                                    <img src={item.productImg} alt={item.productName} />
                                    <p>{item.productName}</p>
                                    <span>¥{item.originalPrice}</span>
                                </div>
                            );
                        })
                    }
                </Carousel>

                <p><span>查看全部</span></p>

            </div>
        );
    }
}

export default FurnishingDesign;
