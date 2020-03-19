import React, { Component } from "react";
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";

export default class PeoplePage extends Component {
  state = {
    selectedItem: ""
  };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}
