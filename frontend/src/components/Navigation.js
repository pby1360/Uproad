import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../styles/components/Navigation.scss';
import { Modal, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import axios from "../components/AxiosInstance";
import Loading from "../components/Loading";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Alert from "../components/SnackBarAlert";
import Auth from "./AuthenticationService";
import { useRef } from "react";

const { Kakao } = window;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnJoinTitle: {
    // borderBottom: "solid 2px #f04d4d",
    // paddingBottom: "0.25rem",
  },
  btnJoin: {
    display: "flex",
    flexFlow: "column",
  },
  btnJoinUproad : {
    backgroundColor: '#f04d4d',
    color: 'white',
    height: "2.75rem",
    marginBottom: '0.5rem',
    fontSize: '0.8rem',
    "&:hover": {
      backgroundColor: '#d93b3b',
    }
  },
  btnLoginId: {
    width: "20rem",
    marginBottom: "0.25rem",
  },
  btnLoginPw: {
    width: "20rem",
    marginBottom: "0.25rem",
  },
  btnJoinKakao : {},
  btnLoginFooter: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Navigation = () => {

  const alertRef = useRef();

  const [modalStyle] = React.useState(getModalStyle);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const classes = useStyles();

  const logout = () => {
    Auth.logout();
    if (Kakao.Auth.getAccessToken()) {
      Kakao.Auth.logout();
    }
    window.location.replace("/");
  }

  const loginWithKakao = () => {
    setLoading(true);
    Kakao.Auth.login({
      success: function(authObj) {
        console.log(authObj);
        getKakaoUserInfo(authObj.access_token);
      },
      fail: function(error) {
        console.error(error);
        setLoading(false);
      }
    })
  };

  const getKakaoUserInfo = (token) => {
    Kakao.API.request({
      url: '/v2/user/me',
      success: function(response) {
        console.log(response);
        Auth.loginWithKakao(response.kakao_account.email, token).then((response) => {
          if (response.status === 200) {
            console.log("200");
            Auth.registerSuccessfulLoginForJwt(response.data)
            handleCloseLogin();
            window.location.replace("/");
          } else {
            console.log("not 200");
          }
        }).catch((e) => {
          console.error(e);
        }).finally(() => {
          setLoading(false);
        })
      },
      fail: function(error) {
        console.error(error);
      },
    });
  };

  const unlink = () => {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        console.log(response);
      },
      fail: function(error) {
        console.log(error);
      },
    });
  };

  const loginWithUproad = (e) => {
    setLoading(true);
    e.preventDefault();
    const id = e.target.id.value;
    const pw = e.target.pw.value;
    console.log(id);
    console.log(pw);
    Auth.login(id, pw).then((response) => {
      if (response.status === 200) {
        console.log("200");
        Auth.registerSuccessfulLoginForJwt(response.data)
        handleCloseLogin();
        // window.location.replace(`/userhome/${e.target.id.value}`);
      } else {
        console.log("not 200");
      }
    }).catch((e) => {
      console.error(e);
    }).finally(() => {
      setLoading(false);
    })
  }

  const handleOpenJoin = () => {
    setOpenJoin(true);
  };

  const handleCloseJoin = () => {
    setOpenJoin(false);
  };

  const handleOpenLogin = () => {
    setOpenJoin(false);
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const joinBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className={classes.btnJoinTitle}>?????????</h2>
      <section className={classes.btnJoin}>
        <a href="#$" className={classes.btnJoinKakao} onClick={loginWithKakao}><img src="/assets/kakao_login_medium_wide.png" alt="????????? ?????????" /></a>
        {/* <Button startIcon={<MailOutlineIcon/>} className={classes.btnJoinUproad} onClick={ () => alertRef.current.handleClick("info", "????????? ?????? ??? ?????????. ????????? ???????????? ????????? ?????????.") }>????????? ?????????</Button> */}
        <Button startIcon={<MailOutlineIcon/>} className={classes.btnJoinUproad} onClick={ handleOpenLogin }>????????? ?????????</Button>
      </section>
    </div>
  );
  const loginBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className={classes.btnJoinTitle}>?????????</h2>
      <form onSubmit={loginWithUproad} className={classes.btnJoin}>
        <TextField name="id" className={classes.btnLoginId} variant="outlined" size="small" placeholder="?????????" />
        <TextField name="pw" className={classes.btnLoginPw} type="password" variant="outlined" size="small" placeholder="????????????" />
        <Button type="submit" startIcon={<LockOpenIcon/>} className={classes.btnJoinUproad}>?????????</Button>
        <section className={classes.btnLoginFooter}>
          <a href="#$">????????? ??????</a>
          <a style={{marginLeft: "0.5rem"}} href="/join">????????????</a>
        </section>
      </form>
    </div>
  );
  
  return (
    <div className={NavigationStyle}>
      <Loading active={isLoading} />
      <Alert ref={alertRef} />
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/">uproad</Link>
        </section>
        <nav className="navigation-nav">
          <ul className="navs">
            <li>
            <Link to="#" className="arrow">????????? ??????</Link>
              <ul className="sub-list">
                <li><Link to="/about">????????? ????</Link></li>
                <li><Link to="/help">???????????? ????</Link></li>
                <li><Link to="/help">?????? ????</Link></li>
              </ul>
            </li>
            <li>
            <Link to="#" className="arrow">?????????</Link>
              <ul className="sub-list">
                <li><Link to="/challenge-list">????????? ????????? ????</Link></li>
                {/* <li><Link to="/vision">????????? ?????????</Link></li> */}
                {/* <li><Link to="/vision">?????????</Link></li> */}
              </ul>
            </li>
            <li>
              <Link to="#" className="arrow">????????? ?????????</Link>
              <ul className="sub-list">
                <li><Link to="/vision">????????????</Link></li>
                <li><Link to="/vision">????????????</Link></li>
                <li><Link to="/vision">???????????? ??????</Link></li>
              </ul>
            </li>
            {/* <li><Link to="/vision">?????????</Link></li> */}
            <li><Link to="/">????????????</Link></li>
            <li>
              { Auth.isUserLoggedIn() ? <Link to="/mypage">???????????????</Link> : "" }
            </li>
          </ul>
        </nav>
        <section className="navigation-login">          
          { Auth.isUserLoggedIn() ? <Link to="/admin">?????????</Link> : "" }
          { Auth.isUserLoggedIn() ? <Link to="#" onClick={ () => logout() }>????????????</Link> : <Link to="#" onClick={handleOpenJoin}>?????????</Link>}
          { Kakao.Auth.getAccessToken() ? <Link to="#" onClick= { () => unlink() }>????????????</Link> : "" }
        </section>
      </section>
      <Modal
        open={openJoin}
        onClose={handleCloseJoin}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {joinBody}
      </Modal>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {loginBody}
      </Modal>
    </div>
  );
};

export default Navigation;