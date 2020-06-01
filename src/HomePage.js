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

// let laptimes = [];
// let trackdetails = [];
// d3.csv("data/laptimes.csv")
//   .then(function(data) {
//     laptimes.push(data);
//     d3.csv("data/trackdata.csv")
//       .then(function(data2) {
//         trackdetails.push(data2);
//     });
// });

// d3.csv("data/laptimes.csv")
//   .then(function(data) {
//     laptimes.push(data);
// }).catch(function(error) {
//     console.log(error);
// });

// d3.csv("data/trackdata.csv")
//   .then(function(data2) {
//     trackdetails.push(data2);
// }).catch(function(error) {
//     console.log(error);
// });

// function execute(callback) {
//   d3.csv("data/laptimes.csv", function(data){
//     laptimes = data;
//     callback(laptimes);
//   });
// }

// execute(function(){});

// d3.csv("data/laptimes.csv", function(data) {
//   laptimes = data;
// });
// d3.csv("data/trackdata.csv", function(data) {
//   trackdetails = data;
// });
  
export class HomePage extends Component {
  constructor(props) {
    super(props);
    // let laptimes = [];
    // let trackdetails = [];
    // d3.csv("data/laptimes.csv")
    //   .then(function(data) {
    //     laptimes.push(data);
    //     d3.csv("data/trackdata.csv")
    //       .then(function(data2) {
    //         trackdetails.push(data2);
    //     });
    // });

    this.state = {
      sort: "length",
      filter: "all"
      // ,
      // laptimes: laptimes,
      // trackdetails: trackdetails
    }
  }

  render() {
    // let laptimes = [];
    // let trackdetails = [];
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
    // laptimes = d3.csvFormat("data/laptimes.csv", ["track", "name", "laptime"]);

    // d3.csv("data/laptimes.csv", function(d) {
    //   return {
    //     track: d.track,
    //     name: d.name,
    //     laptime: d.laptime
    //   };
    // }).then(function(data) {
    //     console.log(data);
    //     laptimes.push(data);
    //     d3.csv("data/trackdata.csv")
    //       .then(function(data2) {
    //         trackdetails = data2;
    //     });
    // });
    let laptimes = [];
    let trackdetails = [];
    d3.csv("data/laptimes.csv")
      .then(function(data) {
        laptimes.push(data);
        d3.csv("data/trackdata.csv")
          .then(function(data2) {
            trackdetails.push(data2);
        });
    });
    


    // console.log("check if not empty:");
    // console.log(laptimes);
    // console.log("check if not empty:");
    // console.log(trackdetails);

    // console.log(d3.version);
    // let laptimes = this.props.data.laptimes;
    // let trackdetails = this.props.data.trackdetails;

    // if (trackdetails && laptimes) {
    //   cards = trackdetails.map((track) => {
    //     let times = laptimes.filter(word => (word.track === track.name));
    //     return <RenderCard track={track} times={times}></RenderCard>;
    //   });
    // }

    let cards = [];

    // let filteredtracks;
    // if (this.state.filter != "all") {
    //   console.log("filter not all");
    //   filteredtracks = trackdetails.filter(function(track) {
    //     return track.location === this.state.filter;
    //   });
    // } else {
    //   console.log("filter all");
    //   filteredtracks = trackdetails;
    // }

    // // sort by difficulty or length
    // if (this.state.sort == "difficulty") {
    //   filteredtracks.sort((a, b) => (b.difficulty - a.difficulty));
    // } else {
    //   filteredtracks.sort((a, b) => (b.length - a.length));
    // }

    // // filter lap times for the each track and build it
    // for (let i = 0; i < filteredtracks.length; i++) {
    //   let timesarray = []
    //   for (let j = 0; j < laptimes.length; j++) {
    //     if (filteredtracks[i].name == laptimes[j].track) {
    //       timesarray.push(laptimes[j]);
    //     }
    //   }
    //   console.log(filteredtracks[i]);
    //   cards.push(<RenderCard track={filteredtracks[i]} times={timesarray}></RenderCard>);
    // }

    console.log("cards");
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
