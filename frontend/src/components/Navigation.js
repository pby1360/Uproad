import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../styles/components/Navigation.scss';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "../components/AxiosInstance";
import Loading from "../components/Loading";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Alert from "../components/SnackBarAlert";
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
  btnJoinKakao : {},
}));

const Navigation = () => {

  const alertRef = useRef();

  const [modalStyle] = React.useState(getModalStyle);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const classes = useStyles();

  const logout = () => {
    Kakao.Auth.logout(function() {
      window.location.replace("/");
    });
  }

  const loginWithKakao = () => {
    setLoading(true);
    Kakao.Auth.login({
      success: function(authObj) {
        // console.log(authObj);
        getKakaoUserInfo();
      },
    })
  };

  const getKakaoUserInfo = () => {
    Kakao.API.request({
      url: '/v2/user/me',
      success: function(response) {
        // console.log(response);
        getUproadUserInfo(response);
      },
      fail: function(error) {
        // console.log("getKakaoUserInfo");
        console.error(error);
      },
    });
  };

  const getUproadUserInfo = async (info) => {
    console.log("getUproadUserInfo");
    console.log(info);
    const data = {
      nick_name: info.properties.nickname,
      gender: info.kakao_account.gender,
      email: info.kakao_account.email,
      join_path: "kakao",
    }
    await axios.post("/api/user/join", data, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => {
      console.log(response);
      window.location.replace("/");
    }).catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

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

  const handleOpenJoin = () => {
    setOpenJoin(true);
  };

  const handleCloseJoin = () => {
    setOpenJoin(false);
  };

  const joinBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className={classes.btnJoinTitle}>로그인</h2>
      <section className={classes.btnJoin}>
        <a href="#$" className={classes.btnJoinKakao} onClick={loginWithKakao}><img src="/assets/kakao_login_medium_wide.png" alt="카카오 로그인" /></a>
        <Button startIcon={<MailOutlineIcon/>} className={classes.btnJoinUproad} onClick={ () => alertRef.current.handleClick("info", "서비스 준비 중 입니다. 카카오 로그인을 이용해 주세요.") }>이메일 로그인</Button>
      </section>
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
            <Link to="#" className="arrow">업로드 소개</Link>
              <ul className="sub-list">
                <li><Link to="/about">가치관 💬</Link></li>
                <li><Link to="/help">히스토리 📜</Link></li>
                <li><Link to="/help">소식 📰</Link></li>
              </ul>
            </li>
            <li>
            <Link to="#" className="arrow">챌린지</Link>
              <ul className="sub-list">
                <li><Link to="/challenge-list">무작정 챌린지 😎</Link></li>
                {/* <li><Link to="/vision">만들기 챌린지</Link></li> */}
                {/* <li><Link to="/vision">패키지</Link></li> */}
              </ul>
            </li>
            <li>
              <Link to="#" className="arrow">챌린지 가이드</Link>
              <ul className="sub-list">
                <li><Link to="/vision">참여방법</Link></li>
                <li><Link to="/vision">참여보상</Link></li>
                <li><Link to="/vision">자주묻는 질문</Link></li>
              </ul>
            </li>
            {/* <li><Link to="/vision">스토어</Link></li> */}
            <li><Link to="/">커뮤니티</Link></li>
            <li>
              { Kakao.Auth.getAccessToken() ? <Link to="/mypage">마이페이지</Link> : "" }
            </li>
          </ul>
        </nav>
        <section className="navigation-login">          
          { Kakao.Auth.getAccessToken() ? <Link to="/admin">관리자</Link> : "" }
          { Kakao.Auth.getAccessToken() ? <Link to="#" onClick={ () => logout() }>로그아웃</Link> : <Link to="#" onClick={handleOpenJoin}>로그인</Link>}
          { Kakao.Auth.getAccessToken() ? <Link to="#" onClick= { () => unlink() }>연결끊기</Link> : "" }
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
    </div>
  );
};

export default Navigation;