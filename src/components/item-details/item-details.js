import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = {
  root: {
    display: "flex",
    backgroundColor: "#1c1e22",
    border: "1px black solid",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  },
  image: {
    width: "200px",
    height: "270px",
    backgroundColor: "green",
    borderRadius: "10px",
    marginRight: "50px"
  },
  info: {
    display: "flex",
    flexDirection: "column"
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

class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    //Обязательно сравнить предыдущее состояние с настоящим
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, image: getImageUrl(item) });
      console.log(getImageUrl(item));
    });

    // console.log(personId)
  }

  render() {
    if (!this.state.item) {
      return <span>Select from a list</span>;
    }
    const { item, image } = this.state;
    const { classes } = this.props;
    const { name, gender, birthYear, eyeColor } = item;
    return (
      <div className={classes.root}>
        <img className={classes.image} alt="person" src={image} />
        <div className={classes.info}>
          <Typography variant="h3" className={classes.planetTitle}></Typography>
          <List>
            <ListItem className={classes.planetItemtext}>name {name}</ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              eyeColor {eyeColor}
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              gender {gender}
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.planetItemtext}>
              birthYear {birthYear}
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ItemDetails);
