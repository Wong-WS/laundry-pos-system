import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function OrderSummary({ formData }) {
  const orderTable = (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Phone number</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">KG</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            {formData?.name || "N/A"}
          </TableCell>
          <TableCell align="right">{formData?.phone || "N/A"}</TableCell>
          <TableCell align="right">{formData?.quantity || "N/A"}</TableCell>
          <TableCell align="right">{formData?.kg || "N/A"}</TableCell>
          <TableCell align="right">{formData?.price ? `$${formData.price}` : "N/A"}</TableCell>
          <TableCell align="right">{formData?.type || "N/A"}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  return (
    <Box sx={{ minWidth: 600, minHeight: 500 }}>
      <Card sx={{ width: "100%", height: "100%" }} variant="outlined">
        <CardContent>
          <Typography
            sx={{ fontSize: 35, textDecoration: "underline" }}
            align="center"
            variant="h4"
          >
            Order Summary
          </Typography>
          <TableContainer component={Paper}>{orderTable}</TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default OrderSummary;
