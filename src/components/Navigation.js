import React from "react";
import { Link } from  "react-router-dom";

const Navigation = () => {
  return (
    <section class="navigation-wrap">
      <section class="navigation-logo">
        <article>
          <Link to="/"><img class="navigation-logo-img" src="/assets/uproad_logo2.png" alt="logo" /></Link>
        </article>
      </section>
      <section class="navigation-menu">        
        <article class="navigation-item">
          <Link to="/help">소개</Link>
        </article>
        <article class="navigation-item">
          <Link to="/help">컨텐츠</Link>
        </article>
        <article class="navigation-item">
          <Link to="/help">컨텐츠</Link>
        </article>
        <article class="navigation-item">
          <Link to="/help">커뮤니티</Link>
        </article>
        <article class="navigation-item">
          <Link to="/product">프리미엄</Link>
        </article>
      </section>
      <section class="navigation-login">
        <article class="navigation-item login">
          <Link to="/login">로그인</Link>
        </article>
        <article class="navigation-item login">
          <Link to="/login">회원가입</Link>
        </article>
      </section>
    </section>
  )
}

export default Navigation;