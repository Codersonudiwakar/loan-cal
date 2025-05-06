// components/EmiScheduleTable.jsx
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const EmiScheduleTable = ({ schedule, currency, monthlyEMI }) => {
  if (!schedule.length) return null;

  return (
    <>
  <Box mt={3} textAlign="left">
  <Typography variant="h6">
    Amortization Schedule : ({currency})
  </Typography>
</Box>


      <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 400 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow >
              <TableCell>Month</TableCell>
              <TableCell align="right">Principal</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {schedule.map((row) => (
    <TableRow key={row.month}>
      <TableCell sx={{ p: 2 }}>{row.month}</TableCell>
      <TableCell sx={{ p: 2 }} align="right">{`${row.principal} ${currency}`}</TableCell>
<TableCell sx={{ p: 2 }} align="right">{`${row.interest} ${currency}`}</TableCell>
<TableCell sx={{ p: 2 }} align="right">{`${row.balance} ${currency}`}</TableCell>

    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default EmiScheduleTable;
