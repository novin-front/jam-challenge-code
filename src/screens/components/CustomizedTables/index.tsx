import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { customizedTablesPropType } from "../../../services/types/UserType/index";
import {
  TableDataType,
  ColumnType,
} from "../../../services/types/UserType/index";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d2cfcf",
    color: "#000",
    textAlign: "center",
  },
  [`&.MuiTableRow-root.MuiTableRow-head`]: {
    backgroundColor: "#d2cfcf",
    color: "#000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #000",
    padding: "0",
    textAlign: "center",
  },
}));
const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  [`.&MuiToolbar-root`]: {
    backgroundColor: "#d2cfcf !important", // gets overridden if not important
    height: "55px",
  },
  ["&.MuiInputBase-root"]: {
    display: "none",
  },
  ".MuiTablePagination-toolbar": {
    backgroundColor: "#d2cfcf",
    color: "#000",
    height: "50px",
  },
  ".MuiTablePagination-selectLabel": {
    display: "none",
  },
  ".MuiTablePagination-displayedRows": {
    display: "none",
  },
  ".MuiInputBase-colorPrimary": {
    display: "none",
  },
  ".MuiTablePagination-actions": {
    direction: "ltr",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function CustomizedTables(props: customizedTablesPropType) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log("porps =>", props);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {props.columns.map((column: ColumnType) => (
                <StyledTableCell
                  key={column.id}
                  // align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row: TableDataType) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.fullName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.userName}</StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/dashboard/user/edit/${row.id}`}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      style={{ color: "#221ec6" }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => {
                      props.deleteUser.mutate(row.id);
                    }}
                    sx={{ mr: 2 }}
                    style={{ color: "#ff1515" }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledTablePagination
        rowsPerPageOptions={[10, 25, 100]}
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
