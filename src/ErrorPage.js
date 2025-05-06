import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      sx={{ backgroundColor: 'background.default', color: 'text.primary' }}
    >
      <Typography variant="h5" gutterBottom>
        Something went wrong in the application.
      </Typography>
      <Button variant="outlined" onClick={() => navigate('/')}>
        GO HOME
      </Button>
    </Box>
  );
};

export default ErrorPage;
