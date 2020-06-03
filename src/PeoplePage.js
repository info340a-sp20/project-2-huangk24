import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as d3 from 'd3';

export class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drivers: []
        }
    }

    componentDidMount() {
        let currentComponent = this;
        d3.csv("data/drivers.csv")
        .then(function(data) {
            currentComponent.setState({drivers: data});
        });
    }

    render() {
        let alldrivers = this.state.drivers.map((person) => {
            return <Person key={person.name} person={person}></Person>;
        });

        return(
            <div className="container">
                <div className="row-full" id="content">
                    {alldrivers}
                </div>
            </div>
        );
    }
}

class Person extends Component {
    render() {
        return(
        //   <div className="col-md-6 col-xl-4 d-flex">
        <div className="col-xl-7 d-flex">
            <div className="card mb-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto w-100">
                    {/* <div className="col-sm"> */}
                    <div className="column1">
                    <img className="p-3" src={"img/"+this.props.person.facepic} alt={this.props.person.name}></img>
                        <h2 className="card-title">{this.props.person.name}</h2>
                        <div className="card-text">
                            <p>A little dinkboi who thinks hes cool.</p>
                        </div>
                    </div>
                    {/* <div className="col-sm"> */}
                    <div className="column2">
                        <img className="p-3" src={"img/"+this.props.person.carpic} alt={this.props.person.name}></img>
                        <h2 className="card-title">{this.props.person.car}</h2>
                        <div className="card-text">
                            <p>racecar!!!.</p>
                        </div>
                    </div>
                    {/* <div className="column3">
                        <h2 className="card-title">Info</h2>
                        <p>racecar n info stuff.</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}