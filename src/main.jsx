// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import CountriesState from "./context/countries/CountriesState";
import { ThemeProvider } from "./context/theme/ThemeContext";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}>
      <Route
        path="/"
        index="true"
        element={<Home />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CountriesState>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </CountriesState>,
  // </React.StrictMode>,
);
