import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container px-5">
                        <a className="navbar-brand" href="#page-top">ReactJs</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item " >
                                    <NavLink to="/tin" className="nav-link">tin tức</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink to="/tinchitiet"  className="nav-link">tin chi tiết</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink to="/lienhe" className="nav-link">liên hệ</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}
export default Nav;