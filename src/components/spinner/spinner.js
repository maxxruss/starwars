import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = {
  root : {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
}

class Spinner extends Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
          <CircularProgress />
        </div>
    );
  }
}

export default withStyles(useStyles)(Spinner)