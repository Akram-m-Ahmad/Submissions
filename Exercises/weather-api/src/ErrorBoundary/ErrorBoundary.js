import React from "react";
import "../App.css";

class ErrorBoundary extends React.Component {
  state = { greeting: "Welcome" };
  componentDidMount() {
    throw new Error("An error has occured in Buggy component!");
  }
  render() {
    return <h2>{this.state.greeting}</h2>;
  }
}
export default ErrorBoundary;
