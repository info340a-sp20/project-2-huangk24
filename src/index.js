import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0:
// $$typeof: Symbol(react.element)
// key: "nurburgring"
// props:
// times: Array(4)
// 0: {track: "nurburgring", name: "Matt", laptime: "7:30:00"}
// 1: {track: "nurburgring", name: "Jason", laptime: "8:15:00"}
// 2: {track: "nurburgring", name: "Kai", laptime: "7:25:00"}
// 3: {track: "nurburgring", name: "Sohaib", laptime: "9:27:09"}
// length: 4
// __proto__: Array(0)
// track:
// difficulty: "10"
// image: "img/big-nurb.jpg"
// length: "16"
// location: "germany"
// name: "nurburgring"
// propername: "Nurburgring"
// wiki: "https://en.wikipedia.org/wiki/N%C3%BCrburgring"
// __proto__: Object
// key: (...)
// get key: ƒ ()
// __proto__: Object
// ref: null
// type: class RenderCard
// _owner: FiberNode {tag: 1, key: null, stateNode: HomePage, elementType: ƒ, type: ƒ, …}
// _store: {validated: false}
// _self: HomePage {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
// _source: {fileName: "/Users/sohaibmoinuddin/Dropbox/UW/Not CSE/INFO 340/project-2-huangk24/src/HomePage.js", lineNumber: 105, columnNumber: 18}
// __proto__: Object