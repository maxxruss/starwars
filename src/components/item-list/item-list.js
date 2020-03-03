import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const useStyles = {
  root: {
    backgroundColor: "#1c1e22",
    borderRadius: "10px",
    border: "1px black solid",
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
      const { id } = item;
      const label = this.props.children(item)
      return (
        <List disablePadding key={id}>
          <ListItem
            button
            onClick={() => {
              onItemSelected(id);
            }}
          >
            {label}
          </ListItem>
        </List>
      );
    });

    return <div className={classes.root}>{items}</div>;
  }
}

export default withStyles(useStyles)(Itemlist);
