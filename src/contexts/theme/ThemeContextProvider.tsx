import React from "react";
import { NoSsr } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./palette";

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeContextProivder: React.FC<ThemeProps> = ({ children }) => {
  return (
    <NoSsr>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
};

export default ThemeContextProivder;
