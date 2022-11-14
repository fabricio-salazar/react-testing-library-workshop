import React, { ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  CssBaseline
} from "@mui/material";

const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.primary.main,
          height: "100%"
        },
        html: {
          height: "100%"
        }
      })
    }
  },
  palette: {
    primary: {
      main: "#222831",
      light: "#393E46"
    },
    secondary: {
      main: "#EEEEEE",
      contrastText: "#D65A31"
    }
  },
  typography: (theme) => ({
    h1: {
      color: theme.secondary.contrastText,
      fontSize: "2.125rem",
      fontWeight: 400,
      marginBottom: "2.5rem"
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      marginBottom: "1rem"
    }
  })
};

const theme = createTheme(themeOptions);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
