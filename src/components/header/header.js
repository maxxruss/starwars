import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = {
  root: {
    flexGrow: 1
  },
  board: {
    position: "static",
    background: "transparent"
  },
  title: {
    flexGrow: 1
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.board}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Header);
