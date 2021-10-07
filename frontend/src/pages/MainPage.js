import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Home from "./Home";
import Vision from "./introduction/Vision.js";
import ChallengeList from "./challenge/ChallengeList.js";
import ChallengeDetail from "./challenge/ChallengeDetail";
import About from "./introduction/About.js"
import MyPage from "./user/MyPage.js"
import Admin from "./admin/Admin"
import Login from "./Login.js"
import Join from "./Join.js"
import PrivateRoute from "../components/PrivateRoute";
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
        <PrivateRoute path="/mypage" exact={true} component={MyPage} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/Login" exact={true} component={Login} />
        <Route path="/Join" exact={true} component={Join} />
      </section>
    </div>
  )
}

export default MainPage;