import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeNav from './HomeNav';
import HomeRecommend from './HomeRecommend';
import HomeFurniture from './HomeFurniture';
import HomeFurnishing from './HomeFurnishing';
import HomeActivity from './HomeActivity';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader {...this.props} />
                <HomeNav />

                <Switch>
                    <Route path="/home/recommend" component={HomeRecommend} />
                    <Route path="/home/furniture" component={HomeFurniture} />
                    <Route path="/home/furnishing" component={HomeFurnishing} />
                    <Route path="/home/activity" component={HomeActivity} />
                    <Redirect from="/home/" to="/home/recommend" />
                </Switch>

            </div>
        );
    }
}

export default Home;
