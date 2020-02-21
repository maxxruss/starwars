import React, { Component } from "react";
import Error from "../error";
import Spinner from "../spinner"
import SwapiService from "../../services/swapi-service";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = {
  root: {
    display: "flex",
    loader: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    marginRight: "50px"
  },
  info: {
    display: "flex",
    flexDirection: "column"
  },
  planetTitle: {
    color: "white"
  },
  planetItemtext: {
    color: "white"
  },
  divider: {
    backgroundColor: "grey"
  }
};

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    setInterval(() => {
      this.updatePlanet();
    }, 3000);
  }

  onError = error => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onPlanetLoaded = planet => {
    // console.log(planet)
    this.setState({ planet, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { classes } = this.props;
    const {
      planet: { id, name, population, rotationPeriod, diameter },
      loading,
      error
    } = this.state;

    if (loading) return <Spinner/>    
    if (error) return <Error />;

    return (
      <div className={classes.root}>
        <img
          className={classes.image}
          alt="planet"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div className={classes.info}>
          <Typography variant="h3" className={classes.planetTitle}>
            {name}
          </Typography>
          <List>
            <ListItem className={classes.planetItemtext}>
              population {population}
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              Rotation period {rotationPeriod}
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              Diameter {diameter}
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(RandomPlanet);
