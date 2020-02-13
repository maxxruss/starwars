import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";


const useStyles = {
  root: {
    display: "flex",
    backgroundColor: "#2f2d2d",
    height: "250px",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: '20px',

  },
  image: {
    width: "200px",
    height: "200px",
    backgroundColor: "green",
    borderRadius: "10px",
    marginRight: "50px"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    // height: '200px',
    // backgroundColor: "green",
  },
  planetTitle: {
    color: "white"
  },
  planetItemtext: {
    color: "white"
  },
  divider: {
    backgroundColor: "grey"
  }
};

class PersonalDetails extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.image}></div>
        <div className={classes.info}>
          <Typography variant="h3" className={classes.planetTitle}>
            Mustafar
          </Typography>
          <List>
            <ListItem className={classes.planetItemtext}>
              population 20000
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              Rotation period 36
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              Diameter 4200
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(PersonalDetails)