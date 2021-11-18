import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history';

import Home from './pages/Home/Home';
import Documents from './pages/Documents/Documents'
import Tarifs from './pages/Tarifs/Tarifs'
import Mentions from './pages/Mentions/Mentions'
import Admin from './pages/Admin/Admin'

export default class Routes extends Component {
    render() {
        const props = this.props;
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/" exact component={ () => <Home stickyRef={props.stickyRef} />} />
                    <Route path="/Documents/" component={Documents} />
                    <Route path="/Tarifs/" component={Tarifs} />
                    <Route path="/mentions-legales/" component={Mentions} />
                    <Route path="/Admin/" component={Admin} />
                </Switch>
            </Router>
        )
    }
}