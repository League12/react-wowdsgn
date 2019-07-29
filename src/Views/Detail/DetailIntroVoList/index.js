import React from 'react';
import css from './index.module.scss';

class DetailIntroVoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "",
            recommendList: []
        }
    }

    componentDidMount() {
        this.setState({
            img: this.props.info.imgSrc,
            recommendList: this.props.info.recommendSkuList
        });
    }

    render() {
        return (
            <div className={css.detailIntroVoList}>
                <div>
                    <span>推荐搭配</span>
                    <span>
                        <img src="/imgs/league/6.png" alt="img"/>
                    </span>
                    <span>MATCH</span>
                    <span>
                        <img src="/imgs/league/6.png" alt="img"/>
                    </span>
                </div>

                {
                    this.state.img ?
                        <img src={this.state.img} alt="img"/>
                        : null
                }

                <ul>
                    {
                        this.state.recommendList.map((item, index) => {
                            return (
                                <li key={index} >
                                    <img src={item.productImg} alt={item.productTitle} />
                                    <div>
                                        <p>{item.productTitle}</p>
                                    </div>
                                    <span>¥{item.sellPrice}</span>
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default DetailIntroVoList;
