import React from "react";
import { Link } from  "react-router-dom";

const wrapper = {
  dsiplay: "flex",
};

const Navigation = () => {
  return (
    <section class="navigation-wrap">
      <article>
        <Link to="/">메인</Link>
      </article>
      <article>
        <Link to="/help">소개</Link>
      </article>
      <article>
        <Link to="/product">유료서비스</Link>
      </article>
      <article>
        <Link to="/login">로그인</Link>
      </article>
    </section>
  )
}

export default Navigation;