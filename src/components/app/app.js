import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import Header from "../header";
// import Row from "../row";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import Error from "../error";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = {
  root: {
    display: "flex",
    background: "#272b30",
    height: "100%",
    color: "white",
  },
  headerWrap: {
    marginTop: "50px",
    display: "flex",
  },
  randomPlanetWrap: {
    backgroundColor: "#1c1e22",
    border: "1px black solid",
    height: "250px",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
  },
};

class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
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
              <Router>
                <Header onServiceChange={this.onServiceChange} />
                <div className={classes.randomPlanetWrap}>
                  <RandomPlanet />
                </div>
                <Route
                  path="/"
                  render={() => <h2>Welkome to StarDB</h2>}
                  exact
                ></Route>
                <Route path="/people" render={() => <h2>People</h2>} exact></Route>
                <Route path='/people' component={PeoplePage}></Route>
                <Route path='/planets' component={PlanetsPage}></Route>
                <Route path='/starships' component={StarshipsPage}></Route>               
              </Router>
            </SwapiServiceProvider>
          </ErrorBoundry>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
