import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Itemlist from "../item-list";
import PersonalDetails from "../person-details";
import Grid from "@material-ui/core/Grid";
import Error from "../error";
import ErrorButton from "../error-button";

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

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  componentDidCatch(error, info) {
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
          <Itemlist onItemSelected={this.onPersonSelected}></Itemlist>
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
