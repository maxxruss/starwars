import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = {
  root: {
    margin: '10px 0'
  },
  board: {
    position: "static",
    backgroundColor: "#1c1e22",
    border: "1px black solid",
    borderRadius: "10px",
    color: "yellow"
  },
  title: {
    margin: "0 20px"
  },
  buttonWrap: {
    dispay: "flex",
    flexGrow: 1
  },
  button: {
    color: "seagreen",
    fontSize: 20,
    fontWeight: 900,
    margin: '0 10px'
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.board}>
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Star DB
            </Typography>
            <div className={classes.buttonWrap}>
              <Button size="large" className={classes.button}>Peoples</Button>
              <Button size="large" className={classes.button}>Planets</Button>
              <Button size="large" className={classes.button}>Starships</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Header);
