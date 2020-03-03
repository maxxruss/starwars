import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Itemlist from "../item-list";
import PersonalDetails from "../person-details";
import ErrorButton from "../error-button";
import Grid from "@material-ui/core/Grid";
import Error from "../error";

import SwapiService from "../../services/swapi-service";

const useStyles = {
  infoWrap: {
    flexGrow: 1
  }
};

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    // debugger;
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return this.props.children;
  }
}

class PeoplePage extends Component {
  state = {
    selectedPerson: 1
  };

  swapiService = new SwapiService();

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    const { classes } = this.props;

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

    return (
      <Grid container className={classes.infoWrap} spacing={3}>
        <Grid item sm={12} md={6}>
          {itemList}
        </Grid>
        <ErrorBoundry>
          <Grid item sm={12} md={6}>
            <PersonalDetails
              personId={this.state.selectedPerson}
            ></PersonalDetails>

            <ErrorButton />
          </Grid>
        </ErrorBoundry>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(PeoplePage);
