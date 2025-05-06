import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Box
} from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        About This App
      </Typography>
      <Typography variant="h6" gutterBottom>
        This Loan Calculator App is a modern, single-page web application built using <strong>React JS</strong> and <strong>Material UI</strong>. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>

      <Typography variant="h4" gutterBottom mt={4}>
        📋 Instructions for Candidates
      </Typography>
      <List>
        {[...Array(12).keys()].map(index => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${["Push the entire project to a public GitHub repository.","Commit regularly with clear messages after completing each feature.","Use the provided EMI formula for calculations.","Use Context API for global state management (e.g. theme, currency).","Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).","Integrate the ExchangeRate API for live currency conversion.","Ensure the app is fully responsive on all screen sizes.","Implement both light and dark modes using Material UI's theming system.","Add a 404 Not Found page for unmatched routes.","Handle runtime errors gracefully by showing an Error Page.","Add the live deployment link in the About section of your GitHub repo.","Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages)."][index]}`} />
          </ListItem>
        ))}
      </List>
      <Typography color="success.main" variant="h6" mt={2}>
        ✅ Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
      </Typography>

      <Typography variant="h4" gutterBottom mt={4}>
        ✨ Features
      </Typography>
      <List>
        {["Loan EMI calculation using standard financial formulas","Dynamic amortization schedule table with monthly breakdown","Real-time currency conversion of EMI using a live exchange rate API","Paginated exchange rate table for 160+ currencies","Dark/Light mode toggle for a customizable experience","Collapsible header navigation on mobile screens","Fully responsive UI built with Material UI"].map((feature, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${feature}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom mt={4}>
        🛠️ Technologies Used
      </Typography>
      <List>
        {["React (Hooks, Routing, Context API)","Material UI for styling and responsive components","Axios for API calls","Exchange Rate API for real-time currency conversion"].map((tech, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${tech}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom mt={4}>
        📈 EMI Formula Used
      </Typography>
      <Typography variant="h6" gutterBottom>
        The EMI (Equated Monthly Installment) is calculated using the standard formula:
      </Typography>
      <Box component="pre" sx={{  p: 2, borderRadius: 1, overflowX: 'auto', fontSize: '1.2rem' }}>
        EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
      </Box>
      <Typography variant="h6" gutterBottom mt={2}>
        Where:
      </Typography>
      <List>
        {["P = Principal loan amount","R = Monthly interest rate (annual rate / 12 / 100)","N = Loan duration in months"].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom mt={4}>
        🌐 Currency Conversion API
      </Typography>
      <Typography variant="h6" gutterBottom>
        This app integrates with the free tier of the{' '}
        <Link href="https://www.exchangerate-api.com" target="_blank" rel="noopener">
          ExchangeRate-API
        </Link>{' '}to fetch live exchange rates.
      </Typography>
      <Typography sx={{ mt: 2 }} variant="body1">
        <strong>API Endpoint Example:</strong>
      </Typography>
      <Box component="code" sx={{ display: 'block', p: 1.5, borderRadius: 1, mt: 1, fontSize: '1.1rem' }}>
        https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
      </Box>
      <Typography variant="body2" color="text.secondary" mt={1}>
        * Replace YOUR_API_KEY with your actual key after registering.
      </Typography>

      <Typography variant="h4" gutterBottom mt={4}>
        🎯 Purpose of This App
      </Typography>
      <Typography variant="h6" gutterBottom>
        This project is designed to assess a candidate's React development skills, including:
      </Typography>
      <List>
        {["React fundamentals (state, props, hooks)","Component structure and code reusability","Third-party API integration and live data rendering","Working with tables, lists, and pagination","Theme customization (dark/light mode toggle)","Error handling and graceful UI fallbacks","Responsive design and collapsible mobile header navigation"].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>
      <Typography color="warning.main" variant="h6" mt={2}>
        ⚠️ For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
      </Typography>
    </Container>
  );
}
