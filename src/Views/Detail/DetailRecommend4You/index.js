import React from 'react';
import css from './index.module.scss';

class DetailRecommend4You extends React.Component {

    render() {
        return (
            <div className={css.recommend4You}>
                <div>
                    <span>猜你喜欢</span>
                    <span>
                        <img src="/imgs/league/6.png" alt="img"/>
                    </span>
                    <span>WHAT'S HOT</span>
                    <span>
                        <img src="/imgs/league/6.png" alt="img"/>
                    </span>
                </div>

                <ul>
                    {
                        this.props.info.map((item, index) => {
                            return (
                                <li key={index} onClick={this.handleLiClick.bind(this, item.productId, item.parentProductId,
                                    item.productName, item.sellPrice, item.productImg)}>
                                    <img src={item.productImg} alt="img"/>
                                    <p>{item.productName}</p>
                                    <span>¥{item.sellPrice}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    handleLiClick(productId, parentProductId, productName, sellPrice, productImg) {
        let img = productImg.replace(new RegExp("/", "g"), "\\");
        let name = productName.replace(new RegExp("/", "g"), "\\");
        this.props.history.push(`/detail/${JSON.stringify([productId, parentProductId, name, sellPrice, img])}`);
        window.location.reload();
    }
}

export default DetailRecommend4You;
