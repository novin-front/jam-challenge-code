import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
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
});
export default function About() {
  const classes = useStyles();
  return (
    <Grid dir="rtl" container component="main" sx={{ p: 1 }}>
      <Grid item xl={12} md={12} xs={12}>
        <Typography className={classes.title} sx={{ mb: 2 }}>
          درباره ما
        </Typography>
        <Typography className={classes.paragraphText} paragraph>
          شرکت ایرانیان پرداز جم از به روزترین و پیشرفته ترین ابزارهای موجود در
          حوزه طراحی و تولید نرم افزار بهره گرفته است و با تخصص و دانش مهندسان
          خود آماده ارائه نرم افزارهای کاربردی و خاص منظوره به شرکت ها و سازمان
          های متقاضی می باشد.
        </Typography>
      </Grid>
    </Grid>
  );
}
