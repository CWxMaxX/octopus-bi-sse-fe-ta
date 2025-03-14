import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "../src/components/ui/provider";
import { Provider as ReduxStoreProvider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxStoreProvider store={store}>
    <Provider>
      <App />
    </Provider>
  </ReduxStoreProvider>
);
