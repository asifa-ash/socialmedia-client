import "./app.scss";
import Auth from "./page/Auth/Auth";
import Home from "./page/Home/Home.jsx";
import Profile from "./page/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const userD = useSelector((state) => state.reducer);
  useEffect(() => {
    console.log(userD)
  }, [userD]);
  console.log(userD,"hellop");
  let user =userD.userData
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={<Home /> }
        />
      </Routes>
      {/* <Home/>  */}
      {/* <Profile/> */}
      <Auth />
    </div>
  );
}

export default App;
