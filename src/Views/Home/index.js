import React from 'react';
import axios from 'axios';


class Home extends React.Component {

    componentWillMount() {
        axios.get("/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1563947253000")
            .then(res => {
            console.log(res)
        });
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;
