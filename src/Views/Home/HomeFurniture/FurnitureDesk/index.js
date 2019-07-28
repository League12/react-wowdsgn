import React from 'react';
import css from './index.module.scss';

class FurnitureDesk extends React.Component {
    render() {
        return (
            <div className={css.furnitureDesk}>
                <h2>{this.props.info.moduleName}</h2>
                <h3>{this.props.info.moduleDescription}</h3>
                <ul>
                    {
                        this.props.info.moduleContent.products.filter((item, index) => index < 6)
                            .map(item => {
                                return (
                                    <li key={item.productId}
                                        onClick={this.handleDivClick.bind(this, item.productId, item.parentProductId,
                                            item.productName, item.sellPrice, item.productImg)}>
                                        <img src={item.productImg} alt={item.productTitle} />
                                        <p>{item.productName}</p>
                                        <span>¥{item.sellPrice}</span>
                                    </li>
                                );
                            })
                    }
                </ul>
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
        this.props.history.push(`/querylist/10987`);
    }
}

export default FurnitureDesk;
