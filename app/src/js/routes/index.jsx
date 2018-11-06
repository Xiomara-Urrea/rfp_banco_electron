import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/AppHeader/Header";

import { PrivateRoute } from "../helpers/PrivateRoute";
import { history } from "../store";
import { HomePage } from "../components/Home";
import { AppRegister } from "../components/Authentication/Register";
import { AppLogin } from "../components/Authentication/Login";
import { AppAccount } from "../components/Account/RoutComp";
import { AppUsers } from "../components/Users/RoutComp";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header name="CUENTA BANCARIA" />
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/register" component={AppRegister} />
          <Route path="/login" component={AppLogin} />
          <PrivateRoute path="/accounts" component={AppAccount} />
          <PrivateRoute path="/users" component={AppUsers} />
        </div>
      </Router>
    </div>
  )
}

export default Routes

// asd$123caballero
// mdcaballero@unac.edu.co
