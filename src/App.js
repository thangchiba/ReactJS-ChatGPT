import { ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Page/Home";
import ConfiguredTheme from "./theme";
import ChatGPT from "./Page/ChatGPT";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/chatgpt" />}></Route>
          <Route path="/home/*" element={<Home />} />
          <Route path="/chatgpt/*" element={<ChatGPT />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
