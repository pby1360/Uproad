import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const UserNavigation = () => {
  // const baseUrl = "http://localhost:8080";
  const history = useHistory();

  const logout = () => {
    AuthenticationService.logout();
    window.location.reload();
    // history.push("/");
  }

  return (
    <section className="navigation-wrap">
      <section className="navigation-logo">
        <article>
          <Link to="/"><img className="navigation-logo-img" src="/assets/uproad_logo3.png" alt="logo" /></Link>
        </article>
      </section>
      <section className="navigation-menu">        
        <article className="navigation-item">
          <Link to="/">마이페이지</Link>
        </article>
      </section>
      <section className="navigation-login">
        <article className="navigation-item login">
          <Button variant="outlined" color="primary" onClick={logout}>로그아웃</Button>
        </article>
      </section>
    </section>
  )
}

export default UserNavigation;