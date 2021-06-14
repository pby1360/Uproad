import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";
import Help from "./Help";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      {/* <Route path="/" exact={true} component={MainPage} /> */}
      <Route path="/help" exact={true} component={Help} />
      <Route path="/product" exact={true} component={Product} />
      <Route path="/login" exact={true} component={Login} />
    </div>
  )
}

export default MainPage;