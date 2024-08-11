// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ColorModeProvider } from "./context/theme/ColorModeContext";
import { CountriesProvider } from "./context/countries/CountriesContext";
import App from "./App";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}>
      <Route
        index={true}
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/details/:name"
        element={<DetailsPage />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ColorModeProvider>
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  </ColorModeProvider>,
  // </React.StrictMode>,
);
