import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginImage from "../../../assets/images/login-bg.jpg";
import InputCustom from "../../components/InputCustom";
import LableTextError from "../../components/LableTextError";
import { makeStyles } from "@mui/styles";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import { schemaLogin, loginApiCall } from "../../../services/User/login";
import { userContext } from "../../../App";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const useStyles = makeStyles({
  btn: {
    color: "#fff!important",
    backgroundColor: "#000!important",
    fontSize: "1rem!important",
    marginBottom: "0.6em!important",
    fontFamily: "iransans!important",
  },
  errorlable: {
    color: "red",
    display: "block",
    fontSize: "13px",
    marginBottom: " 20px",
    paddingRight: " 15px",
    fontFamily: "iransans!important",
  },
});
export default function SignInSide() {
  const classes = useStyles();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginApiCall,
    onSuccess: (data, variables, context) => {
      if (data?.success) {
        navigate("/dashboard");
      }
    },
  });
  const { state, dispatch } = useContext(userContext);
  console.log("state, dispatch =>", state, dispatch);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} md={8} component={Paper} elevation={2} square>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              xs={12}
              md={12}
              sx={{
                my: { xs: 0, md: 8 },
                mx: { xs: 0, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                sx={{
                  width: "100%",
                }}
                variant="h5"
              >
                شرکت ایرانیان پرداز جم
              </Typography>
              <Formik
                validationSchema={schemaLogin}
                initialValues={{ username: "mohammad", password: "yadzn" }}
                onSubmit={(values) => {
                  // valid code
                  // loginMutation.mutate(values);

                  // for test
                  if (
                    values.username === "mohammad" &&
                    values.password === "yadzn"
                  ) {
                    dispatch({
                      type: "LOGIN",
                      payload: {
                        name: "محمد یزدان پناه",
                        isuserloggedin: true,
                        namename: "09192018492",
                      },
                    });
                    navigate("/dashboard/index");
                  } else {
                    loginMutation.mutate(values);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xl={12}
                        md={12}
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <InputCustom
                          label="شناسه کاربری"
                          placeholder="شناسه کاربری"
                          required
                          id="username"
                          name="username"
                          type="text"
                          error={errors.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={values.username}
                        />
                        {errors.username && (
                          <LableTextError>
                            {errors.username &&
                              touched.username &&
                              errors.username}
                          </LableTextError>
                        )}
                      </Grid>
                      <Grid
                        item
                        xl={12}
                        md={12}
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <InputCustom
                          label="رمز عبور"
                          placeholder=""
                          required
                          type="password"
                          name="password"
                          id="password"
                          size="large"
                          error={errors.password}
                          onChange={handleChange}
                          value={values.password}
                        />
                        {errors.password && (
                          <LableTextError>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </LableTextError>
                        )}
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Button
                        type="submit"
                        variant="contained"
                        className={classes.btn}
                        sx={{
                          mt: 3,
                          mb: 4,
                          px: 10,
                          width: { xs: "100%", md: "80%" },
                        }}
                      >
                        ورود
                      </Button>
                    </Grid>
                    <Grid>
                      {loginMutation.isError && (
                        <Alert severity="error">
                          {loginMutation?.error?.message}
                        </Alert>
                      )}
                      {loginMutation.isSuccess && (
                        <Alert severity="success">
                          {loginMutation?.data?.message}
                        </Alert>
                      )}
                    </Grid>

                    <Grid
                      container
                      sx={{
                        my: 2,
                      }}
                    >
                      <Grid item alignItems="center">
                        <Typography variant="body2" alignItems="center">
                          ورود شما به سامانه به منزله قبول
                          <Link href="#" variant="body2">
                            {" قوانین و مقررارت "}
                          </Link>
                          سامانه است
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
