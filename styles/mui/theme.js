import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme1 = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#efc177",
      light: "#efc177",
      dark: "#efc177",
      contrastText: "#fff",
    },
    secondary: {
      main: green[500],
      light: green[400],
      dark: green[600],
      contrastText: "#fff",
    },
  },
});

export const theme2 = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: green[300],
      light: green[300],
      dark: green[300],
      contrastText: "#fff",
    },
    secondary: {
      main: green[500],
      light: green[400],
      dark: green[600],
      contrastText: "#fff",
    },
  },
});
