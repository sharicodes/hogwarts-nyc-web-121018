import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

const makeDataLessSilly = hogsData => {
  return hogsData.map(function(hog) {
    const {
      name,
      specialty,
      greased,
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": weight,
      "highest medal achieved": medal,
      id
    } = hog;

    return { name, specialty, greased, weight, medal, id };
  });
};
const newHogData = makeDataLessSilly(hogs);

class App extends Component {
  state = {
    hogs: newHogData
  };

  handleSortHogs = e => {
    if (e.target.innerText === "Sort Name") {
      const copyOfHogs = [...this.state.hogs];
      // console.log(copyOfHogs);
      copyOfHogs.sort(function(a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
      // console.log(copyOfHogs);
      this.setState({
        hogs: copyOfHogs
      });
    } else if (e.target.innerText === "Sort Weight") {
      const copyOfHogs = [...this.state.hogs];
      // console.log(copyOfHogs);
      copyOfHogs.sort(function(a, b) {
        var nameA = a.weight,
          nameB = b.weight;
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
      // console.log(copyOfHogs);
      this.setState({
        hogs: copyOfHogs
      });
    }
  }; //end of sort functions

  toggleGreasedHogs = () => {
    const copyOfHogs = [...this.state.hogs];

    return copyOfHogs.filter(hog => {
      return hog.greased === true;
    });
  };

  render() {
    return (
      <div className="App">
        <Nav handleSortHogs={this.handleSortHogs} />
        <br />
        <br />
        <br />
        <HogContainer hogs={this.toggleGreasedHogs()} />
      </div>
    );
  }
}

export default App;
