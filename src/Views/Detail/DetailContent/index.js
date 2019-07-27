import React from 'react';
import css from './index.module.scss';

class DetailContent extends React.Component {
    render() {
        return (
            <div className={css.detailContent}>
                {
                    this.props.info.filter((item, index) => index >= 1).map((item, index) => {
                        return (
                            !item.content.indexOf("https") ?
                                <img src={item.content} alt="img" key={index}/>
                                : null
                        );
                    })
                }
            </div>
        );
    }
}

export default DetailContent;
