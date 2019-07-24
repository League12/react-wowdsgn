import React from 'react';
import css from './index.module.scss'

class RecommendProduct extends React.Component {

    render() {
        return (
            <div className={css.recommendProduct}>
                <h2>{this.props.info.name}</h2>
                <h3>品质生活</h3>
                <img src={this.props.info.banners[0].bannerImgSrc} alt={this.props.info.name}
                     onClick={this.handleImgClick.bind(this)} />
            </div>
        );
    }

    handleImgClick() {
        window.location.assign(this.props.info.banners[0].bannerLinkUrl);
    }


}

export default RecommendProduct;
