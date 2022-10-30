import "./app.scss";
import Auth from "./page/Auth/Auth";
import Home from "./page/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  const state = useSelector((state) => state.userReducers);
  console.log(state);

  




  return (
    <>
      <Routes>
        <Route path="/" element={state.status === 200?<Navigate to={"/home"} />:<Navigate to={"/auth" } />} />
        <Route path="/auth" element={state.status===200?<Navigate to={"/home"}/>:<Auth/>}/>
        <Route path="/home" element={state.status===200?<Home/>:<Navigate to={"/auth"}/>} />
      </Routes>
    </>
  );
}

export default App;
