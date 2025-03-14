import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import App from "./App";
import ProductPage from "./components/ProductPage";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Home" element={<App />} />
          <Route path="/Product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
