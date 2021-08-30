import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Home from "./Home";
import Vision from "./introduction/Vision.js";
import ChallengeList from "./challenge/ChallengeList.js";
// import AuthenticationService from "../components/AuthenticationService";

const MainPage = () => {
  return (
    <div>
      <section><Navigation /></section>
      <section>
        <Route path="/" exact={true} component={Home} />
        <Route path="/vision" exact={true} component={Vision} />
        <Route path="/challenge-list" exact={true} component={ChallengeList} />
      </section>
    </div>
  )
}

export default MainPage;