import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../header";
import Itemlist from "../item-list";
import PersonalDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarShipDetails from "../starship-details";
// import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const styles = {
  root: {
    background: "black"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container maxWidth="md" >
          <Header></Header>
          <Itemlist></Itemlist>
          <PersonalDetails></PersonalDetails>
          <PlanetDetails></PlanetDetails>
          <RandomPlanet></RandomPlanet>
          <StarShipDetails></StarShipDetails>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
