import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  CssBaseline,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import imgNotFound from "../../resources/imgNotFound.jpeg";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Lobster', cursive",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#ff8a80",
          "&:hover": {
            backgroundColor: "#ff5a52",
          },
        },
      },
    },
  },
});

const NotFound = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        style={{
          textAlign: "center",
          padding: "20px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          maxWidth: "80%",
        }}
      >
        <Typography variant="h2">404 - Not Found 🤖</Typography>
        <Typography
          style={{
            color: darkTheme.palette.text.primary,
            fontSize: "18px",
            margin: "10px 0",
          }}
        >
          Oops! Looks like the page you're trying to access does not exist.
        </Typography>
        <img
          src={imgNotFound}
          alt="404 Not Found"
          style={{
            maxWidth: "30%",
            height: "auto",
            margin: "20px 0",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Link to="/">
          <Button variant="contained" color="primary" size="large">
            Back to Home
          </Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default NotFound;
