import React from 'react';
import css from './index.module.scss'

class HomeHeader extends React.Component {
    render() {
        return (
            <div className={css.homeHeader}>
                <h1>
                    <img src="/imgs/league/titleView.png" alt="titleLogo"/>
                </h1>
                <input type="text" placeholder="搜索我的尖叫好物"/>
            </div>
        );
    }
}

export default HomeHeader;
