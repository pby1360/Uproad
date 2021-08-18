import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UserNavigationStyles from "../styles/UserNavigation.scss";
import { withStyles } from '@material-ui/core/styles';
import AuthenticationService from "./AuthenticationService";
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
// import axios from "./AxiosInstance.js";

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: "1.5rem",
      height: "2rem",
      width: "25rem",
    },
  },
})(TextField);

const UserNavigation = () => {

  const info = JSON.parse(localStorage.getItem("info"));

  const logout = () => {
    AuthenticationService.logout();
    window.location.replace("/");
  }

  return (
    <section className={UserNavigationStyles}>
      <section className="user-navigation-wrap">
        <section className="user-navigation-menu">
          <article className="user-navigation-item">
            <Link to={`/userhome/${info.id}`}><img className="user-navigation-logo-img" src="/assets/uproad_logo3.png" alt="logo" /></Link>
          </article>
          <article className="user-navigation-item">
            <Link to="/">당신을 위한</Link>
          </article>
          <article className="user-navigation-item">
            <Link to="/explore">탐색</Link>
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
          <CssTextField
            className="search-input"
            placeholder="검색..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          </article>
        </section>
        <section className="user-navigation-login">
          <article className="user-navigation-item login">
            <Button variant="outlined" color="primary" onClick={logout}>로그아웃</Button>
          </article>
        </section>
      </section>
    </section>
  )
}

export default UserNavigation;