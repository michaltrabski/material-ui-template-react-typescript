import { withStyles } from "@material-ui/core";
import React from "react";

const style = {
  y: {
    height: "100px",
    backgroundColor: "lightRed",
  },
};

interface Props {
  classes: {
    y: Object;
  };
}

const Div = (props: Props) => {
  const classes = { props };
  console.log(classes);
  return <div className="">DIV</div>;
};

export default withStyles(style)(Div);
