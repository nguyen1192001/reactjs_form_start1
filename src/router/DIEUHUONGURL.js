import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../component/Home'
import New from './../component/New'
import NewDetail from './../component/NewDetail'
import Contact from './../component/Contact'


class DieuHuongURL extends Component {
    render() {
        return (
            <Route>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tin" component={New} />
                    <Route exact path="/tin-tuc/:slug.:id.html" component={NewDetail} />
                    <Route exact path="/lienhe" component={Contact} />
                </div>
            </Route>
        )
    }
}
export default DieuHuongURL