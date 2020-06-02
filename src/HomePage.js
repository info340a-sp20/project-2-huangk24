import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {RenderCard} from "./Card";
import * as d3 from 'd3';

class SortOption extends Component {
    render() {
      return (
        <>
          <label className="change-views" htmlFor="sort">Sort tracks by: </label>
          <select id="sort" onChange={(event) => this.props.changefunc(event.target.value)}>
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
          <select id="filter" onChange={(event) => this.props.changefunc(event.target.value)}>
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
    this.changesort = this.changesort.bind(this);
    this.changefilter = this.changefilter.bind(this);
    this.getCards = this.getCards.bind(this);
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
    console.log(sortorder);
  }

  changefilter = (newfilter) => {
    // this.setState({filter: newfilter});
    this.setState(() => {
      //return the Object to "merge" into the state
      let stateChanges = {filter: newfilter}; //increment count
      return stateChanges;
    });
  }

  getCards = () => {
    let cards = [];
    let filteredtracks;
    if (this.state.filter != "all") {
      console.log("filter not all");
      filteredtracks = this.state.trackdetails.filter(function(track) {
        console.log(track.location);
        console.log(this.state.filter);
        return track.location == this.state.filter;
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
      cards.push(<RenderCard key={filteredtracks[i].name} track={filteredtracks[i]} times={timesarray}></RenderCard>);
    }
    return cards;
  }

  render() {
    let cards = this.getCards();
    // console.log("cards");
    // console.log(cards);

    return (
      <>
        <SortOption changefunc={this.changesort}/>
        <FilterOption changefunc={this.changefilter}/>
        <div className="container">
          <div className="row" id="content">
            {cards}
          </div>
        </div>
      </> 
    );
  }
}
