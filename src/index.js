import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvader } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvader>
      <App />
    </AppProvader>
  </React.StrictMode>,
  document.getElementById("root")
);
