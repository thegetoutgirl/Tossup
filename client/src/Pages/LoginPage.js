import React from "react";
import Header from "../components/Header/header.js"
import LoginForm from "../../src/components/Login/Login.js"
import SignupExpander from "../components/Login/expander.js"

function LoginPage(props) {
  return (
    <div
    // Carousel for login page: should be in className=container"
    >
      <Header />
    <br />
    <div className="container login-form">
    <LoginForm className="login-form" handleInputChange={props.handleInputChange} login={props.login} email={props.email} password={props.password} /> 
    <SignupExpander />
    </div>
    </div>
  );
}

export default LoginPage;
