import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { Store } from "./Utils/StoreConfig/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<App /> }/>
      </Routes>
        
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
