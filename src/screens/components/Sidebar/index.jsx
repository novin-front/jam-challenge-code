import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import routes from "../../routes";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useMutation } from "@tanstack/react-query";
import { logoutSite } from "../../../services/User/login";
import { userContext } from "../../../App";
const useStyles = makeStyles({
  link: {
    display: "flex",
    textDecoration: "none",
    width: "100%",
  },
  item: {
    display: "flex",
    color: "#000",
    "& span, & svg": {
      fontSize: ".95rem",
      textAlgin: "left",
    },
  },
  icon: {
    minWidth: "40px",
  },
});

export default function SquareCorners() {
  const classes = useStyles();
  let navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);
  const userLogoutHandler = useMutation({
    mutationFn: logoutSite,
    onSuccess: (data, variables, context) => {
      dispatch({
        type: "LOGOUT",
        payload: {
          name: "",
          isuserloggedin: false,
          namename: "",
        },
      });
      return navigate("/");
    },
  });
  return (
    <Box component="section" sx={{ p: 3 }}>
      <Paper square={false} style={{ padding: "1em" }}>
        <List>
          {routes.map((route: routeTypes, index) => {
            if (route.showToMenu) {
              return (
                <ListItem key={route.key} disablePadding>
                  <Link
                    className={classes.link}
                    to={"/dashboard" + route.route}
                  >
                    <ListItemButton sx={{ minWidth: "40px" }}>
                      <ListItemIcon className={classes.icon}>
                        {route.icon}
                      </ListItemIcon>
                      <ListItemText
                        className={classes.item}
                        primary={route.name}
                        style={{ textAlgin: "right" }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            } else {
              return <></>;
            }
          })}
        </List>
        <Divider />
        <List>
          <Toolbar />
          <Toolbar />
          <ListItem key="logout" disablePadding>
            <ListItemButton
              onClick={() => {
                console.log("onClick =>");
                userLogoutHandler.mutate();
              }}
            >
              <ListItemIcon className={classes.icon}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.item}
                primary={"خروج از حساب کاربری"}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
