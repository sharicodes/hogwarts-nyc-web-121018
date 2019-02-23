import React, { Component } from "react";
import Details from "./Details";

class Hog extends Component {
  state = {
    status: "hideDetails"
  };

  detailsButtonClick = () => {
    // console.log("click");
    if (this.state.status === "hideDetails") {
      this.setState({
        status: "showDetails"
      });
    } else {
      this.setState({
        status: "hideDetails"
      });
    }
  };

  makeUrl = str => {
    return (
      str
        .toLowerCase()
        .split(" ")
        .join("_") + ".jpg"
    );
  };

  render() {
    // console.log(this.state.status);
    //console.log(this.props);

    return (
      <div
        //onClick={() => this.handleHogClick(this.props.id)}
        className="ui card"
      >
        <div className="image">
          <div className="ui eight wide column">
            <img
              src={require(`../hog-imgs/${this.makeUrl(this.props.name)}`)}
            />
          </div>
          <div className="content">
            <a className="header">{this.props.name}</a>
          </div>
        </div>
        {this.state.status === "showDetails" ? (
          <Details
            weight={this.props.weight}
            medal={this.props.medal}
            greased={this.props.greased}
          />
        ) : null}
        <button onClick={this.detailsButtonClick} name="details">
          {" "}
          Toggle For More Details
        </button>
      </div>
    );
  }
}

export default Hog;
