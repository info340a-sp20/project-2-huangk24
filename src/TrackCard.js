import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Route, Link} from 'react-router-dom';

export class RenderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      active: "collapsible"
    }
  }

  rendertimes = () => {
    if (this.state.active.includes("active")) {
      this.setState({active: "collapsible"});
    } else {
      this.setState({active: "collapsible active"});
    }

    if (this.state.display === "table-cell") {
      this.setState({display: "none"});
    } else {
      this.setState({display: "table-cell"});
    }
  }

  render() {
    let laptimes = [];
    this.props.times.forEach((laptime) => {
      let name = <Link to='/people'>{laptime.name}</Link>;
      laptimes.push(<li className="w-100" key={laptime.name}>{name}: {laptime.laptime}</li>);
    });

    return(
      <div className="col-md-6 col-xl-4 d-flex">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-auto w-100">
                <img className="pb-3" src={this.props.track.image} alt={this.props.track.propername}></img>
                <div className="col-sm">
                  <h2 className="card-title">{this.props.track.propername}</h2>
                  <button type="button" className={this.state.active} onClick={this.rendertimes}>Lap times</button>
                  <div className="card-text" id="expand-list" style={{display: this.state.display}}>
                    <ul className="hide-list row text-center" id={this.props.track.name}>
                      {laptimes}
                    </ul>
                  </div>
                  <a className="btn btn-dark float-right mt-3" href={this.props.track.wiki} aria-label="Learn more about the track">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
