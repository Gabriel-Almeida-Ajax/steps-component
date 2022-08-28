import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#209bff",
    secondary: "#57dbff",
    background: "#f5f5f5",
    gradient: "linear-gradient(to bottom right,  #209bff,#57dbff)",
    invertGradient: "linear-gradient(to bottom right,  #57dbff,#209bff)",
    contrast: "#fff",
    paper: "#fff",
    primaryText: "#262626",
    secondaryText: "#787878",
  }
};
export const Theme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
