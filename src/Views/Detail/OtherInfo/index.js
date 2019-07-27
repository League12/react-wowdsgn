import React from 'react';
import css from './index.module.scss';

class OtherInfo extends React.Component {

    state = {
        isShowImg: true,
        isShowP: true
    };

    render() {
        return (
            <div className={css.otherInfo}>
                <div>
                    <span>其他信息</span>
                    <span>
                        <img src="/imgs/league/6.png" alt="img"/>
                    </span>
                    <span>OTHER</span>
                    <span>
                        <img src="/imgs/league/6.png" alt="img"/>
                    </span>
                </div>

                <div>
                    <div>
                        <p onClick={this.handleP1Clcik.bind(this)}>
                            <span>服务承诺</span>
                            <img src="/imgs/league/8.png" alt="img" className={this.state.isShowImg ? css.rotateImg : ""}/>
                        </p>


                        <img src="/imgs/league/7.png" alt="img" className={this.state.isShowImg ? "" : css.hideImg}/>

                    </div>

                    <div>
                        <p onClick={this.handleP2Clcik.bind(this)}>
                            <span>价格说明</span>
                            <img src="/imgs/league/8.png" alt="img" className={this.state.isShowP ? css.rotateImg : ""}/>
                        </p>


                        <div className={this.state.isShowP ? "" : css.hideDiv}>
                            <p>
                                划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考
                            </p>
                            <p>
                                未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。
                            </p>
                            <p>
                                * 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    handleP1Clcik() {
        this.setState({
            isShowImg: !this.state.isShowImg
        })
    }

    handleP2Clcik() {
        this.setState({
            isShowP: !this.state.isShowP
        })
    }
}

export default OtherInfo;
