import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import Header from "../header";
import RandomPlanet from "../random-planet";
import Error from "../error";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

const useStyles = {
  root: {
    display: "flex",
    background: "#272b30",
    height: "100%",
    color: "white"
  },
  headerWrap: {
    marginTop: "50px",
    display: "flex"
  },
  randomPlanetWrap: {
    backgroundColor: "#1c1e22",
    border: "1px black solid",
    height: "250px",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  }
};

class App extends Component {
  state = {
    hasError: false,
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
          <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
              <Header onServiceChange={this.onServiceChange} />
              <div className={classes.randomPlanetWrap}>
                <RandomPlanet />
              </div>
              <PersonDetails itemId={11} />
              <PlanetDetails itemId={11} />
              <StarshipDetails itemId={11} />
              <PersonList></PersonList>
              <PlanetList></PlanetList>
              <StarshipList></StarshipList>
            </SwapiServiceProvider>
          </ErrorBoundry>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
