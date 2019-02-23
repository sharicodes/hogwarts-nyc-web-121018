import React, { Component } from "react";
import Hog from "./Hog";
const uuidv4 = require("uuid/v4");

class HogContainer extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => {
          return (
            <Hog
              name={hog.name}
              key={uuidv4()}
              id={uuidv4()}
              weight={hog.weight}
              medal={hog.medal}
              greased={hog.greased}
            />
          );
        })}
      </div>
    );
  }
}

export default HogContainer;
