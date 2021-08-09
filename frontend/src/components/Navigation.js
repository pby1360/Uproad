import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// import axios from "axios";
import AuthenticationService from "./AuthenticationService";

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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnJoinUproad : {
    backgroundColor: '#035AA6',
    color: 'white',
    width: '100%',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  btnJoinKakao : {
    backgroundColor: '#FFDE00',
    width: '100%',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  btnJoinNaver : {
    backgroundColor: '#00C739',
    color: 'white',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
}));

const Navigation = () => {
  // const baseUrl = "http://localhost:8080";
  const history = useHistory();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);


  const handleOpenJoin = () => {
    setOpenJoin(true);
  };

  const handleCloseJoin = () => {
    setOpenJoin(false);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const joinUproad = () => {
    handleCloseJoin();
    history.push('/join');
  };

  async function login (e) {
    e.preventDefault();
    AuthenticationService
        .executeJwtAuthenticationService(e.target.id.value, e.target.password.value)
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            AuthenticationService.registerSuccessfulLoginForJwt(response.data)
            handleCloseLogin();
            window.location.reload();
          }
    }).catch((error) =>{
        console.error(error);
        // this.setState({showSuccessMessage:false})
        // this.setState({hasLoginFailed:true})
    })
    // e.preventDefault();
    // const data = {
    //   username: e.target.id.value,
    //   password: e.target.password.value,
    // }
    // console.log(e.target.id.value);
    // await axios.post(baseUrl + "/authenticate", data, {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // }
    // ) 
    // .then(function (response) {
    //      console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // }).then(function() {
    // });
  }

  const joinBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">회원가입</h2>
      <section>
        <article><Button className={classes.btnJoinUproad} onClick={joinUproad}>uproad 회원가입</Button></article>
        <article><Button className={classes.btnJoinKakao}>카카오 회원가입</Button></article>
        <article><Button className={classes.btnJoinNaver}>Naver 회원가입</Button></article>
      </section>
    </div>
  );
  const loginBody = (
    <div style={modalStyle} className="login-container">
      <section className="login-btn-close"><Button onClick={handleCloseLogin}>x</Button></section>
      <section className="login-form">
        <h2 id="simple-modal-title">로그인</h2>
        <form onSubmit={login}>
          <section className="login-input"><TextField name="id" placeholder="ID를 입력하세요" variant="outlined" size="small" fullWidth></TextField></section>
          <section className="login-input"><TextField name="password" type="password" placeholder="비밀번호를 입력하세요" variant="outlined" size="small" fullWidth></TextField></section>
          <section className="login-btn-submit"><Button type="submit" color="primary" fullWidth variant="contained">로그인</Button></section>
        </form>
      </section>
    </div>
  );
  return (
    <section className="navigation-wrap">
      <section className="navigation-logo">
        <article>
          <Link to="/"><img className="navigation-logo-img" src="/assets/uproad_logo3.png" alt="logo" /></Link>
        </article>
      </section>
      <section className="navigation-menu">        
        <article className="navigation-item">
          <Link to="/help">소개</Link>
        </article>
        <article className="navigation-item">
          <Link to="/help">컨텐츠</Link>
        </article>
        <article className="navigation-item">
          <Link to="/product">프리미엄</Link>
        </article>
        <article className="navigation-item">
          <Link to="/price">구독료</Link>
        </article>
      </section>
      <section className="navigation-login">
        <article className="navigation-item login">
          <Button variant="outlined" onClick={handleOpenLogin} color="primary">로그인</Button>
        </article>
        <article className="navigation-item login">
          <Button variant="contained" onClick={handleOpenJoin} color="primary">회원가입</Button>
        </article>
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
    </section>
  )
}

export default Navigation;