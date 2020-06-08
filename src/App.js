import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";
import {PeoplePage} from "./PeoplePage";
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {user: null}
  }

  //Configure FirebaseUI (inside the component, public class field)
  uiConfig = {
    //which sign in values should we support?
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    //for external sign-in methods, use popup instead of redirect
    signInFlow: 'popup',
  };

  componentDidMount() {
    //when I signed in or signed out
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) { //if exists, then we logged in
        console.log("Logged in as", firebaseUser.email);
        this.setState({user: firebaseUser})
      } else {
        console.log("Logged out");
        this.setState({user: null})
      }
    })
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  handleSignOut = () => {
    firebase.auth().signOut()
  }

  render() {
    let content = null;
    if(!this.state.user) { //signed out
      content = (
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      )
    } 
    else { //signed in
      content = (
        <>
          <div className="body">
          <HashRouter basename={process.env.PUBLIC_URL+'/'}>
            <NavBar />
            <Header />
            <main>
              <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path='/home' render={(routerProps) => (
                    <HomePage {...routerProps} fbuserkey={(this.state.user.email).replace(/[^a-zA-Z0-9]/g, "")}/>
                )}/>
                <Route path="/about" component={AboutPage} />
                <Route path="/people" component={PeoplePage}/>
              </Switch>
            </main>
            <Footer/>
          </HashRouter>
          </div>
        </>
      )
    }

    return (
      <>
        {/* Only included if first clause is true */}
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }
        {/* Show content based on user login state */}
        {content}
      </>
    )
  }
}

class NavBar extends Component {

  handleSignOut = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <nav id="nav">
        <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
          <ul className="nav">
            <li><img src="img/icon.png" alt="site icon" id="logo" /></li>
            <li><Link to="/home" id="linkelems">Track Times</Link></li>
            <li><Link to="/people" id="linkelems">Drivers and Cars</Link></li>
            <li><Link to="/about" id="linkelems">About</Link></li>
            <button className="alert alert-danger btn btn-warning btn-sm float-right" onClick={this.handleSignOut}>
                Sign Out
            </button>
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
