import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
export default function DashboardLayout({ children }) {
  return (
    <Box component="section" sx={{ p: 3 }}>
      <Paper square={false} style={{ padding: "1em" }}>
        {children}
      </Paper>
    </Box>
  );
}
