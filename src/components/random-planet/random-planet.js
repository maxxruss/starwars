import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = {
  root: {
    display: "flex",
    backgroundColor: "#2f2d2d",
    height: "250px",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  },
  image: {
    width: "200px",
    height: "200px",
    // backgroundColor: "green",
    borderRadius: "10px",
    marginRight: "50px"
  },
  info: {
    display: "flex",
    flexDirection: "column"
    // height: '200px',
    // backgroundColor: "green",
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
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    // console.log(planet)
    this.setState({ planet });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { classes } = this.props;
    const {
      planet: { id, name, population, rotationPeriod, diameter }
    } = this.state;
    // setTimeout(() => {
    //   updatePlanet
    // }, 3000);
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
