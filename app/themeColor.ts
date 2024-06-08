"use client"
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", // Aquí defines el color principal personalizado
      // Puedes agregar otras tonalidades si lo deseas
    },
    secondary: {
      main: "#0074E8",
    },
  },
});

export default theme;