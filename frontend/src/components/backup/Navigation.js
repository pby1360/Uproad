import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";
import Loading from "./Loading";

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
  const history = useHistory();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

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
    setLoading(true);
    e.preventDefault();
    AuthenticationService
        .executeJwtAuthenticationService(e.target.id.value, e.target.password.value)
        .then((response) => {
          if (response.status === 200) {
            AuthenticationService.registerSuccessfulLoginForJwt(response.data)
            handleCloseLogin();
            window.location.replace(`/userhome/${e.target.id.value}`);
          }
    }).catch((error) =>{
        console.error(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  const joinBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">????????????</h2>
      <section>
        <article><Button className={classes.btnJoinUproad} onClick={joinUproad}>uproad ????????????</Button></article>
        <article><Button className={classes.btnJoinKakao}>????????? ????????????</Button></article>
        <article><Button className={classes.btnJoinNaver}>Naver ????????????</Button></article>
      </section>
    </div>
  );
  const loginBody = (
    <div style={modalStyle} className="login-container">
      <section className="login-btn-close"><Button onClick={handleCloseLogin}>x</Button></section>
      <section className="login-form">
        <h2 id="simple-modal-title">?????????</h2>
        <form onSubmit={login}>
          <section className="login-input"><TextField name="id" placeholder="ID??? ???????????????" variant="outlined" size="small" fullWidth></TextField></section>
          <section className="login-input"><TextField name="password" type="password" placeholder="??????????????? ???????????????" variant="outlined" size="small" fullWidth></TextField></section>
          <section className="login-btn-submit"><Button type="submit" color="primary" fullWidth variant="contained">?????????</Button></section>
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
          <Link to="/vision">??????</Link>
        </article>
        <article className="navigation-item">
          <Link to="/help">?????????</Link>
        </article>
        <article className="navigation-item">
          <Link to="/product">????????????</Link>
        </article>
        <article className="navigation-item">
          <Link to="/price">?????????</Link>
        </article>
      </section>
      <section className="navigation-login">
        <article className="navigation-item login">
          <Button variant="outlined" onClick={handleOpenLogin} color="primary">?????????</Button>
        </article>
        <article className="navigation-item login">
          <Button variant="contained" onClick={handleOpenJoin} color="primary">????????????</Button>
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
      <Loading active={isLoading} />
    </section>
  )
}

export default Navigation;