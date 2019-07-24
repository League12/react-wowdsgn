import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './index.module.scss'

class FooterBar extends React.Component {
    render() {
        return (
            <div className={css.footerBar}>
                <ul>
                    <li>
                        <NavLink to="/home" replace>
                            <img src="/imgs/league/home.png" alt="home"/>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/list">
                            <img src="/imgs/league/category.png" alt="home"/>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopcar">
                            <img src="/imgs/league/buy.png" alt="home"/>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <img src="/imgs/league/message.png" alt="home"/>
                            <span>消息</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/center">
                            <img src="/imgs/league/me.png" alt="home"/>
                            <span>我</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FooterBar;
