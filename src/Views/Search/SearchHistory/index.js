import React from 'react';
import css from './index.module.scss';

class SearchHistory extends React.Component {

    state = {
        datalist: []
    };

    componentWillMount() {
        this.setState({
            datalist: JSON.parse(localStorage.getItem("searchHistory")) || []
        })
    }

    render() {
        return (
            <div className={css.searchHistory}>
                <h2>历史搜索</h2>
                <img src="/imgs/league/cleanSearchIcon.png" alt="cleanSearchIcon" onClick={() => {
                    this.handleImgClick()
                }}/>
                {
                    this.state.datalist.length ?
                        <ul>
                            {
                                this.state.datalist.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    );
                                })
                            }
                        </ul>
                        : null
                }

            </div>
        );
    }

    handleImgClick() {
        localStorage.setItem("searchHistory", "[]");
        this.setState({

            datalist: JSON.parse(localStorage.getItem("searchHistory")) || []

        });
    }
}

export default SearchHistory;
