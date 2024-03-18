// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Images
import NotFoundImage from "../../../assets/images/NotFound.svg";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  gotoHome: {
    color: "#000",
    display: "block",
    fontSize: "18px",
    fontFamily: "iransans!important",
    margin: "10px 0",
    width: "100%",
  },
  linkGotoHome: {
    textDecoration: "none",
    color: "#6c63ff",
    fontWeight: "bold",
    fontSize: "18px",
  },
});
function NotFound() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
      mt={5}
      mb={3}
    >
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={6} md={6} xl={6}>
          <img
            className="img-fluid"
            width="100%"
            src={`${NotFoundImage}`}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6} md={6} xl={6}>
          <Typography
            variant="button"
            color="text"
            fontWeight="regular"
            className={classes.gotoHome}
          >
            ورود شما به سامانه به منزله قبول
            <Typography
              component={Link}
              to="/dashboard"
              variant="button"
              color="info"
              fontWeight="medium"
              className={classes.linkGotoHome}
            >
              {" بازگشت به صفحه اصلی "}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NotFound;
