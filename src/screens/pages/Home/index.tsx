import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homebg from "../../../assets/images/home-bg.jpg";
import logo from "../../../assets/images/logo-jam.png";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const useStyles = makeStyles({
  btn: {
    color: "#fff!important",
    backgroundColor: "#000!important",
    fontSize: "1rem!important",
    marginBottom: "0.6em!important",
    fontFamily: "iransans!important",
    display: "flex",
    flexFlow: "row-reverse",
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
interface HomeProps {
  as?: string;
  children?: ReactChildren | React.ReactNode | string;
}
const Home = ({ as = "p", children }: HomeProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          sx={{
            backgroundImage: `url(${homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          component={Paper}
          // elevation={2}
          square
        >
          <Grid
            item
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
            <Box
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
              <Grid>
                <img src={logo} alt="" />
              </Grid>
              <Typography
                component="h1"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  mb: 2,
                }}
                variant="h5"
              >
                شرکت ایرانیان پرداز جم
              </Typography>
              <Typography
                component="p"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                شرکت ایرانیان پرداز جم از به روزترین و پیشرفته ترین ابزارهای
                موجود در حوزه طراحی و تولید نرم افزار بهره گرفته است و با تخصص و
                دانش مهندسان خود آماده ارائه نرم افزارهای کاربردی و خاص منظوره
                به شرکت ها و سازمان های متقاضی می باشد.
              </Typography>
              <Button
                href="/login"
                className={classes.btn}
                variant="outlined"
                startIcon={<ArrowBackIcon />}
              >
                وورد به سایت
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Home;
