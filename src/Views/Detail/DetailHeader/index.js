import React from 'react';
import css from './index.module.scss';

class DetailHeader extends React.Component {
    render() {
        return (
            <div className={css.detailHeader}>
                <img src="/imgs/league/home.png" alt="home" onClick={() => {
                    this.props.history.push("/home");
                }} />
                <h2>商品详情</h2>
                <img src="/imgs/league/searchIcon-e.png" alt="searchIcon" onClick={() => {
                    this.props.history.push("/search");
                }}/>
            </div>
        );
    }
}

export default DetailHeader;
