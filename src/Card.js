import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText, CardBody, CardImg,
    CardTitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export class RenderCard extends Component {
    constructor(props){
      super(props);
      this.state = {cards: this.props.initialCards};
    }
    render() {

        return (
            <div className="col-md-6 col-xl-4 d-flex">
              <div className="card mb-4"><Card>
                <div className="card-body"><CardBody>
                  <div className="row">
                    <div className="col-sm-auto w-100">
                      <CardImg className="pb-3" src="./img/big-cota.jpg" alt="Circuit of the Americas" />
                        <div className="col-sm">
                          <CardTitle className="card-title">Circuit of the Americas</CardTitle>
                            <button type="button" className="collapsible">Lap times</button>
                            <div className="card-text" id="expand-list">
                              <CardText>
                                <ul className="hide-list row text-center" id="cota">
                                </ul>
                              </CardText>
                              <a className="btn btn-dark float-right mt-3" href="https://en.wikipedia.org/wiki/Circuit_of_the_Americas" aria-label="Learn more about the track">Learn more</a>
                            </div>
                        </div>
                    </div>
                  </div>
                </CardBody></div>
              </Card></div>
            </div>
        )
    }
}
