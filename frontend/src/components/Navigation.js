import React from 'react';
import { Link } from 'react-router-dom';
import NavigationStyle from '../styles/components/Navigation.scss';

const Navigation = () => {
  
  return (
    <div className={NavigationStyle}>
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/">Uproad</Link>
        </section>
        <nav className="navigation-nav">
          <ul class="clearfix">
            <li>
            <Link to="#">업로드 소개</Link>
              <ul>
                <li><Link to="/vision">비전</Link></li>
                <li><Link to="/help">가치관</Link></li>
                <li><Link to="/help">히스토리</Link></li>
                <li><Link to="/help">소식</Link></li>
              </ul>
            </li>
            <li>
            <Link to="#">챌린지</Link>
              <ul>
                <li><Link to="/vision">무작정 챌린지</Link></li>
                <li><Link to="/vision">만들기 챌린지</Link></li>
                <li><Link to="/vision">패키지</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#">챌린지 가이드</Link>
              <ul>
                <li><Link to="/vision">참여방법</Link></li>
                <li><Link to="/vision">참여보상</Link></li>
                <li><Link to="/vision">자주묻는 질문</Link></li>
              </ul>
            </li>
            <li><Link to="/vision">스토어</Link></li>
            <li><Link to="/vision">마이페이지</Link></li>
          </ul>
        </nav>
        <section className="navigation-login">
          <Link to="/">로그인</Link>
          <Link to="/">회원가입</Link>
        </section>
      </section>
      <section className="dropdown"></section>
    </div>
  );
};

export default Navigation;