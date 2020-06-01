import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";
import {PeoplePage} from "./PeoplePage";
import * as d3 from 'd3';

class App extends Component {
  // dataLogic() {
  //   let laptimes = [];
  //   let trackdetails = [];
  //   d3.csv("data/laptimes.csv")
  //     .then(function(data) {
  //       laptimes.push(data);
  //       d3.csv("data/trackdata.csv")
  //         .then(function(data2) {
  //           trackdetails.push(data2);
  //       });
  //   });
  //   let data = {};
  //   data.laptimes = laptimes;
  //   data.trackdetails = trackdetails;
  //   console.log(data);
  //   return data;
  // }

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
            <Route path="/home">
              {/* <HomePage data={() => this.dataLogic}></HomePage> */}
              <HomePage></HomePage>
            </Route>
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
            <li><Link to="/home" className="nav-link">Track Times</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
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
