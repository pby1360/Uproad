import React from "react";
import { Link } from  "react-router-dom";
import Button from '@material-ui/core/Button';

const Navigation = () => {
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
        {/* <article className="navigation-item">
          <Link to="/help">컨텐츠</Link>
        </article> */}
        {/* <article className="navigation-item">
          <Link to="/help">커뮤니티</Link>
        </article> */}
        <article className="navigation-item">
          <Link to="/product">프리미엄</Link>
        </article>
      </section>
      <section className="navigation-login">
        <article className="navigation-item login">
          <Link to="/login"><Button variant="outlined" color="primary">로그인</Button></Link>
        </article>
        <article className="navigation-item login">
          <Link to="/login"><Button variant="contained" color="primary">회원가입</Button></Link>
        </article>
      </section>
    </section>
  )
}

export default Navigation;