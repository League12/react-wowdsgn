import React from 'react';
import css from './index.module.scss';

class DetailAttribute extends React.Component {
    render() {
        return (
            <div className={css.detailAttribute}>
                <p>详细规格参数</p>
                <ul>
                    {
                        this.props.info.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item.attributeName}</span>
                                    <span>{item.attributeValueText}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default DetailAttribute;
