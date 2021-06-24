import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";
import Help from "./Help";
import Home from "./Home";

const MainPage = () => {
  return (
    <div class="main-container">
      <secition class="main-navigation">
        <Navigation />
      </secition>
      <section class="main-content">
        <Route path="/" exact={true} component={Home} />
        <Route path="/help" exact={true} component={Help} />
        <Route path="/product" exact={true} component={Product} />
        <Route path="/login" exact={true} component={Login} />
      </section>
    </div>
  )
}

export default MainPage;