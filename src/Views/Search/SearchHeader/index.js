import React from 'react';
import css from './index.module.scss';

class SearchHeader extends React.Component {
    render() {
        return (
            <div className={css.searchHeader}>
                <input ref="myText" type="text" placeholder="搜索我的尖叫好物" onKeyDown={(event) => {
                    this.handleInputKeyDown(event);
                }} />
                <img src="/imgs/league/home.png" alt="" onClick={this.handleImgClick.bind(this)}/>
            </div>
        );
    }
    handleImgClick() {
        this.props.history.push("/home");
    }
    handleInputKeyDown(event) {
        if (event.key === "Enter") {
            let value = this.refs.myText.value;
            let arr = JSON.parse(localStorage.getItem("searchHistory")) || [];
            arr.push(value);
            localStorage.setItem("searchHistory", JSON.stringify(arr));
            this.props.history.push(`/goodslist/${value}`);
        }
    }
}

export default SearchHeader;
