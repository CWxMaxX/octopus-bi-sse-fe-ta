import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "../src/components/ui/provider"

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider >
    <App />
  </Provider>
);
