import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import DashboardLayout from "./Layout";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import routes from "../../routes";
import { routeTypes } from "../../../services/types/index";
import Footer from "../../components/Footer/index";
import { userContext } from "../../../App";

export default function Dashboard() {
  const { state, dispatch } = useContext(userContext);
  const renderRoutes = (allRoutes: routeTypes[]) =>
    allRoutes.map((route: routeTypes) => {
      if (route.route) {
        return (
          <Route path={route.route} element={route.component} key={route.key} />
        );
      }
      return null;
    });
  console.log("state =>", state);

  if (state.isuserloggedin) {
    return (
      <Container
        disableGutters
        maxWidth={false}
        style={{ background: "#f3f3f3" }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item md={4} xs={12} sm={12}>
            <Sidebar />
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            <DashboardLayout>
              <Routes>{renderRoutes(routes)}</Routes>
            </DashboardLayout>
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <Navigate to="/" replace />;
  }
}
