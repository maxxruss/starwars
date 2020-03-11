import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import SwapiService from "../../services/swapi-service";
// import Spinner from "../spinner";
// import { withData } from "../hoc-helpers";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1c1e22",
    borderRadius: "10px",
    border: "1px black solid"
  },
  divider: {
    backgroundColor: "grey"
  }
});

const Itemlist = props => {
  const classes = useStyles(props);
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <List disablePadding key={id}>
        <ListItem
          button
          onClick={() => {
            onItemSelected(id);
          }}
        >
          {label}
        </ListItem>
      </List>
    );
  });

  return <div className={classes.root}>{items}</div>;
};

export default Itemlist;
