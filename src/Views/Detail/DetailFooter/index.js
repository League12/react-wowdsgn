import React from 'react';
import css from './index.module.scss';

class DetailFooter extends React.Component {
    render() {
        return (
            <div className={css.detailFooter}>
                <ul>
                    <li>
                        <img src="/imgs/league/2.png" alt="2"/>
                    </li>
                    <li>
                        <img src="/imgs/league/3.png" alt="3"/>
                    </li>
                    <li>加入购物车</li>
                    <li>立即购买</li>
                </ul>
            </div>
        );
    }
}

export default DetailFooter;
