// pages/EmiCalculator.jsx or App.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios"; 
import LoanInputForm from "./LoanInputForm";
import EmiScheduleTable from "./EmiScheduleTable";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100);
  const [interestRate, setInterestRate] = useState(1);
  const [termYears, setTermYears] = useState(5);
  const [currency, setCurrency] = useState("USD");
  const [conversionRate, setConversionRate] = useState(1);
  const [monthlyEMI, setMonthlyEMI] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [loadingRate, setLoadingRate] = useState(false);
  const [calculated, setCalculated] = useState(false);


  const CURRENCIES = ["USD", "EUR", "INR", "JPY","GBP","AUD", "CAD", "NZD", "SGD"];
  const API_KEY = "38913f153660e183d66abcd3";

  const fetchConversionRate = async (toCurrency) => {
    if (toCurrency === "USD") return setConversionRate(1);
    try {
      setLoadingRate(true);
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      const url = `http://v6.exchangerate-api.com/v6/${API_KEY}/history/USD/${year}/${month}/${day}`;
      const response = await axios.get(url);
      const rate = response.data?.conversion_rates?.[toCurrency];
      setConversionRate(rate || 1);
    } catch (error) {
      console.error("Currency API error:", error);
      setConversionRate(1);
    } finally {
      setLoadingRate(false);
    }
  };

  useEffect(() => {
    fetchConversionRate(currency);
  }, [currency]);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = termYears * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setMonthlyEMI((emi * conversionRate).toFixed(2));
    setCalculated(true);

    let balance = P;
    const amortization = [];

    for (let month = 1; month <= N; month++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;

      amortization.push({
        month,
        principal: (principal * conversionRate).toFixed(2),
        interest: (interest * conversionRate).toFixed(2),
        balance: (balance > 0 ? balance * conversionRate : 0).toFixed(2),
      });
    }

    setSchedule(amortization);
  };

  const reset = () => {
    setLoanAmount(100);
    setInterestRate(1);
    setTermYears(5);
    setCurrency("JPY");
    setMonthlyEMI(null);
    setCalculated(false);
    setSchedule([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "loanAmount") setLoanAmount(value);
    else if (name === "interestRate") setInterestRate(value);
    else if (name === "termYears") setTermYears(value);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <LoanInputForm
        loanAmount={loanAmount}
        interestRate={interestRate}
        termYears={termYears}
        currency={currency}
        currencies={CURRENCIES}
        loadingRate={loadingRate}
        onChange={handleInputChange}
        onCurrencyChange={(e) => setCurrency(e.target.value)}
        onCalculate={calculateEMI}
        onReset={reset}
        monthlyEMI={monthlyEMI}
        calculated={calculated}
      />

      <EmiScheduleTable
        schedule={schedule}
        currency={currency}
        monthlyEMI={monthlyEMI}
      />
    </Box>
  );
};

export default EmiCalculator;
