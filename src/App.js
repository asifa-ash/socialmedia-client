import "./app.scss";
import Auth from "./page/Auth/Auth";
import Home from "./page/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // const state = useSelector((state) => state.reducer);

  




  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/auth'}/>} />
      </Routes>
    </>
  );
}

export default App;
