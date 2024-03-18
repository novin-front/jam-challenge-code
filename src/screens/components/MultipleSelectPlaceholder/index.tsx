import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import { makeStyles } from "@mui/styles";
import { MultipleSelectPlaceholderProps } from "../../../services/types/index";

const ITEM_HEIGHT = 28;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // height: "50px",
      width: "100%,",
    },
  },
};

export default function MultipleSelectPlaceholder(
  props: MultipleSelectPlaceholderProps
) {
  const names = props?.items || [];

  function getStyles(
    name: string,
    personName: readonly string[],
    theme: Theme
  ) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  return (
    <div>
      <FormControl sx={{ width: 400, mt: 3 }}>
        <InputLabel
          sx={{
            display: "block",
            width: "100%",
            transformOrigin: "top left",
            right: "-80px",
            top: "-17px",
          }}
          shrink
          htmlFor="bootstrap-input"
        >
          {props?.label}
        </InputLabel>
        <Select
          displayEmpty
          value={personName}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          {...props}
        >
          <MenuItem disabled value="">
            <em>انتخاب {props?.label}</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name.label}
              value={name.value}
              style={getStyles(name.label, personName, theme)}
            >
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
