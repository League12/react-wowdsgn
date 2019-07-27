import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './index.module.scss';

class HomeNav extends React.Component {
    render() {
        return (
            <div className={css.homeNav}>
                <ul>
                    <li>
                        <NavLink to="/home/recommend" replace activeClassName={css.homeActiveLink}>推荐</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/furniture" replace activeClassName={css.homeActiveLink}>家具</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/furnishing" replace activeClassName={css.homeActiveLink}>家居</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/activity" replace activeClassName={css.homeActiveLink}>活动</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomeNav;
