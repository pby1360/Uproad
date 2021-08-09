import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';
// import { useHistory } from 'react-router-dom';
// import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const UserNavigation = () => {
  // const baseUrl = "http://localhost:8080";
  // const history = useHistory();

  const logout = () => {
    AuthenticationService.logout();
    window.location.reload();
    // history.push("/");
  }

  return (
    <section className="user-navigation-wrap">
      {/* <section className="user-navigation-logo">
      </section> */}
      <section className="user-navigation-menu">
        <article className="user-navigation-item">
          <Link to="/"><img className="user-navigation-logo-img" src="/assets/uproad_logo3.png" alt="logo" /></Link>
        </article>
        <article className="user-navigation-item">
          <Link to="/">당신을 위한</Link>
        </article>
        <article className="user-navigation-item">
          <Link to="/">탐색</Link>
        </article>
        <article className="user-navigation-item">
          <Link to="/">라이브스트림</Link>
        </article>
        <article className="user-navigation-item">
          <Link to="/">직업</Link>
        </article>
      </section>
      <section className="user-navigation-search">
        <article>
        <TextField variant="outlined" size="small" fullWidth></TextField>
        </article>
      </section>
      <section className="user-navigation-login">
        <article className="user-navigation-item login">
          <Button variant="outlined" color="primary" onClick={logout}>로그아웃</Button>
        </article>
      </section>
    </section>
  )
}

export default UserNavigation;