import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class Error extends Component {
  render() {
    const errorStyle = {
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div style={errorStyle}>
        <Typography variant="h3" component="h2" gutterBottom>
          something went wrong
        </Typography>
      </div>
    );
  }
}
