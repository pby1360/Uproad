import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Home from "./Home";
import Vision from "./introduction/Vision.js";
import ChallengeList from "./challenge/ChallengeList.js";
import ChallengeDetail from "./challenge/ChallengeDetail";
import About from "./introduction/About.js"
import MyPage from "./user/MyPage.js"
// import AuthenticationService from "../components/AuthenticationService";

const MainPage = () => {
  return (
    <div>
      <section><Navigation /></section>
      <section>
        <Route path="/" exact={true} component={Home} />
        <Route path="/vision" exact={true} component={Vision} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/challenge-list" exact={true} component={ChallengeList} />
        <Route path="/challenge-detail/:id" exact={true} component={ChallengeDetail} />
        <Route path="/mypage" exact={true} component={MyPage} />
      </section>
    </div>
  )
}

export default MainPage;