import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";
import Help from "./Help";
import Home from "./Home";

const MainPage = () => {
  return (
    <div className="main-container">
      <section className="main-navigation">
        <Navigation />
      </section>
      <section className="main-content">
        <Route path="/" exact={true} component={Home} />
        <Route path="/help" exact={true} component={Help} />
        <Route path="/product" exact={true} component={Product} />
        <Route path="/login" exact={true} component={Login} />
      </section>
    </div>
  )
}

export default MainPage;