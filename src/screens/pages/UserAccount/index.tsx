import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import InputCustom from "../../components/InputCustom";
import { makeStyles } from "@mui/styles";
import { shortenAddress } from "../../../services/User/userList";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import { getUserDetailsById } from "../../../services/User/updateUser";
import { userDataType } from "../../../services/types/UserType/index";

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
type SimpleTableProps<T> = {
  data: userDataType;
};
const UserAccount = <T,>(props: SimpleTableProps<T>): JSX.Element => {
  const classes = useStyles();
  const userLoginId = 1;
  const { isLoading, error, data } = useQuery<any, Error>({
    queryKey: ["getProfileDetails", userLoginId],
    queryFn: getUserDetailsById,
  });
  console.log(" isLoading, error, data =>", isLoading, error, data);
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
          حساب کاربری
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
          <Box
            sx={{
              boxShadow: 2,
              borderRadius: 2,
              py: 3,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item md={9} xs={12}>
                <InputCustom
                  label="شناسه کاربری"
                  placeholder="شناسه کاربری"
                  required
                  id="userName"
                  name="userName"
                  type="text"
                  defaultValue={data?.username}
                  readOnly
                  disabled={true}
                />
              </Grid>
              <Grid item md={9} xs={12}>
                <InputCustom
                  label="نام و نام خانوادگی"
                  placeholder="نام و نام خانوادگی"
                  required
                  id="fullName"
                  name="fullName"
                  type="text"
                  readOnly
                  disabled={true}
                  defaultValue={data?.name}
                />
              </Grid>
              <Grid item md={9} xs={12}>
                <InputCustom
                  label="ایمیل"
                  placeholder=""
                  required
                  type="email"
                  name="email"
                  id="email"
                  size="large"
                  defaultValue={data?.email}
                  readOnly
                  disabled={true}
                />
              </Grid>
              <Grid item md={9} xs={12}>
                <InputCustom
                  label="آدرس"
                  placeholder="لطفا آدرس خود را وارد کنید"
                  id="address"
                  name="address"
                  type="text"
                  defaultValue={shortenAddress(data.address)}
                  readOnly
                  disabled={true}
                />
              </Grid>
            </Grid>
            <Grid>
              {error && (
                <Alert severity="error">
                  {error?.message ? error?.message : "خطا در دریافت اطلاعات"}
                </Alert>
              )}
            </Grid>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
export default UserAccount;
