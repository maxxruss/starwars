import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = {
  button: {
    color: "seagreen",
    fontSize: 20,
    fontWeight: 900,
    margin: "0 10px"
  }
};

class ErrorButton extends Component {
  state = {
    renderError: false
  };

  render() {
    const { classes } = this.props;
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <Button
        className={classes.button}
        size="large"
        onClick={() => this.setState({ renderError: true })}
      >
        Error
      </Button>
    );
  }
}

export default withStyles(useStyles)(ErrorButton);
