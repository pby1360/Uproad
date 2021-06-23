import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";
import Help from "./Help";

const MainPage = () => {
  return (
    <div class="main-container">
      <secition class="main-navigation">
        <Navigation />
        <Route path="/help" exact={true} component={Help} />
        <Route path="/product" exact={true} component={Product} />
        <Route path="/login" exact={true} component={Login} />
      </secition>      
    </div>
  )
}

export default MainPage;