import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {RenderCard} from "./TrackCard";
import * as d3 from 'd3';

class SortOption extends Component {
  render() {
    return (
      <>
        <label className="change-views" htmlFor="sort">Sort tracks by: </label>
        <select id="sort" onChange={(event) => this.props.changefunc(event.target.value)}>
          <option value="length">Track Length (Long to Short)</option>
          <option value="difficulty">Difficulty (Hard to Easy)</option>
        </select>
      </>
    )
  }
}
  
class FilterOption extends Component {
  render() {
    return (
      <>
        <label className="change-views" htmlFor="filter">Filter tracks from: </label>
          <select id="filter" onChange={(event) => this.props.changefunc(event.target.value)}>
            <option value="all">All (Default)</option>
            <option value="us">United States</option>
            <option value="japan">Japan</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
            <option value="england">England</option>
            <option value="france">France</option>
            <option value="belgium">Belgium</option>
            <option value="brazil">Brazil</option>
            <option value="italy">Italy</option>
          </select>
      </>
    )
  }
}

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "length",
      filter: "all",
      laptimes: [],
      trackdetails: []
    }
  }

  componentDidMount() {
    let currentComponent = this;
    d3.csv("data/laptimes.csv")
      .then(function(data) {
        currentComponent.setState({laptimes: data});
    });
    d3.csv("data/trackdata.csv")
      .then(function(data2) {
        currentComponent.setState({trackdetails: data2});
    });
  }

  changesort = (sortorder) => {
    this.setState({sort: sortorder});
  }

  changefilter = (newfilter) => {
    this.setState({filter: newfilter});
  }

  getCards = () => {
    let cards = [];
    let filteredtracks;
    if (this.state.filter !== "all") {
      // console.log("filter not all");
      filteredtracks = this.state.trackdetails.filter((track) => {
        return track.location === this.state.filter;
      });
    } else {
      // console.log("filter all");
      filteredtracks = this.state.trackdetails;
    }

    // sort by difficulty or length
    if (this.state.sort === "difficulty") {
      filteredtracks.sort((a, b) => (b.difficulty - a.difficulty));
    } else {
      filteredtracks.sort((a, b) => (b.length - a.length));
    }

    // filter lap times for the each track and build it
    for (let i = 0; i < filteredtracks.length; i++) {
      let timesarray = []
      for (let j = 0; j < this.state.laptimes.length; j++) {
        if (filteredtracks[i].name === this.state.laptimes[j].track) {
          timesarray.push(this.state.laptimes[j]);
        }
      }
      cards.push(<RenderCard key={filteredtracks[i].name} track={filteredtracks[i]} times={timesarray}></RenderCard>);
    }
    return cards;
  }

  render() {
    return (
      <>
        <SortOption changefunc={this.changesort}/>
        <FilterOption changefunc={this.changefilter}/>
        <div className="container">
          <div className="row" id="content">
            {this.getCards()}
          </div>
        </div>
      </> 
    );
  }
}
