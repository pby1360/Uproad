import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../styles/components/Navigation.scss';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "../components/AxiosInstance";
import Loading from "../components/Loading";

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
  btnJoinUproad : {
    backgroundColor: '#f04d4d',
    color: 'white',
    width: '100%',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    "&:hover": {
      backgroundColor: '#d93b3b',
    }
  },
  btnJoinKakao : {
    backgroundColor: '#f9e000',
    width: '100%',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    "&:hover": {
      backgroundColor: '#ffd500',
    }
  },
}));

const Navigation = () => {

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
        console.log("loginWithKakao");
        console.log(authObj);
        getKakaoUserInfo();
      },
    })
  };

  const getKakaoUserInfo = () => {
    Kakao.API.request({
      url: '/v2/user/me',
      success: function(response) {
        console.log("getKakaoUserInfo");
        console.log(response);
        getUproadUserInfo(response);
        // window.location.replace("/");
      },
      fail: function(error) {
        console.log("getKakaoUserInfo");
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
      <h2 id="simple-modal-title">로그인</h2>
      <section>
        <Button className={classes.btnJoinKakao} onClick={loginWithKakao}>카카오로 로그인</Button>
        <Button className={classes.btnJoinUproad}>이메일로 로그인</Button>
      </section>
    </div>
  );
  
  return (
    <div className={NavigationStyle}>
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
            {/* <li><Link to="/admin">관리자</Link></li> */}
          </ul>
        </nav>
        <section className="navigation-login">
          { Kakao.Auth.getAccessToken() ? <Link to="#" onClick={ () => logout() }>로그아웃</Link> : <Link to="#" onClick={handleOpenJoin}>로그인</Link>}
          { Kakao.Auth.getAccessToken() ? <Link to="#" onClick= { () => unlink() }>연결끊기</Link> : <Link to="/">회원가입</Link> }
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
      <Loading active={isLoading} />
    </div>
  );
};

export default Navigation;