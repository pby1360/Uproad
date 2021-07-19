import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const joinUproad = () => {
    handleClose();
    history.push('/join');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">회원가입</h2>
      <section>
        <article><Button className={classes.btnJoinUproad} onClick={joinUproad}>uproad 회원가입</Button></article>
        <article><Button className={classes.btnJoinKakao}>카카오 회원가입</Button></article>
        <article><Button className={classes.btnJoinNaver}>Naver 회원가입</Button></article>
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
      </section>
      <section className="navigation-login">
        <article className="navigation-item login">
          <Link to="/login"><Button variant="outlined" color="primary">로그인</Button></Link>
        </article>
        <article className="navigation-item login">
          <Button variant="contained" onClick={handleOpen} color="primary">회원가입</Button>
        </article>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </section>
  )
}

export default Navigation;