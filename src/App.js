import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";
import {PeoplePage} from "./PeoplePage";

class App extends Component {
  render() {
    return (
      <div className="body">
      <HashRouter basename={process.env.PUBLIC_URL+'/'}>
        <NavBar />
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/people" component={PeoplePage}/>
          </Switch>
        </main>
        <Footer/>
      </HashRouter>
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
            <li><Link to="/home" id="linkelems">Track Times</Link></li>
            <li><Link to="/people" id="linkelems">Drivers and Cars</Link></li>
            <li><Link to="/about" id="linkelems">About</Link></li>
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

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Create by Sohaib M and Kai H</p>
      </footer>
    );
  }
}

export default App;
