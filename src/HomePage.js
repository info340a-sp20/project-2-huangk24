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
      filter: "all"
    }
  }

  render() {
    let laptimes;
    let trackdetails;
    // d3.csv("data/laptimes.csv", function(d) {
    //   return {
    //     track: d.track,
    //     name: d.name,
    //     laptime: d.laptime
    //   };
    // }, function(error, rows) {
    //   console.log(error, rows);
    // }).then(function(data) {
    //     laptimes = data;
    //     d3.csv("data/trackdata.csv")
    //       .then(function(data2) {
    //         trackdetails = data2;
    //     });
    // });
    // laptimes = d3.csvParse("data/laptimes.csv", function(d) {
    //   return {
    //     track: d.track,
    //     name: d.name,
    //     laptime: d.laptime
    //   };
    // });
    // laptimes = d3.

    let cards = [];

    console.log(laptimes);
    console.log(trackdetails);
    console.log(d3.version);

    if (trackdetails && laptimes) {
      cards = trackdetails.map((track) => {
        let times = laptimes.filter(word => (word.track == track.name));
        return <RenderCard track={track} times={times}></RenderCard>;
      });
    }

    console.log(cards);

    return (
      <>
        <SortOption />
        <FilterOption />
        <div className="container">
          {cards}
          {/* <RenderCard ></RenderCard> */}
        </div>
      </> 
    );
  }
}
