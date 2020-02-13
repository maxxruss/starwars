import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Divider } from "@material-ui/core";
// import Divider from "@material-ui/core/Divider";

const useStyles = {
  root: {
    // display: "flex",
    backgroundColor: "#2f2d2d",
    height: "250px",
    borderRadius: "10px",
    padding: "20px"
  },
  divider: {
    backgroundColor: "grey"
  }  
};

class Itemlist extends Component {
  render() {
    const {classes} = this.props;
    const array = ['Luke Skywalker', 'Darth Vader', 'R2-D2'];
    const items = array.map(item => {
      return (
        <div><ListItem button>{item}</ListItem><Divider className={classes.divider}/></div>
      );
    });
    return (
      <div>
        <List className={classes.root} component="nav" aria-label="main mailbox folders">
          {items}
        </List>
      </div>
    );
  }
}

export default withStyles(useStyles)(Itemlist);
