import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FeedbackContextProvider } from "./context/FeedbackContext";

ReactDOM.render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <App />
    </FeedbackContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
