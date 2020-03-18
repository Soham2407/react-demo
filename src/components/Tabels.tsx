import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(
  name: string,
  matches: number,
  runs: number,
  fifties: number,
  hundread: number,
  hs: number
) {
  return { name, matches, runs, fifties, hundread, hs };
}

const rows = [
  createData("Virat Kohli", 86, 7240, 22, 27, 254),
  createData("Steaven Smith", 73, 7227, 29, 26, 239),
  createData("Kane Williamson", 80, 6476, 32, 21, 242),
  createData("Joe Root", 92, 7599, 48, 17, 254)
];

const rows1 = [
  createData("Virat Kohli", 248, 11867, 58, 43, 183),
  createData("Steaven Smith", 123, 4128, 25, 9, 164),
  createData("Kane Williamson", 150, 6155, 39, 15, 38),
  createData("Joe Root", 35, 5922, 33, 16, 153)
];

const rows2 = [
  createData("Virat Kohli", 81, 2794, 24, 0, 94),
  createData("Steaven Smith", 39, 681, 4, 0, 90),
  createData("Kane Williamson", 60, 1665, 11, 0, 95),
  createData("Joe Root", 32, 893, 5, 0, 90)
];
const Tabels = () => {
  return (
    <Container maxWidth="md">
      <Typography component="div">
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontFamily="Oleo Script"
          fontSize="h2.fontSize"
          letterSpacing={3}
          color="#4d4d4d"
        >
          Career Summery
        </Box>
      </Typography>

      <Typography component="div">
        <Box
          style={{ fontSize: "20px" }}
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontStyle="oblique"
          fontFamily="serif"
          letterSpacing={3}
        >
          Test, ODI, T20
        </Box>
      </Typography>

      <Typography component="div">
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontFamily="Oleo Script"
          fontSize="h2.fontSize"
          letterSpacing={3}
          color="#4d4d4d"
        >
          Tests
        </Box>
      </Typography>

      <Table
        style={{
          minWidth: 600
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow style={{ backgroundColor: "#b3b3b3" }}>
            <TableCell style={{ fontSize: 18 }}>Names</TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              Matches
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              Runs&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              50&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              100&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              HS&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell style={{ fontSize: 15 }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.matches}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.runs}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.fifties}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.hundread}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.hs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography component="div">
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontFamily="Oleo Script"
          fontSize="h2.fontSize"
          letterSpacing={3}
          color="#4d4d4d"
        >
          One Days
        </Box>
      </Typography>

      <Table style={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#b3b3b3" }}>
            <TableCell style={{ fontSize: 18 }}>Names</TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              Matches
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              Runs&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              50&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              100&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              HS&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map(row => (
            <TableRow key={row.name}>
              <TableCell style={{ fontSize: 15 }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.matches}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.runs}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.fifties}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.hundread}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.hs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography component="div">
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontFamily="Oleo Script"
          fontSize="h2.fontSize"
          letterSpacing={3}
          color="#4d4d4d"
        >
          T20
        </Box>
      </Typography>

      <Table style={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#b3b3b3" }}>
            <TableCell style={{ fontSize: 18 }}>Names</TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              Matches
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              Runs&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              50&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              100&nbsp;
            </TableCell>
            <TableCell style={{ fontSize: 18 }} align="right">
              HS&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map(row => (
            <TableRow key={row.name}>
              <TableCell style={{ fontSize: 15 }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.matches}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.runs}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.fifties}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.hundread}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.hs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Tabels;
