import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import InputCustom from "../../components/InputCustom";
import LableTextError from "../../components/LableTextError";
import { makeStyles } from "@mui/styles";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import MultipleSelectPlaceholder from "../../components/MultipleSelectPlaceholder";
import { initInputValues } from "../../../services/types/UserType/index";
import {
  createApiCall,
  schemaCreateUser,
} from "../../../services/User/createUser";

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
export default function CreateUser() {
  const classes = useStyles();
  const navigate = useNavigate();
  const initInputValues: initInputValues = {
    userName: "",
    password: "",
    fullName: "",
    address: "",
    email: "",
    gender: "",
  };
  const createUserMutation = useMutation({
    mutationFn: createApiCall,
    onSuccess: (data, variables, context) => {
      if (data?.success) {
        navigate("/dashboard/");
      }
    },
  });
  return (
    <Grid dir="rtl" container component="main" sx={{ p: 1, pb: 20 }}>
      <Grid item xl={12} md={12} xs={12}>
        <Typography className={classes.title} sx={{ mb: 2 }}>
          ایجاد حساب کاربری
        </Typography>
      </Grid>
      <Grid item xl={12} md={12} xs={12}>
        <Formik
          validationSchema={schemaCreateUser}
          initialValues={initInputValues}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
            createUserMutation.mutate(values);
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
              <Grid container spacing={3}>
                <Grid
                  item
                  xl={6}
                  md={6}
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
                    id="userName"
                    name="userName"
                    type="text"
                    error={errors.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.userName}
                  />
                  {errors.userName && (
                    <LableTextError>
                      {errors.userName && touched.userName && errors.userName}
                    </LableTextError>
                  )}
                </Grid>
                <Grid
                  item
                  xl={6}
                  md={6}
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
                      {errors.password && touched.password && errors.password}
                    </LableTextError>
                  )}
                </Grid>
                <Grid
                  item
                  xl={6}
                  md={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <InputCustom
                    label="نام و نام خانوادگی"
                    placeholder="نام و نام خانوادگی"
                    required
                    id="fullName"
                    name="fullName"
                    type="text"
                    error={errors.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.fullName}
                  />
                  {errors.fullName && (
                    <LableTextError>
                      {errors.fullName && touched.fullName && errors.fullName}
                    </LableTextError>
                  )}
                </Grid>
                <Grid
                  item
                  xl={6}
                  md={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <InputCustom
                    label="ایمیل"
                    placeholder=""
                    required
                    type="email"
                    name="email"
                    id="email"
                    size="large"
                    error={errors.email}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && (
                    <LableTextError>
                      {errors.email && touched.email && errors.email}
                    </LableTextError>
                  )}
                </Grid>
                <Grid
                  item
                  xl={6}
                  md={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <InputCustom
                    label="آدرس"
                    placeholder="لطفا آدرس خود را وارد کنید"
                    id="address"
                    name="address"
                    type="text"
                    error={errors.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.address}
                  />
                  {errors.address && (
                    <LableTextError>
                      {errors.address && touched.address && errors.address}
                    </LableTextError>
                  )}
                </Grid>
                <Grid
                  item
                  xl={6}
                  md={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MultipleSelectPlaceholder
                    label="جنسیت"
                    placeholder=""
                    required
                    items={[
                      { value: "male", label: "مرد" },
                      { value: "female", label: "زن" },
                    ]}
                    name="gender"
                    id="gender"
                    size="large"
                    error={errors.gender}
                    onChange={handleChange}
                    value={values.gender}
                  />
                  {errors.gender && (
                    <LableTextError>
                      {errors.gender && touched.gender && errors.gender}
                    </LableTextError>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.btn}
                  sx={{ mt: 3, mb: 4, px: 5 }}
                >
                  ثبت کاربر
                </Button>
              </Grid>
              <Grid>
                {createUserMutation.isError && (
                  <Alert severity="error">
                    {createUserMutation?.error?.message}
                  </Alert>
                )}
                {createUserMutation.isSuccess && (
                  <Alert severity="success">
                    {createUserMutation?.data?.message}
                  </Alert>
                )}
              </Grid>
            </Box>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
