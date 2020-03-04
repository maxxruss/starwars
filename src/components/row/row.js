import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const useStyles = {
  root: {
    flexGrow: 1
  }
};

class Row extends Component {
  render() {
    const { left, right, classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={3}>
        <Grid item sm={12} md={6}>
          {left}
        </Grid>
        <Grid item sm={12} md={6}>
          {right}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Row);
