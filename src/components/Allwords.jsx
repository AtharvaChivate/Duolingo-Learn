import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import Blob from './Blob'

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
];

function createData(name, code) {
  return { name, code };
}

const rows = [
  createData("hello", "Hallo"),
  createData("world", "Welt"),
  createData("cat", "Katze"),
  createData("dog", "Hund"),
  createData("house", "Haus"),
  createData("friend", "Freund"),
  createData("family", "Familie"),
  createData("thankyou", "Danke"),
  createData("goodbye", "Auf Wiedersehen"),
  createData("he", "Er"),
  createData("she", "Sie"),
  createData("it", "Es"),
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "80vh" }}
      >
        <Paper
          sx={{
            width: "80%",
            overflow: "hidden"
          }}
        >
          <TableContainer
            sx={{
              maxHeight: 440,
              overflow: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold", // Set the font weight to bold
                        background: "#f4f4f4", // Set a background color
                        color: "#333", // Set the text color
                        padding: "8px", // Adjust padding
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              sx={{ textAlign: "center" }}
                            >
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Blob/>
      </Grid>
    </>
  );
}
