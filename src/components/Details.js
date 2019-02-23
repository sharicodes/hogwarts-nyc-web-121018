import React, { Component } from "react";

class Details extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <ul>
          <li>Weight: {this.props.weight}</li>
          <li>Medal: {this.props.medal}</li>
          <li>Greased: {this.props.greased.toString()}</li>
        </ul>
      </div>
    );
  }
}

export default Details;
