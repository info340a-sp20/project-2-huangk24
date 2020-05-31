import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";

class App extends Component {
  render() {

    return (
      <div className="body">
      <Router>
        <NavBar />
        <Header />
        <main>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </main>
        <footer className="footer">
			    <p>Create by Sohaib M and Kai H</p>
	      </footer>
      </Router>
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
        <nav id="nav">
          <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
            <ul className="nav">
              <li><img src="img/icon.png" alt="site icon" id="logo" /></li>             
              <li><NavLink to="/home" className="nav-link">Track Times</NavLink></li>
              <li><NavLink to="/about" className="nav-link">About</NavLink></li>
            </ul>
        </nav>      
    )
  }
}  

class Header extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid bg-dark text-white">
        <div className="container">
          <h1>Track Day Lap Times</h1>
          <p className="lead">The world's premier location for amateur lap times!</p>
        </div>
      </header>
    )
  }
}

export default App;
