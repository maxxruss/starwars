import React, { Component } from "react";
import Itemlist from "../item-list";
import ItemDetails from "../item-details";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import Error from "../error";

import SwapiService from "../../services/swapi-service";

class PeoplePage extends Component {
  state = {
    selectedPerson: 1
  };

  swapiService = new SwapiService();

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    const itemList = (
      <Itemlist
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
      >
        {i => `${i.name} (${i.birthYear})`}
      </Itemlist>
    );

    const personalDetails = (
      <ItemDetails personId={this.state.selectedPerson}></ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personalDetails}></Row>
        <ErrorButton />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
