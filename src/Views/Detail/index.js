import React from 'react';

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
