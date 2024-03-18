import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import logo from "../../../assets/images/logo-jam.png";
const useStyles = makeStyles({
  link: {
    display: "flex",
    textDecoration: "none",
    width: "100%",
    fontSize: ".9rem",
    color: "#000",
    marginBottom: ".6em",
  },
  icon: {
    minWidth: "40px",
  },
});

export const Footer: FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="row" alignItems="center">
          <Grid item md={4} xs={12} sm={12}>
            <Grid container alignItems="center">
              <Grid item md={6} xs={6} sm={6}>
                <Typography
                  sx={{ mb: 2, fontSize: ".9rem", color: "#c5c5c5" }}
                  className={classes.boxTitle}
                >
                  پشتیبانی
                </Typography>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Link to="" className={classes.link}>
                        تماس با ما
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link to="" className={classes.link}>
                        سوالات متدوال
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link to="" className={classes.link}>
                        دبیر خانه
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={6} xs={6} sm={6}>
                <Typography
                  sx={{ mb: 2, fontSize: ".9rem", color: "#c5c5c5" }}
                  className={classes.boxTitle}
                >
                  شبکه های اجتماعی
                </Typography>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Link to="" className={classes.link}>
                        اپارات
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link to="" className={classes.link}>
                        تلگرام
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link to="" className={classes.link}>
                        اینستاگرام
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} sm={12}></Grid>
          <Grid item md={2} xs={12} sm={12}>
            <img src={logo} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
