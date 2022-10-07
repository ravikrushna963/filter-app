import React, { Component } from "react";
import Messages from "../Messages";

import "./index.css";

class FilterApp extends Component {
  state = {
    data: [],
    searchInput: "",
  };

  onChangeSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const { searchInput, data } = this.state;
    const { initialdata } = this.props;
    const filteredData = initialdata.filter((items) =>
      items.message.includes(searchInput)
    );
    return (
      <div className="filter-app">
        <h1 className="heading1">Filter App</h1>
        <input
          type="text"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          className="input"
          placeholder="Enter text to search"
        />
        <ul className="lists">
          {filteredData.map((i) => (
            <Messages id={i.id} item={i.message} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FilterApp;