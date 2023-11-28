import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteIndex from "./routes/index.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteIndex />
    </Provider>
  </React.StrictMode>
);
