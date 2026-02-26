import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
