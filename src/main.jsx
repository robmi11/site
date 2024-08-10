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
import Details from "./pages/Details.jsx";
import Home from "./pages/Home.jsx";
import Region from "./pages/Region.jsx";
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
      <Route
        path="/details/:country"
        element={<Details />}
      />
      <Route
        path="/region"
        element={<Region />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountriesState>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CountriesState>
  </React.StrictMode>,
);
