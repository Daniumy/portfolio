import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NightOwl from "./projects/NightOwl/NightOwl";
import AireLocal from "./projects/AireLocal/AireLocal";
import DappConnector from "./projects/DappConnector/DappConnector";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/NightOwl" element={<NightOwl />} />
        <Route path="/AireLocal" element={<AireLocal />} />
        <Route path="/DappConnector" element={<DappConnector />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
