import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Div from "./mui/Div";
import Header from "./mui/Header";

const useStyle = makeStyles({
  x: {
    height: "100px",
    backgroundColor: "lightBlue",
  },
});

function App() {
  const classes = useStyle();
  console.log(classes, classes.x);
  return (
    <>
      <CssBaseline />
      <Header />
      <div className={classes.x}>hello</div>
      <Div />
    </>
  );
}

export default App;
