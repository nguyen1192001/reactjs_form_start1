import React, {Component} from 'react'
import './../css/App.css'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import New from './New'
import NewDetail from './NewDetail'
import Contact from './Contact'
import DieuHuongURL from '../router/DIEUHUONGURL'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <Nav/>
            {/* <New/> */}
            <DieuHuongURL/>
          <Footer/>
        </div>
        </Router>
    );
  }
}
export default App;
