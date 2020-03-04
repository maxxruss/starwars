import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

// import Grid from "@material-ui/core/Grid";
// import Itemlist from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import Header from "../header";
// import PeoplePage from "../people-page";
import RandomPlanet from "../random-planet";
import Error from "../error";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

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
    hasError: false
  };

  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    const { classes } = this.props;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    const personalDetail = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      ></ItemDetails>
    );

    const starshipDetail = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      ></ItemDetails>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
          <ErrorBoundry>
            <Header />
            <div className={classes.randomPlanetWrap}>
              <RandomPlanet />
            </div>
            <Row left={personalDetail} right={starshipDetail}></Row>
            {/* <PeoplePage /> */}

            {/* <Grid container className={classes.infoWrap} spacing={3}>
              <Grid item sm={12} md={6}>
                <Itemlist
                  getData={this.swapiService.getAllPlanets}
                  onItemSelected={this.onPersonSelected}
                  //Рендер функция (паттерн React) - передаем функцию в функцию
                >
                  {i => (
                    <span>
                      {i.name}
                      <button>!</button>
                    </span>
                  )}
                </Itemlist>
              </Grid>
              <Grid item sm={12} md={6}>
                <ItemDetails personId={this.state.selectedPerson}></ItemDetails>
              </Grid>
            </Grid> */}

            {/* <Grid container className={classes.infoWrap} spacing={3}>
              <Grid item sm={12} md={6}>
                <Itemlist
                  getData={this.swapiService.getAllStarships}
                  onItemSelected={this.onPersonSelected}
                >
                  {i => `${i.name}`}
                </Itemlist>
              </Grid>
              <Grid item sm={12} md={6}>
                <ItemDetails personId={this.state.selectedPerson}></ItemDetails>
              </Grid>
            </Grid> */}
          </ErrorBoundry>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
