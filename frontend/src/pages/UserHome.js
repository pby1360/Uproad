import React from "react";
import UserHomeStyles from "../styles/UserHome.scss";

const UserHome = () => {
  return (
    <div className={UserHomeStyles}>
      <section className="user-home-container">
        <section className="top-banner">Banner</section>
        <section className="center-profile">User dashboard</section>
        <section className="bottom-dashboard">User dashboard</section>
      </section>      
    </div>
  )
}

export default UserHome;