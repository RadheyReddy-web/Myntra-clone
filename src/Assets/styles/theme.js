import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Cabin Condensed",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      light: "#c3dfd0",
      main: "#205642",
      dark: "#1b4837",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f3806b",
      main: "#bf2d1b",
      dark: "#d82f11",
      contrastText: "#fff",
    },
  },
  header: {
    borderBottom: "1px solid darkgray",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  page: {
    minHeight: "90vh",
  },
  alignItemCenter: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default theme;
