import React from "react";
import { Link } from  "react-router-dom";

const Navigation = () => {
  return (
    <section class="navigation-wrap">
      <section class="navigation-logo">
        <article>
            <Link to="/">업로드</Link>
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
          <Link to="/help">배우기</Link>
        </article>
        <article class="navigation-item">
          <Link to="/product">유료서비스</Link>
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