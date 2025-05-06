import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from '@mui/material';

const CurrencyExchangeTable = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '38913f153660e183d66abcd3'; 

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
        );
        const rates = response.data.conversion_rates;
        setExchangeRates(Object.entries(rates));
        setAllCurrencies(Object.keys(rates));
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4 }}>
        Currency Exchange Rates
      </Typography>

      <Box display="flex" justifyContent="center" my={3}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Select Base Currency</InputLabel>
          <Select
            value={baseCurrency}
            label="Select Base Currency"
            onChange={handleCurrencyChange}
          >
            {allCurrencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <Typography variant="h6" align="center">Loading...</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell>Exchange Rate (1 {baseCurrency})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exchangeRates.map(([currency, rate]) => (
                <TableRow key={currency}>
                  <TableCell>{currency}</TableCell>
                  <TableCell>{rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default CurrencyExchangeTable;
