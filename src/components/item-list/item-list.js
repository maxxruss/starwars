import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const useStyles = {
  root: {
    backgroundColor: "#2f2d2d",
    // height: "250px",
    borderRadius: "10px"
    // padding: "20px"
  },
  divider: {
    backgroundColor: "grey"
  }
};

class Itemlist extends Component {
  swapiService = new SwapiService();
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => {
      this.setState({ itemList });
    });
  }

  render() {
    const { classes, onItemSelected } = this.props;
    const { itemList } = this.state;

    if (!itemList) return <Spinner />;
    const items = itemList.map(item => {
      const { id, name } = item;
      return (
        <List disablePadding key={id}>
          <ListItem
            button
            onClick={() => {
              onItemSelected(id);
            }}
          >
            {name}
          </ListItem>
        </List>
      );
    });
    return <div className={classes.root}>{items}</div>;
  }
}

export default withStyles(useStyles)(Itemlist);
