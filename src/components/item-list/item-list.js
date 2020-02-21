import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Divider } from "@material-ui/core";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const useStyles = {
  root: {
    backgroundColor: "#2f2d2d",
    // height: "250px",
    borderRadius: "10px",
    padding: "20px"
  },
  divider: {
    backgroundColor: "grey"
  }
};

class Itemlist extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({ peopleList });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <List key={id}>
          <ListItem button onClick={() => this.props.onItemSelected(id)}>
            {name}
          </ListItem>
          <Divider style={useStyles.divider} />
        </List>
      );
    });
  }

  render() {
    const { classes } = this.props;
    const { peopleList } = this.state;

    if (!peopleList) return <Spinner />;
    // const array = ["Luke Skywalker", "Darth Vader", "R2-D2"];
    const items = this.renderItems(peopleList);
    return <div className={classes.root}>{items}</div>;
  }
}

export default withStyles(useStyles)(Itemlist);
