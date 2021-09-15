import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../styles/components/Navigation.scss';

const { Kakao } = window;

const Navigation = () => {

  console.log(Kakao.Auth.getAccessToken());

  const logout = () => {
    Kakao.Auth.logout(function() {
      window.location.replace("/");
    });
  }
  
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
          { Kakao.Auth.getAccessToken() ? <Link onClick={ () => logout() }>로그아웃</Link> : <Link to="/login">로그인</Link>}
          {/* <Link to="/">회원가입</Link> */}
        </section>
      </section>
    </div>
  );
};

export default Navigation;