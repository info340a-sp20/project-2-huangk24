import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {RenderCard} from "./Card";

class SortOption extends Component {
    render() {
      return (
        <>
          <label className="change-views" for="sort">Sort tracks by: </label>
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
          <label className="change-views" for="filter">Filter tracks from: </label>
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
    render() {
      return (
        <>
          <SortOption />
          <FilterOption />
          <div className="container">
            <RenderCard />
          </div>
        </> 
      );
    }
  }
