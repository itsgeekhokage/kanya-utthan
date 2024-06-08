/** @format */

// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import AllRequests from "./adminpanel/requests/AllRequests";
import ApproveRequests from "./adminpanel/requests/ApproveRequests";
import AllRegistrations from "./adminpanel/registrations/AllRegistrations";
import ApproveRegistrations from "./adminpanel/registrations/ApproveRegistrations";
import Home from "./components/homepage/Home";
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/sign-in"
            element={<SignIn />}
          />
          <Route
            path="/sign-up"
            element={<SignUp />}
          />
          <Route
            path="/registrations"
            element={<AllRegistrations />}
          />
          <Route
            path="/edit/:i"
            element={<ApproveRegistrations />}
          />
          <Route
            path="/approve/requests/:i"
            element={<ApproveRequests />}
          />
          <Route
            path="/requests"
            element={<AllRequests />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
