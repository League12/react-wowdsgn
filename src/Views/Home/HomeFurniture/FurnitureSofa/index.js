import React from 'react';
import { Carousel } from 'antd-mobile';
import css from './index.module.scss';

class FurnitureSofa extends React.Component {
    render() {
        return (
            <div className={css.furnitureSofa}>
                <h2>{this.props.info.moduleName}</h2>
                <h3>{this.props.info.moduleDescription}</h3>

                <Carousel slideWidth={0.27} selectedIndex={1.2} cellSpacing={10}>
                    {
                        this.props.info.moduleContent.products.map((item) => {
                            return (
                                <div key={item.productId}
                                     onClick={this.handleDivClick.bind(this, item.productId)}>
                                    <img src={item.productImg} alt={item.productName}/>
                                    <p>{item.productName}</p>
                                    <span>¥{item.sellPrice}</span>
                                </div>
                            );
                        })
                    }
                </Carousel>

                <p><span>查看全部</span></p>

            </div>
        );
    }

    handleDivClick(id) {
        console.log(id);
    }
}

export default FurnitureSofa;
