import React from 'react';
import axios from 'axios';
import FurnitureBanner from './FurnitureBanner';
import FurnitureSofa from './FurnitureSofa';
import FurnitureTables from './FurnitureTables';
import FurnitureHangers from './FurnitureHangers';
import FurnitureCabinet from './FurnitureCabinet';
import FurnitureDesk from './FurnitureDesk';
import FurnitureChair from './FurnitureChair';
import Bottom from "../../../Components/Bottom";

class HomeFurniture extends React.Component {

    state = {
        banner: null,
        sofas: null,
        tables: null,
        hangers: null,
        cabinet: null,
        desk: null,
        chair: null
    };

    componentWillMount() {
        axios.get("/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1563968287606")
            .then(res => {
            this.setState({
                banner: res.data.data.modules[0].moduleContent,
                sofas: res.data.data.modules[1],
                tables: res.data.data.modules[2],
                hangers: res.data.data.modules[3],
                cabinet: res.data.data.modules[4],
                desk: res.data.data.modules[5],
                chair: res.data.data.modules[6]
            })
        });
    }

    componentWillUnmount() {
        this.setState = () => {
            return;
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.banner ?
                        <FurnitureBanner info={this.state.banner} />
                        : null
                }
                {
                    this.state.sofas ?
                        <FurnitureSofa info={this.state.sofas} />
                        : null
                }
                {
                    this.state.tables ?
                        <FurnitureTables info={this.state.tables} />
                        : null
                }
                {
                    this.state.hangers ?
                        <FurnitureHangers info={this.state.hangers} />
                        : null
                }
                {
                    this.state.cabinet ?
                        <FurnitureCabinet info={this.state.cabinet} />
                        : null
                }
                {
                    this.state.desk ?
                        <FurnitureDesk info={this.state.desk} />
                        : null
                }
                {
                    this.state.chair ?
                        <FurnitureChair info={this.state.chair} />
                        : null
                }

                <Bottom />
            </div>
        );
    }
}

export default HomeFurniture
