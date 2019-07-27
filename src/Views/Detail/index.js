import React from 'react';
import axios from 'axios'

class Detail extends React.Component {



    componentWillMount(){
        console.log(this.props.match.params.id)

        axios.get(`/itemdetail/skuInfos/${this.props.match.params.id}?_=1564107912378`).then(res=>{
            console.log(res.data.data.skuAttrPairs)
        })
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
