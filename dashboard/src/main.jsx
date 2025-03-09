import { Provider } from "../src/components/ui/provider";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
