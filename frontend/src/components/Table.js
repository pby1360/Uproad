import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
// ];

// const rows = [
//   { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
//   { name: 'China', code: 'CN', population: 1403500365, size: 9596961 },
//   { name: 'Italy', code: 'IT', population: 60483973, size: 301340 },
//   { name: 'United States', code: 'US', population: 327167434, size: 9833520 },
//   { name: 'Canada', code: 'CA', population: 37602103, size: 9984670 },
//   { name: 'Australia', code: 'AU', population: 25475400, size: 7692024 },
//   { name: 'Germany', code: 'DE', population: 83019200, size: 357578 },
//   { name: 'Ireland', code: 'IE', population: 4857000, size: 70273 },
//   { name: 'Mexico', code: 'MX', population: 126577691, size: 1972550 },
//   { name: 'Japan', code: 'JP', population: 126317000, size: 377973 },
//   { name: 'France', code: 'FR', population: 67022000, size: 640679 },
//   { name: 'United Kingdom', code: 'GB', population: 67545757, size: 242495 },
//   { name: 'Russia', code: 'RU', population: 146793744, size: 17098246 },
//   { name: 'Nigeria', code: 'NG', population: 200962417, size: 923768 },
//   { name: 'Brazil', code: 'BR', population: 210147125, size: 8515767 },
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHtabeadTable(props) {
  console.log(props);
  const columns = props.columns;
  const rows = props.rows;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </Paper>
  );
}