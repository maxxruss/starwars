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

const Record = ({ item, label, field }) => {
  const useStyles = {
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

  return (
    <div>
      <ListItem className={useStyles.planetItemtext}>
        {label} - {item[field]}
      </ListItem>
      <Divider className={useStyles.divider} />
    </div>
  );
};

export { Record };

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
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl
    ) {
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
      // console.log(item);
    });

    // console.log(personId)
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select from a list</span>;
    }
    // const { name, gender, birthYear, eyeColor } = item;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img className={classes.image} alt="person" src={image} />
        <div className={classes.info}>
          <Typography variant="h3" className={classes.planetTitle}></Typography>
          <List>
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ItemDetails);
