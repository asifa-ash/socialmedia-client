import React, { useState } from "react";

// import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../Utils/StoreConfig/reducers";

function Auth() {
  const [IsSignUp, setIsSignUP] = useState(false);
  // dispatch
  const dispatch = useDispatch();
  const nav = useNavigate()

  const [Data, setData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (IsSignUp) {
      dispatch(signUp(Data));

    } else {
      dispatch(logIn(Data));
      

   
      
    }
  };

  const reSetForm = () => {
    setConfirmPass(true);
    setData({ name: "", username: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="sign">
      <span className="circle"></span>

      <div className="signForm">
        <Form action="" className="signFormData" onSubmit={handleSubmit}>
          <h1 className="h3" style={{ color: "aqua" }}>
            {IsSignUp ? "SignUp Form" : "LogIn Form"}
          </h1>
          {IsSignUp && (
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={Data.name}
            />
          )}

          <Form.Control
            type="email"
            name="username"
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={Data.username}
          />
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            value={Data.password}
          />
          {IsSignUp && (
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="ConfirmPassword"
              onChange={handleChange}
              value={Data.confirmPassword}
            />
          )}
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            *confirm Password is not same
          </span>

          <Button variant="primary" type="Submit">
            {IsSignUp ? "Sign In" : "Log In"}
          </Button>

          <p
            style={{ color: "gray", cursor: "pointer" }}
            onClick={() => {
              setIsSignUP((prev) => !prev);
              reSetForm();
            }}
          >
            {IsSignUp
              ? "Already have an account.?Login Here!"
              : "Don't have an account? Sign UP"}
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Auth;
