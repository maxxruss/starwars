import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../header";
import PeoplePage from "../people-page";
import RandomPlanet from "../random-planet";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = {
  root: {
    display: "flex",
    background: "black",
    height: "100%",
    color: "white"
  },
  headerWrap: {
    marginTop: "50px",
    display: "flex"
  },
  randomPlanetWrap: {
    backgroundColor: "#2f2d2d",
    height: "250px",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <div className={classes.randomPlanetWrap}>
            <RandomPlanet />
          </div>
          <PeoplePage/>
          <PeoplePage/>
          <PeoplePage/>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
