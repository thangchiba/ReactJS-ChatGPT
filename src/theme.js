import { createTheme } from "@mui/material/styles";
const ConfiguredTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    orange : {
      main:"#E8630A"
    },
    gold:{
      main:"#FFD700"
    }
  },
  shape: {
    borderRadius: 7,
  },
});

export default ConfiguredTheme;
