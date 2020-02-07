import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

const useStyles = {
  root: {},
};

class Header extends Component {
  render() {
    return <div>StarWars</div>;
  }
}

export default withStyles(useStyles)(Header)