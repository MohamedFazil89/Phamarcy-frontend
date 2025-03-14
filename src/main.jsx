import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import App from "./App";
import HealthCare from "./components/healthcare";
import BabyCare from "./components/Babycare"
import PersonalCare from "./components/personalcare"
import MedicalDevice from "./components/medicaldevices"
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Home" element={<App />} />
          <Route path="/HealthCare" element={<HealthCare />} />
          <Route path="/BabyCare" element={<BabyCare />} />
          <Route path="/PersonalCare" element={<PersonalCare />} />
          <Route path="/MedicalDevice" element={<MedicalDevice />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
