import React from 'react';
import css from './index.module.scss'
class Center extends React.Component {
    render() {
        return (
            <div className={css.center}>
                <div>我</div>
                <div>
                    <img src="/imgs/car/1773545_152734135000_2.jpg" alt=""/>
                    <p>kerwin</p>
                </div>
                <ul>
                    <li>
                        <p>全部订单</p> 
                    </li>
                    <li>
                        <img src="https://m.wowdsgn.com/static/img/waite-pay.png" alt=""/>
                        <p>待付款</p> 
                    </li>
                    <li>
                        <img src="https://m.wowdsgn.com/static/img/waite-delivery.png" alt=""/>
                        <p>待发货</p> 
                    </li>
                    <li>
                        <img src="https://m.wowdsgn.com/static/img/waite-goods.png" alt=""/>
                        <p>待收货</p> 
                    </li>
                    <li>
                        <img src="https://m.wowdsgn.com/static/img/finished.png" alt=""/>
                        <p>待评论</p> 
                    </li>
                    <li>
                        <img src="https://m.wowdsgn.com/static/img/returns.png" alt=""/>
                        <p>退换货</p> 
                    </li>
                </ul>
                <ul>
                    <li>我的收藏</li>
                    <li>我的礼卷</li>
                    <li>客服电话</li>
                </ul>

            </div>
        );
    }
}

export default Center;
