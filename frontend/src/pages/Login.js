import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.scss"

const Login = () => {
  return (
    <div className="login-container">
      <section className="login-buttons">
        <Button variant="contained" style={{backgroundColor: "rgb(255, 232, 18)"}}>카카오로 로그인</Button>
        <Button variant="contained" color="primary">다른 방법으로 로그인</Button>
      </section>
    </div>
  )
}

export default Login;