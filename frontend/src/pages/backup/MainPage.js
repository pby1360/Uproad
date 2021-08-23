import React from "react";
import Navigation from "../components/Navigation";
import UserNavigation from "../components/UserNavigation";
import { Route } from "react-router-dom";
import Product from "./Product";
import Price from "./Price";
import Help from "./Help";
import Home from "./Home";
import join from "./Join";
import userHome from "./UserHome";
import explore from "./Explore";
import profile from "./UserProfile";
import AuthenticationService from "../components/AuthenticationService";

const main = () => {
  if (AuthenticationService.isUserLoggedIn()) {
    return (
      <div>
        <section>
          <UserNavigation />
        </section>
        <section>
          <Route path="/userhome/:id" exact={true} component={userHome} />
          <Route path="/explore" exact={true} component={explore} />
          <Route path="/profile/:id" exact={true} component={profile} />
        </section>
      </div>
    )
  } else {
    return (
      <div className="main-container">
        <section className="main-navigation">
          <Navigation />
        </section>
        <section className="main-content">
          <Route path="/" exact={true} component={Home} />
          <Route path="/help" exact={true} component={Help} />
          <Route path="/product" exact={true} component={Product} />
          <Route path="/price" exact={true} component={Price} />
          <Route path="/join" exact={true} component={join} />
          <Route path="/userhome" exact={true} component={userHome} />
        </section>
      </div>
    )
  }
  
}

const MainPage = () => {
  return (
    <div>
      {main()}
    </div>
  )
}

export default MainPage;