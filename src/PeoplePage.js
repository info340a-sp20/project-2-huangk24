import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardText, CardBody, CardImg,
    CardTitle, Button } from 'reactstrap';
import * as d3 from 'd3';
import {BrowserRouter as HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

export class PeoplePage extends Component {

    render() {
        // let drivers = d3.csv("data/drivers.csv");
        // console.log(drivers.length);


        // let jsxdrivers = drivers.map((person) => {
        //     return <Person person={person}></Person>;
        // })

        // console.log(jsxdrivers);

        return(
            <div className="container">
                {/* {jsxdrivers} */}
                <Person></Person>
            </div>
        );
    }
}

class Person extends Component {
    render() {
        return(
            <div className="col-md-6 col-xl-4 d-flex">
            <div className="card mb-4"><Card>
              <div className="card-body"><CardBody>
                <div className="row">
                  <div className="col-sm-auto w-100">
                    <CardImg className="pb-3" src="./img/big-cota.jpg" alt="Circuit of the Americas" />
                      <div className="col-sm">
                        <CardTitle className="card-title">Some card idk</CardTitle>
                          <button type="button" className="collapsible">Lap times</button>
                          <div className="card-text" id="expand-list">
                            {/* <CardText> */}
                            <div className="card-text" id="expand-list">
                              <ul className="hide-list row text-center" id="cota">
                              </ul>
                            {/* </CardText> */}
                            </div>
                            <a className="btn btn-dark float-right mt-3" href="https://en.wikipedia.org/wiki/Circuit_of_the_Americas" aria-label="Learn more about the track">Learn more</a>
                          </div>
                      </div>
                  </div>
                </div>
              </CardBody></div>
            </Card></div>
          </div>
        );
    }
}