import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NightOwl from "./projects/NightOwl/NightOwl";
import AireLocal from "./projects/AireLocal/AireLocal";
import DappConnector from "./projects/DappConnector/DappConnector";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(HttpApi)
	.init({
		supportedLngs: ["es", "en"],
		fallbackLng: localStorage.getItem("language") || "es",
		detection: {
			order: ["localStorage","htmlTag", "cookie", "htmlTag", "path"],
			caches: ["cookie"],
		},
		backend: { 
			loadPath: "/assets/language/{{lng}}/translations.json",
		},
	});
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/NightOwl" element={<NightOwl />} />
        <Route path="/AireLocal" element={<AireLocal />} />
        <Route path="/DappConnector" element={<DappConnector />} selectedLanguage/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
