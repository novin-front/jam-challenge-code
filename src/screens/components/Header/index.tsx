import React, { useContext } from "react";
import { redirect } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

export default function Header() {
  // const [open, setOpen] = React.useState(true);
  // const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  const { state, dispatch } = useContext(userContext);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: "0" }}>
      <AppBar position="static" elevation={0} style={{ background: "#fff" }}>
        <Container maxWidth={false}>
          <Toolbar>
            <Link to={`/dashboard/me`}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                style={{ color: "#000" }}
              >
                <PersonOutlineIcon />
              </IconButton>
            </Link>

            <Typography
              variant="h6"
              style={{ color: "#000" }}
              component="div"
              sx={{
                flexGrow: 1,
                pr: 1,
                display: { xs: "none", md: "block" },
              }}
            >
              {state.name}
            </Typography>
            <Typography
              align="left"
              variant="h6"
              style={{ color: "#000" }}
              component="div"
              sx={{ flexGrow: 1, pl: 1 }}
            >
              ایرانیان پرداز جم
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              style={{ color: "#000" }}
              // onClick={handleDrawerOpen}
              // sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Button color="inherit">ایرانیان پرداز جم</Button> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
