import React from "react";
import { Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import CustomizedTables from "../../components/CustomizedTables/index";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Alert from "@mui/material/Alert";
import {
  deleteUserById,
  getUserData,
  cleanData,
  columns,
} from "../../../services/User/userList";

const useStyles = makeStyles({
  title: {
    width: "100%",
    display: "block",
    fontSize: "1.6rem",
    fontWeight: "bold",
    color: "#000",
  },
  paragraphText: {
    color: "#000",
    display: "block",
    fontSize: "15px",
    margin: "10px 0",
    width: "100%",
  },
  btn: {
    color: "#fff!important",
    backgroundColor: "#000!important",
    fontSize: "1rem!important",
    marginBottom: "0.6em!important",
    fontFamily: "iransans!important",
  },
});

export default function UserList() {
  const classes = useStyles();
  const { invalidateQueries } = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["getAllUserList"],
    queryFn: getUserData,
  });
  const userDelteHandler = useMutation({
    mutationFn: deleteUserById,
    onSuccess: (data, variables, context) => {
      invalidateQueries({ queryKey: ["getAllUserList"] });
    },
  });

  return (
    <Grid
      dir="rtl"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      component="main"
      sx={{ p: 1, pb: 20 }}
    >
      <Grid item xl={12} md={12} xs={12}>
        <Typography className={classes.title} sx={{ mb: 2 }}>
          مدیریت کارمندان
        </Typography>
      </Grid>
      {isLoading && (
        <Grid
          dir="rtl"
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          component="div"
          sx={{ p: 5, pb: 5 }}
        >
          <CircularProgress />
        </Grid>
      )}
      {data && (
        <Grid item xl={12} md={12} xs={12}>
          <CustomizedTables
            rows={cleanData(data)}
            columns={columns}
            deleteUser={userDelteHandler}
          />
        </Grid>
      )}
      {error && (
        <Alert severity="error">
          {error?.message ? error?.message : "خطا در دریافت اطلاعات"}
        </Alert>
      )}
    </Grid>
  );
}
