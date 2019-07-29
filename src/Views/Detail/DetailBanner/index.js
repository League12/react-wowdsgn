import React from 'react';
import css from './index.module.scss';

class DetailBanner extends React.Component {
    render() {
        return (
            <div className={css.detailBanner}>
                <img src={this.props.img} alt="img"/>
                <h2>{this.props.proName}</h2>
                <p>¥{this.props.proPrice}</p>
                <div>
                    <img src="/imgs/league/changeTag.png" alt="img"/>
                    <div>
                        <p>满199元,或满499元,即可在购物车换购热销商品</p>
                        <span>2019-07-13 - 2019-07-31</span>
                    </div>
                    <img src="/imgs/league/4.png" alt="img"/>
                </div>
                <img src="/imgs/league/5.png" alt="img"/>
            </div>
        );
    }
}

export default DetailBanner;
