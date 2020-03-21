import React, { Component } from "react";
import PropTypes from "prop-types";
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

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default withStyles(useStyles)(Row);
