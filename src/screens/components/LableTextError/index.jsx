import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  errorlable: {
    color: "red",
    display: "block",
    fontSize: "13px",
    fontFamily: "iransans!important",
    margin: "10px 0",
    width: "100%",
  },
});
export default function LableTextError({ children }) {
  const classes = useStyles();
  return <div className={classes.errorlable}>{children}</div>;
}
