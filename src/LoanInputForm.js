// components/LoanInputForm.jsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  CircularProgress,
  Typography,
} from "@mui/material";

const LoanInputForm = ({
  loanAmount,
  interestRate,
  termYears,
  currency,
  currencies,
  loadingRate,
  onChange,
  onCurrencyChange,
  onCalculate,
  onReset,
  monthlyEMI,
  calculated
}) => {
  return (
    <Box>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Loan Amount"
          type="number"
          name="loanAmount"
          value={loanAmount}
          onChange={onChange}
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={onChange}
        />
        <TextField
          label="Term (Years)"
          type="number"
          name="termYears"
          value={termYears}
          onChange={onChange}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" onClick={onCalculate}>
          Calculate
        </Button>

        <Button onClick={onReset} color="secondary" variant="outlined" size="large">
          Reset Table
        </Button>
      </Box>

      {calculated && (
        <Box>
          <Box display="flex" gap={2} alignItems="center" mt={5}>
            <Typography variant="h6" mt={0}>
              Monthly EMI: ${monthlyEMI}
            </Typography>
          </Box>
          <Box display="flex" gap={2} alignItems="center" mt={3}>
            <TextField
              select
              label="Currency"
              value={currency}
              onChange={onCurrencyChange}
              sx={{ width: 120 }}
            >
              {currencies.map((cur) => (
                <MenuItem key={cur} value={cur}>
                  {cur}
                </MenuItem>
              ))}
            </TextField>
            {loadingRate && <CircularProgress size={20} />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LoanInputForm;
