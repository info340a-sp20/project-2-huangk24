import React, { Component } from 'react';
import { Card, CardText, CardBody, CardImg,
    CardTitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { active } from 'd3';

export class RenderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      active: "collapsible"
    }
  }

  rendertimes = () => {
    // this.classList.toggle("active");
    // let content = this.nextElementSibling;
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }
    if (this.state.active.includes("active")) {
      this.setState({active: "collapsible"});
    } else {
      this.setState({active: "collapsible active"});
    }

    if (this.state.display == "block") {
      this.setState({display: "none"});
    } else {
      this.setState({display: "block"});
    }
  }

  render() {
    let laptimes = [];
    this.props.times.forEach((laptime) => {
      laptimes.push(<li className="w-100" key={laptime.name}>{laptime.name}: {laptime.laptime}</li>);
    });



    return(
      <div className="col-md-6 col-xl-4 d-flex">
        <div className="card mb-4">
          {/* <Card> */}
          <div className="card-body">
            {/* <CardBody> */}
            <div className="row">
              <div className="col-sm-auto w-100">
                {/* <CardImg className="pb-3" src={this.props.track.image} alt="Circuit of the Americas" /> */}
                <img className="pb-3" src={this.props.track.image} alt="Circuit of the Americas"></img>
                  <div className="col-sm">
                    {/* <CardTitle className="card-title">{this.props.track.propername}</CardTitle> */}
                    <h2 className="card-title">{this.props.track.propername}</h2>
                    <button type="button" className={this.state.active} onClick={this.rendertimes}>Lap times</button>
                    <div className="card-text" id="expand-list" style={{display: this.state.display}}>
                      <div className="card-text" id="expand-list">
                        <ul className="hide-list row text-center" id={this.props.track.name}>
                          {laptimes}
                        </ul>
                      </div>
                    </div>
                    <a className="btn btn-dark float-right mt-3" href={this.props.track.wiki} aria-label="Learn more about the track">Learn more</a>
                  </div>
              </div>
            </div>
          {/* </CardBody> */}
          </div>
        {/* </Card> */}
        </div>
      </div>
    );
  }
}
