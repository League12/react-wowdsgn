import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux'
import App from '../App';
import Home from '../Views/Home';
import List from '../Views/List';
import Shopcar from '../Views/Shopcar';
import Message from '../Views/Message';
import Center from '../Views/Center';
import Detail from '../Views/Detail';
import GoodsList from '../Views/GoodsList';
import Search from '../Views/Search';
import ListDetail from "../Views/List/ListDetail"


let router = <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} exact/>
                    <Route path="/shopcar" component={Shopcar} />
                    <Route path="/message" component={Message} />
                    <Route path="/center" component={Center} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/goodslist" component={GoodsList} />
                    <Route path="/search" component={Search} />
                    <Route path="/list/:itemId" component={ListDetail} exact/>
                    <Redirect from="/" to="/home" />
                </Switch>
            </App>
        </HashRouter>
    </Provider>;



export default router
