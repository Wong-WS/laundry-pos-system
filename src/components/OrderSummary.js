import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function dummyData(name, phone, quantity, kg, price) {
  return { name, phone, quantity, kg, price};
}

const orderDetails = [
  dummyData("Wong", "0164992118", 1, 1, "$5.00"),
];

const orderTable = (
  <>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Phone number</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">KG</TableCell>
          <TableCell align="right">Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderDetails.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
            <TableCell align="right">{row.kg}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)

const card = (
  <>
    <CardContent>
      <Typography sx={{fontSize: 35, textDecoration: 'underline'}} align="center" variant="h4" >Order Summary</Typography>
      <TableContainer component={Paper}>{orderTable}</TableContainer>
    </CardContent>
  </>
)


function OrderSummary() {
  return (
    <Box sx={{minWidth: 600, minHeight: 500}}>
      <Card sx={{width: "100%", height: "100%"}} variant="outlined">{card}</Card>
    </Box>
  )
}

export default OrderSummary;