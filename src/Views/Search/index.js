import React from 'react';
import {connect} from 'react-redux';
import {hideFooterBar, showFooterBar} from "./actionCreator";
import SearchHeader from './SearchHeader';
import SearchRecommend from './SearchRecommend';
import SearchHistory from './SearchHistory';
import css from './index.module.scss';

class Search extends React.Component {

    componentDidMount() {
        this.props.hideFooterBar();
    }

    componentWillUnmount() {
        this.props.showFooterBar();
    }

    render() {
        return (
            <div className={css.search}>
                <SearchHeader {...this.props} />
                <SearchRecommend {...this.props} />
                <SearchHistory />
            </div>
        );
    }
}

let mapDispath2Props = {
    hideFooterBar,
    showFooterBar
};

export default connect(null, mapDispath2Props)(Search);
