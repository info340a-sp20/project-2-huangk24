import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {RenderCard} from "./Card";
import * as d3 from 'd3';

// let state = {
//   sort: "length",
//   filter: "all"
// }

class SortOption extends Component {
    render() {
      return (
        <>
          <label className="change-views" htmlFor="sort">Sort tracks by: </label>
          <select id="sort">
              <option value="length">Track Length</option>
            <option value="difficulty">Difficulty</option>
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
          <select id="filter">
            <option value="all">All (Default)</option>
            <option value="us">United States</option>
            <option value="japan">Japan</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
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
    // let laptimes = [];
    // let trackdetails = [];
    d3.csv("data/laptimes.csv")
      .then(function(data) {
        // laptimes.push(data);
        // console.log("mountedlap");
        // console.log(data);
        currentComponent.setState({laptimes: data});
    });

    d3.csv("data/trackdata.csv")
      .then(function(data2) {
        // trackdetails.push(data2);
        // console.log("mountedtrack");
        // console.log(data2);
        currentComponent.setState({trackdetails: data2});
    });
  }

  render() {
    let cards = [];

    let filteredtracks;
    if (this.state.filter != "all") {
      console.log("filter not all");
      filteredtracks = this.state.trackdetails.filter(function(track) {
        return track.location === this.state.filter;
      });
    } else {
      // console.log("filter all");
      filteredtracks = this.state.trackdetails;
    }

    // sort by difficulty or length
    if (this.state.sort == "difficulty") {
      filteredtracks.sort((a, b) => (b.difficulty - a.difficulty));
    } else {
      filteredtracks.sort((a, b) => (b.length - a.length));
    }

    // filter lap times for the each track and build it
    for (let i = 0; i < filteredtracks.length; i++) {
      let timesarray = []
      for (let j = 0; j < this.state.laptimes.length; j++) {
        if (filteredtracks[i].name == this.state.laptimes[j].track) {
          timesarray.push(this.state.laptimes[j]);
        }
      }
      // console.log(filteredtracks[i]);
      cards.push(<RenderCard key={filteredtracks[i].name} track={filteredtracks[i]} times={timesarray}></RenderCard>);
    }

    console.log("cards");
    console.log(cards);

    return (
      <>
        <SortOption />
        <FilterOption />
        <div className="container">
          <div className="row" id="content">
            {cards}
          </div>
        </div>
      </> 
    );
  }
}
