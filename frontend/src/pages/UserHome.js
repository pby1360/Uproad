import React from "react";
import UserHomeStyles from "../styles/UserHome.scss";
import Room from "@material-ui/icons/Room";
import { Button } from "@material-ui/core";

const UserHome = () => {
  return (
    <div className={UserHomeStyles}>
      <section className="user-home-container">
        <section className="top-banner">Banner</section>
        <section className="center-profile">
          <article className="user-profile-img"><img src="/assets/ceo_info2.jpg" alt="ceo"></img></article>
          <article className="user-profile-info">
            <section>bala un</section>
            <section>디자이너</section>
            <section>WTM</section>
            <section><Room></Room>Icheon, korea, Repulic of</section>
          </article>
          <article className="user-profile-buttons">
            <Button>내 프로필 편집</Button>
            <Button>가용성 편집</Button>
            <Button>Adobe Portfolio 시험 사용</Button>
            <span>팔로잉9</span>
          </article>
          <article className="user-profile-date">

          </article>
        </section>
        <section className="bottom-dashboard">User dashboard</section>
      </section>
    </div>
  )
}

export default UserHome;