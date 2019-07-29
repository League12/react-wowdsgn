import React from 'react';
import css from './index.module.scss';

class DetailServer extends React.Component {
    render() {
        return (
            <div className={css.detailServer}>
                <span>需要帮助</span>
                <span>周一至周五 9:00~18:30</span>
                <img src="/imgs/league/icon-service.png" alt="img"/>
            </div>
        );
    }
}

export default DetailServer;
