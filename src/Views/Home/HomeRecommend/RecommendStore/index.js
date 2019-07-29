import React from 'react';
import css from './index.module.scss';

class RecommendStore extends React.Component {
    render() {
        return (
            <div className={css.recommendStore}>
                <h2>{this.props.info.name}</h2>
                <h3>线下体验店</h3>

                {
                    this.props.info.banners.map(function (item) {
                        return (
                            <img src={item.bannerImgSrc} alt="" key={item.id} />
                        );
                    })
                }
            </div>
        );
    }
}

export default RecommendStore;
