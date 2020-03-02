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

class PeoplePage extends Component {
  state = {
    hasError: false,
    selectedPerson: 1
  };

  swapiService = new SwapiService();

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  componentDidCatch(error, info) {
    // debugger;
    this.setState({ hasError: true });
  }

  render() {
    const { classes } = this.props;

    if (this.state.hasError) {
      return <Error />;
    }

    return (
      <Grid container className={classes.infoWrap} spacing={3}>
        <Grid item sm={12} md={6}>
          <Itemlist
            getData={this.swapiService.getAllPeople}
            onItemSelected={this.onPersonSelected}
          ></Itemlist>
        </Grid>
        <Grid item sm={12} md={6}>
          <PersonalDetails
            personId={this.state.selectedPerson}
          ></PersonalDetails>
          <ErrorButton />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(PeoplePage);
