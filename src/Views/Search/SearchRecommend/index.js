import React from 'react';
import css from './index.module.scss';

class SearchRecommend extends React.Component {

    state = {
        datalist: ["尖叫实验室", "暖手宝", "沙发", "杯子",
            "餐具", "茶具", "吊灯", "厨房", "儿童", "HAY",
            "Arabia", "家饰", "收纳", "床上用品", "旅行"]
    };

    render() {
        return (
            <div className={css.searchRecommend}>
                <h2>热门搜索</h2>
                <ul>
                    {
                        this.state.datalist.map((item, index) => {
                            return (
                                <li key={index} onClick={() => {
                                    this.handleLiClick(item);
                                }}>{item}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    handleLiClick(item) {
        let arr = JSON.parse(localStorage.getItem("searchHistory")) || [];
        arr.push(item);
        localStorage.setItem("searchHistory", JSON.stringify(arr));
        this.props.history.push(`/goodslist/${item}`);
    }
}

export default SearchRecommend;
