import React from 'react';
import { Carousel } from 'antd-mobile';
import css from './index.module.scss';

class FurnishingDesign extends React.Component {
    render() {
        return (
            <div className={css.FurnishingDesign}>
                <h2>{this.props.info.moduleName}</h2>
                <h3>{this.props.info.moduleDescription}</h3>
                <Carousel slideWidth={0.27} selectedIndex={1.2} cellSpacing={10} dots={false}>
                    {
                        this.props.info.moduleContent.products.map(item => {
                            return (
                                <div key={item.productId}
                                     onClick={this.handleDivClick.bind(this, item.productId, item.parentProductId,
                                         item.productName, item.sellPrice, item.productImg)}>
                                    <img src={item.productImg} alt={item.productName} />
                                    <p>{item.productName}</p>
                                    <span>¥{item.originalPrice}</span>
                                </div>
                            );
                        })
                    }
                </Carousel>

                <p onClick={this.handlePClick.bind(this)}><span>查看全部</span></p>

            </div>
        );
    }

    handleDivClick(productId, parentProductId, productName, sellPrice, productImg) {
        let img = productImg.replace(new RegExp("/", "g"), "\\");
        let name = productName.replace(new RegExp("/", "g"), "\\");
        this.props.history.push(`/detail/${JSON.stringify([productId, parentProductId, name, sellPrice, img])}`);
    }

    handlePClick() {
        this.props.history.push(`/querylist/10704`);
    }
}

export default FurnishingDesign;