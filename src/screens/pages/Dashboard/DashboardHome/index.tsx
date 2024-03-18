import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import dashboardImage from "../../../../assets/images/dashboard.svg";
import Typography from "@mui/material/Typography";
interface DashboardHomeProps {
  children?: React.ReactNode;
}
const DashboardHome: React.FC<DashboardHomeProps> = ({ children }) => {
  return (
    <Box component="section" sx={{ p: 3 }}>
      <Typography
        component="h1"
        sx={{
          width: "100%",
          mb: 3,
        }}
        variant="h5"
      >
        داشبورد تستی
      </Typography>
      <img
        className="img-fluid"
        width="100%"
        src={`${dashboardImage}`}
        loading="lazy"
        alt=""
      />
    </Box>
  );
};
export default DashboardHome;
