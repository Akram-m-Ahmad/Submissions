import React from "react";
import "../App.css";
export class Search extends React.Component {
  state = {
    input: "london"
  };
  onInput = e => this.setState({ input: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <nav>
        <label className="text">
          <input
            type="text"
            name="city"
            value={this.state.value}
            className="city"
            onChange={this.onInput}
          ></input>
        </label>
        <button
          className="btn-search"
          type="find weather"
          onClick={this.onSubmit}
        >
          FIND WEATHER
        </button>
      </nav>
    );
  }
}

export default Search;
