import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
  },
  "& .MuiInputBase-input": {
    width: "100%",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    padding: "10px 12px",
    transformOrigin: "top right",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  "&.Mui-error .MuiInputBase-input": {
    border: "1px solid",
    borderColor: "red",
  },
}));
export default function InputCustom(props) {
  return (
    <FormControl
      sx={{
        width: "100%",
        my: 2,
      }}
    >
      <InputLabel
        sx={{
          display: "block",
          width: "100%",
          transformOrigin: "top right",
          right: "20px",
        }}
        shrink
        htmlFor="bootstrap-input"
      >
        {props?.label} {props?.required ? " * " : ""}
      </InputLabel>
      <BootstrapInput
        defaultValue={props?.value}
        id={props?.id}
        {...props}
        sx={{
          width: "100%",
          "& fieldset": { border: "none" },
        }}
      />
    </FormControl>
  );
}
