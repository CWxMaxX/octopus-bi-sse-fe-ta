import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../src/components/ui/provider";
import Dashboard from "dashboard/Dashboard";
import Log from "log/Log";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
