import React from "react";
import { ThemeProvider } from "@mui/material/styles";

// ==== IMPORT STYLES ====
import "../styles/globals.css";
import { theme1, theme2 } from "../styles/mui/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme1}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
