import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../header";
// import Itemlist from "../item-list";
// import PersonalDetails from "../person-details";
// import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
// import StarShipDetails from "../starship-details";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = {
  root: {
    display: "flex",
    // flexDirection: "column",
    background: "black",
    height: "100%"
  },
  headerWrap: {
    marginTop: "50px",
    display: "flex"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "1px"
  },
  submit: {
    marginBottom: "15px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header/>
            <RandomPlanet/>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
