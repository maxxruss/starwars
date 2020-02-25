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
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  },
  image: {
    width: "200px",
    height: "270px",
    backgroundColor: "green",
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

class PersonalDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person => {
      this.setState({ person });
      // console.log(person);
    });
    // console.log(personId)
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }
    const { classes } = this.props;
    const {id, name, gender, birth_year, eye_color } = this.state.person;
    return (
      <div className={classes.root}>
        <img
          className={classes.image}
          alt="person"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
        <div className={classes.info}>
          <Typography variant="h3" className={classes.planetTitle}></Typography>
          <List>
            <ListItem className={classes.planetItemtext}>name {name}</ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              eyeColor {eye_color}
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              gender {gender}
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              birthYear {birth_year}
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(PersonalDetails);
