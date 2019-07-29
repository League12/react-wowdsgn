import React from 'react';
import axios from 'axios'

class Detail extends React.Component {

    componentWillMount() {
        console.log(this.props.match.params.goodsId);
    }

    render() {
        return (
            <div>
                Detail
            </div>
        );
    }
}

export default Detail;
