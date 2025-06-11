"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blue, green, grey, red } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: grey[100], // Text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[100],
            borderWidth: "2px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[100],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: blue[100],
          },
          "& .MuiOutlinedInput-input": {
            color: grey[100], // Input text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: grey[400], // Label color
          "&.Mui-focused": {
            color: blue[100], // Focused label color
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#242424",
          margin: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: {
      main: grey[400],
    },
    info: {
      main: grey[900],
    },
  },
});

export default theme;
