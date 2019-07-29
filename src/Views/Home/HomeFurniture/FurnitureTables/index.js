import React from 'react';
import css from './index.module.scss'

class FurnitureTables extends React.Component {
    render() {
        return (
            <div className={css.furnitureTable}>
                <h2>{this.props.info.moduleName}</h2>
                <h3>{this.props.info.moduleDescription}</h3>
                <ul>
                    {
                        this.props.info.moduleContent.products.map(item => {
                            return (
                                <li key={item.productId}
                                    onClick={this.handleDivClick.bind(this, item.productId)}>
                                    <img src={item.productImg} alt={item.productTitle} />
                                    <p>{item.productName}</p>
                                    <span>¥{item.sellPrice}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <p><span>查看全部</span></p>
            </div>
        );
    }

    handleDivClick(id) {
        console.log(id);
    }
}

export default FurnitureTables;
