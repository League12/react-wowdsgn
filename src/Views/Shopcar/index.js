import React from 'react';
import { connect } from 'react-redux';
import { showFooterBar, hideFooterBar } from "./actionCreator";

class Shopcar extends React.Component {

    componentWillMount() {
        this.props.hideFooterBar();
    }

    componentWillUnmount() {
        this.props.showFooterBar();
    }


    render() {
        return (
            <div>
                Shopcar
            </div>
        );
    }
}

let mapDispatch2Props = {
    showFooterBar,
    hideFooterBar
};

export default connect(null, mapDispatch2Props)(Shopcar);
